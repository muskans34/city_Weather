import React from 'react';
import bgimg from '../images/img.jpg';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen relative">
      
      <img src={bgimg} alt="background" className="w-full h-full object-cover" />

      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-white text-3xl font-extrabold">
          WELCOME TO THE GAMING WORLD
        </h1>
        <h3 className="text-white text-lg font-medium">
          Let's check your coding skills
        </h3>
        <button onClick={() => navigate('/login')}
        
        className="px-9 py-2 text-white text-lg font-semibold bg-blue-900 rounded-md hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
          Login
        </button>
      </div>
    </div>
  );
}

export default Home;
