import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  
    const [password,setPassword] = useState()
    const [email,setEmail] = useState()
    const navigate = useNavigate()

    const handleSubmit= (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => {
              console.log(result)
              if(result.data=== "success"){
                navigate('/')

              }
          
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-black opacity-60 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Login Here
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          
          <div className="text-center">
          <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all duration-300"
            >
              Login
            </button>
          </div>
          <div className="mt-4 text-center">
            <a
              href="#"
              className="text-sm text-red-600 hover:text-blue-500 transition duration-300"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
