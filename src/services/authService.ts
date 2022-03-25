import { store } from '../redux/store'
import { setLoggedUser, setToken } from '../redux/auth/authSlice'
import { NewUser, User } from '../redux/main/types'

const authHeader = () => {
  const token = store.getState().auth.token
  if (!token) {
    throw new Error(`Invalid token provided`)
  }
  return {
    'Content-Type': 'application/json',
    Authorization: `Basic ${token}`,
  }
}

export const signUp = async (newUser: NewUser): Promise<void> => {
  const response = await fetch('api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  })
  if (response.status !== 200) {
    throw await response.json()
  }

  const user: User = await response.json()
  store.dispatch(setLoggedUser(user))

  const { email, password } = newUser
  store.dispatch(setToken({ email, password }))
}

export const login = async (): Promise<void> => {
  const response = await fetch(`api/auth/login`, { headers: authHeader() })
  if (response.status !== 200) {
    throw await response.json()
  }
  const user: User = await response.json()
  store.dispatch(setLoggedUser(user))
}