import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUpPage() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!name.trim()) {
            setShowError(true);
            setErrorMessage('Please provide a valid name');
            return;
        } else if (!role.trim() || role.toUpperCase() !== "ADMIN" && role.toUpperCase() !== "AGENT") {
            setShowError(true);
            setErrorMessage('Please provide ADMIN or AGENT');
            return;
        } else if (!email.trim()) {
            setShowError(true);
            setErrorMessage('Please provide a valid email');
            return;
        } else if (!emailRegex.test(email)) {
            setShowError(true);
            setErrorMessage("Please provide proper email");
            return;
        } else {
            try {
                let response = await axios.post(
                    `${import.meta.env.VITE_API_URL}/api/register`,
                    { name, email, password, role: role.toUpperCase(), username }
                );

                if (response.status === 201) {
                    setShowError(false);
                    setName('');
                    setEmail('');
                    setRole('');
                    setUsername('');
                    setPassword('');
                    navigate('/login')
                } else {
                    setShowError(true);
                    setErrorMessage(response.data.message);
                }

            } catch (error) {
                setShowError(true);
                setErrorMessage(error.message)
            }
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
                    <h1 className="text-3xl font-bold text-white">Create Account</h1>
                    <p className="text-purple-200 mt-2 text-sm">
                        Start managing your customers more efficiently
                    </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-purple-200 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white/5 text-white px-4 py-3 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none transition"
                        />
                    </div>

                    {/* Role */}
                    <div>
                        <label className="block text-sm font-medium text-purple-200 mb-2">
                            Role (ADMIN / AGENT)
                        </label>
                        <input
                            type="text"
                            placeholder="ADMIN or AGENT"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full bg-white/5 text-white px-4 py-3 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none transition"
                        />
                    </div>

                    {/* Username */}
                    <div>
                        <label className="block text-sm font-medium text-purple-200 mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-white/5 text-white px-4 py-3 border border-purple-400/30 rounded-xl focus:ring-2 focus:ring-pink-500 focus:outline-none transition"
                        />
                    </div>

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
                                {errorMessage}
                            </p>
                        )}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.02] hover:shadow-purple-500/40 transition duration-300"
                    >
                        Sign Up
                    </button>

                </form>

                {/* Divider */}
                <div className="my-6 flex items-center">
                    <div className="flex-1 border-t border-purple-400/30"></div>
                    <span className="px-3 text-purple-200 text-sm">OR</span>
                    <div className="flex-1 border-t border-purple-400/30"></div>
                </div>

                {/* Login Redirect */}
                <p className="text-center text-sm text-purple-200">
                    Already have an account?{" "}
                    <span
                        className="text-pink-400 font-medium hover:underline cursor-pointer"
                        onClick={() => navigate('/login')}
                    >
                        Sign In
                    </span>
                </p>

            </div>
        </div>
    )
}

export default SignUpPage