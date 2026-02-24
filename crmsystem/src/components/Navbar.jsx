import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setAuthUser, setIsLoggedin } from '../features/userSlice.js'

function Navbar() {

    let isLoggedin = useSelector((state) => state.user.isLoggedin);
    let user = useSelector((state) => state.user.authUser)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    return (
        <nav className="w-full bg-gradient-to-r from-[#1a0b2e] via-[#2a0f4f] to-[#3b0764] shadow-lg fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    CRM
                </h1>

                {/* Links */}
                <div className="flex items-center gap-6 text-white font-medium text-sm md:text-base">

                    <Link 
                        to="/" 
                        className="hover:text-pink-300 transition duration-300"
                    >
                        Home
                    </Link>

                    {
                        !isLoggedin ? (
                            <>
                                <Link 
                                    to="/login" 
                                    className="hover:text-pink-300 transition duration-300"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/sign-up"
                                    className="bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2 rounded-xl shadow-md hover:scale-105 hover:shadow-purple-500/40 transition duration-300"
                                >
                                    Sign Up
                                </Link>
                            </>
                        ) : (
                            <div className='flex items-center gap-5'>

                                <Link 
                                    to="/customers" 
                                    className="hover:text-pink-300 transition duration-300"
                                >
                                    Customers
                                </Link>

                                <div className="hidden md:block text-purple-200">
                                    Hi, <span className="text-pink-300 font-semibold">{user?.name}</span>
                                </div>

                                <button
                                    onClick={() => {
                                        localStorage.removeItem("securedToken");
                                        dispatch(setIsLoggedin(false));
                                        dispatch(setAuthUser(null));
                                        navigate('/login')
                                    }}
                                    className="border border-pink-400 text-pink-300 px-4 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition duration-300"
                                >
                                    Logout
                                </button>

                            </div>
                        )
                    }

                </div>

            </div>
        </nav>
    )
}

export default Navbar