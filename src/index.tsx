import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import 'index.css'
import { store } from 'redux/store'
import AdminPanel from 'components/admin/AdminPanel'
import App from 'components/App'
import LoginPage from 'components/auth/LoginPage'
import LogoutPage from 'components/auth/LogoutPage'
import SignUpPage from 'components/auth/SignUpPage'
import EmptyPage from 'components/EmptyPage'
import ErrorPage from 'components/ErrorPage'
import HomePage from 'components/HomePage'

render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='' element={<HomePage />} />
            <Route path='admin' element={<AdminPanel />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='sign-up' element={<SignUpPage />} />
            <Route path='logout' element={<LogoutPage />} />
            <Route path='error' element={<ErrorPage />} />
          </Route>
          <Route path='error' element={<h2>test</h2>} />
          <Route path='*' element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
