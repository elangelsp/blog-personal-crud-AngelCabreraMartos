import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);


  return (
    <header className="bg-gray-800 text-white">
      <div className="flex justify-between items-center py-4 px-6">
        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>
        </div>

        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">
              Hola, <span className="font-medium text-white">{user.username}</span>
            </span>
            <button
              onClick={logout}
              className="hover:bg-red-700 text-white text-sm px-3 py-1 rounded-md"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link
              to="/register"
              className="hover:bg-green-700 text-white text-sm px-3 py-1 rounded-md"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="hover:bg-blue-700 text-white text-sm px-3 py-1 rounded-md"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}



export default Header