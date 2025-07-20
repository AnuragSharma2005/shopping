import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Mainpage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-yellow-50 px-4">
      <div className="flex flex-col items-center w-full max-w-4xl space-y-3">
        <h2 className="text-5xl font-extrabold mb-10 text-center text-white drop-shadow-2xl tracking-tight">
          <span className="bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
            Select Your Store
          </span>
        </h2>

        {/* Fashion */}
        <div
          onClick={() => navigate('/fashion')}
          className="w-full flex justify-between items-center p-6 rounded-2xl shadow-md bg-rose-100 backdrop-blur-sm cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
        >
          <div>
            <h3 className="text-xl font-bold">Fashion</h3>
            <p className="text-sm mb-2">India’s Online Fashion & Beauty Experts</p>
            <span className="text-pink-600 font-semibold text-sm">Enter Store →</span>
          </div>
          <img
            src="https://th.bing.com/th/id/OIP.lEie-TFhnFkKV4kBPkvOdQHaI5?w=158&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            alt="Fashion"
            className="w-24 h-24 rounded-xl object-cover bg-white"
          />
        </div>

        {/* Essentials */}
        <div
          onClick={() => navigate('/essentials')}
          className="w-full flex justify-between items-center p-6 rounded-2xl shadow-md bg-amber-100 backdrop-blur-sm cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
        >
          <div>
            <h3 className="text-xl font-bold">Essentials</h3>
            <p className="text-sm mb-2">Essential Shopping, Effortlessly Delivered</p>
            <span className="text-pink-600 font-semibold text-sm">Enter Store →</span>
          </div>
          <img
            src="https://th.bing.com/th/id/OIP.J2zsAwotPLV3IYJMXmZRMwHaFc?w=238&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            alt="Essentials"
            className="w-28 h-28 rounded-xl object-cover bg-white"
          />
        </div>

        {/* Pharmacy */}
        <div
          onClick={() => navigate('/pharmacy')}
          className="w-full flex justify-between items-center p-6 rounded-2xl shadow-md bg-teal-100 backdrop-blur-sm cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
        >
          <div>
            <h3 className="text-xl font-bold">Pharmacy</h3>
            <p className="text-sm mb-2">Trusted Health & Wellness at Your Doorstep</p>
            <span className="text-pink-600 font-semibold text-sm">Enter Store →</span>
          </div>
          <img
            src="https://th.bing.com/th/id/OIP.JyDk9NPOCgOoH6iZcEd-4QHaE8?w=281&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
            alt="Pharmacy"
            className="w-28 h-28 rounded-xl object-cover bg-white"
          />
        </div>
      </div>
    </div>
  );
}
