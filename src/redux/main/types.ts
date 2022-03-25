export type Role = 'USER' | 'ACCOUNTANT' | 'ADMINISTRATOR' | 'AUDITOR'

export type Period = {
  period?: string
}

export type DeleteUser = {
  username: string
}

export type User = {
  id: number
  name: string
  lastname: string
  email: string
  roles: string[]
}

export type UpdateRole = {
  user: string
  role: Role
  operation: 'GRANT' | 'REMOVE'
}

export type UpdateLockUser = {
  user: string
  operation: 'LOCK' | 'UNLOCK'
}

export type Payment = {
  employee: string
  period: string
  salary: number
}

export type NewUser = {
  name: string
  lastname: string
  email: string
  password: string
}

export type UpdatePassword = {
  newPassword: string
}

export type Event = {
  id: number
  date: string
  action:
    | 'CREATE_USER'
    | 'CHANGE_PASSWORD'
    | 'ACCESS_DENIED'
    | 'LOGIN_FAILED'
    | 'GRANT_ROLE'
    | 'REMOVE_ROLE'
    | 'LOCK_USER'
    | 'UNLOCK_USER'
    | 'DELETE_USER'
    | 'BRUTE_FORCE'
  subject: string
  object: string
  path: string
}

export interface ErrorResponse {
  error: string
  message: string
  path: string
  status: number
  timestamp: Date
}