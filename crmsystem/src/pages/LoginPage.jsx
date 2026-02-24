import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { setIsLoggedin, setAuthUser } from '../features/userSlice.js'
import { useDispatch } from 'react-redux';

function LoginPage() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    async function handleLogin() {
        try {
            let response = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`, { email, password });
            if (response.status === 200) {
                localStorage.setItem("securedToken", response.data.token);
                dispatch(setIsLoggedin(true));
                dispatch(setAuthUser(response.data.user))
                navigate('/customers')
            }
        } catch (error) {
            console.log(error.message);
            setShowError(true);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2a0f4f] to-[#3b0764] px-4">

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl w-full max-w-md p-10">

                {/* Title */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        CRM
                    </div>
                    <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
                    <p className="text-purple-200 mt-2 text-sm">
                        Sign in to continue managing your customers
                    </p>
                </div>

                <form className="space-y-6">

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-purple-200 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/5 text-white px-4 py-3 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none transition"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-purple-200 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-white/5 text-white px-4 py-3 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none transition"
                        />

                        {showError && (
                            <p className="text-pink-400 text-xs mt-2">
                                Invalid email or password
                            </p>
                        )}
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-purple-200">
                            <input type="checkbox" className="rounded bg-white/20" />
                            Remember me
                        </label>
                        <span
                            className="text-pink-400 hover:underline cursor-pointer"
                        >
                            Forgot password?
                        </span>
                    </div>

                    {/* Button */}
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.02] hover:shadow-purple-500/40 transition duration-300"
                    >
                        Sign In
                    </button>

                </form>

                {/* Divider */}
                <div className="my-6 flex items-center">
                    <div className="flex-1 border-t border-purple-400/30"></div>
                    <span className="px-3 text-purple-200 text-sm">OR</span>
                    <div className="flex-1 border-t border-purple-400/30"></div>
                </div>

                {/* Signup */}
                <p className="text-center text-sm text-purple-200">
                    Don’t have an account?{" "}
                    <span
                        className="text-pink-400 font-medium hover:underline cursor-pointer"
                        onClick={() => navigate('/sign-up')}
                    >
                        Sign up
                    </span>
                </p>

            </div>
        </div>
    )
}

export default LoginPage