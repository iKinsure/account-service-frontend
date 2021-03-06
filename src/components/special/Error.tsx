import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { logoutUser } from 'redux/auth/authSlice'
import { useAppDispatch } from 'redux/hooks'
import { ErrorResponse } from 'redux/main/types'

/**
 * Log out when redirected here
 */
const Error = () => {
  const { state } = useLocation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(logoutUser())
  }, [dispatch])

  const { status, error, message, timestamp, path } = state as ErrorResponse

  return (
    <div>
      <h2>Error</h2>
      <p>{`Status: ${status} ${error}`}</p>
      <p>{`Message: ${message}`}</p>
      <p>{`Timestamp: ${timestamp}`}</p>
      <p>{`Path: ${path}`}</p>
      <Link to='/'>
        <button>Go back</button>
      </Link>
    </div>
  )
}

export default Error
