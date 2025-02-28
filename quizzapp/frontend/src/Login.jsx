import React from "react";
import './index.css';

function Login(){
    return(
      <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-black bg-opacity-50 text-white p-4 rounded shadow-md ">
        login here
        <div className="mt-4">
        <label>Email</label><br/>
        <input type="email" placeholder="Enter your email"/>
        </div>
        <div className="">
        <label>Password</label><br/>
        <input type="password" placeholder="Enter your Password"/>
        </div>
        <div className="text-center mt-3 bg-blue-500">
          <button type="submit" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
        </div>
      </div>
    </div>
    )
}

export default Login