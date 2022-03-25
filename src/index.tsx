import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import 'index.css'
import { store } from 'redux/store'
import AdminPanel from 'components/admin/AdminPanel'
import App from 'components/App'
import Login from 'components/auth/Login'
import Logout from 'components/auth/Logout'
import SignUp from 'components/auth/SignUp'
import Empty from 'components/Empty'
import Error from 'components/Error'
import Home from 'components/Home'

render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='' element={<Home />} />
            <Route path='admin' element={<AdminPanel />} />
            <Route path='login' element={<Login />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path='logout' element={<Logout />} />
            <Route path='error' element={<Error />} />
          </Route>
          <Route path='error' element={<h2>test</h2>} />
          <Route path='*' element={<Empty />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
