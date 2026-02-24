import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2a0f4f] to-[#3b0764] flex items-center justify-center px-6">

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl max-w-2xl w-full p-12 text-center">

                {/* Logo Circle */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                    CRM
                </div>

                <h1 className="text-4xl font-extrabold text-white mb-4">
                    Elevate Your Customer Management
                </h1>

                <p className="text-purple-200 text-lg mb-10 leading-relaxed">
                    Track leads, manage clients, and grow your business with a
                    powerful and beautifully designed CRM system.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">

                    <Link
                        to="/login"
                        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-purple-500/30 transition duration-300"
                    >
                        Login
                    </Link>

                    <Link
                        to="/sign-up"
                        className="border border-pink-400 text-pink-300 px-8 py-3 rounded-xl font-semibold hover:bg-pink-500 hover:text-white transition duration-300"
                    >
                        Create Account
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default Home