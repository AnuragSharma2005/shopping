import React, { useState } from 'react';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userType, setUserType] = useState('customer');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="relative w-full max-w-[850px] rounded-xl overflow-hidden shadow-2xl  bg-white">

        {/* Mobile Layout: Overlay and Form side-by-side vertically */}
        <div className="flex flex-col md:hidden w-full">
          <div className="h-[33.33vh] bg-gradient-to-r from-purple-950 to-purple-200 text-white flex flex-col justify-center items-center text-center px-6 py-6 transition-all duration-700 ease-in-out">
            {isSignUp ? (
              <>
                <h1 className="text-2xl font-bold">Welcome Back!</h1>
                <p className="my-2 text-sm">Sign in to access your account</p>
                <button
                  className="border h-12 w-32  border-white px-4 py-1 rounded-full text-sm mt-2"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold">Hello, Friend!</h1>
                <p className="my-2 text-sm">Join us and start your journey</p>
                <button
                  className="border h-12 w-32  border-white px-4 py-1 rounded-full text-sm mt-2"
                  onClick={() => setIsSignUp(true)}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          <div className="w-full flex flex-col items-center justify-center px-6 py-6">
            <form className="w-full flex flex-col items-center gap-4 ">
              <h1 className="text-2xl font-bold">{isSignUp ? 'Create Account' : 'Sign In'}</h1>
              <div className="flex gap-4">
                <button
                  className={`px-4 py-2 rounded ${userType === 'customer' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setUserType('customer');
                  }}
                >
                  Customer
                </button>
                <button
                  className={`px-4 py-2 rounded ${userType === 'retailer' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setUserType('retailer');
                  }}
                >
                  Retailer
                </button>
              </div>
              {isSignUp && userType === 'customer' && (
                <>
                  <input className="w-full p-2 border rounded" type="text" placeholder="Full Name" />
                  <input className="w-full p-2 border rounded" type="email" placeholder="Email Address" />
                  <input className="w-full p-2 border rounded" type="password" placeholder="Password" />
                </>
              )}
              {isSignUp && userType === 'retailer' && (
                <>
                  <input className="w-full p-2 border rounded" type="text" placeholder="Store Name" />
                  <input className="w-full p-2 border rounded" type="email" placeholder="Business Email" />
                  <input className="w-full p-2 border rounded" type="password" placeholder="Password" />
                </>
              )}
              {!isSignUp && (
                <>
                  <input className="w-full p-2 border rounded" type="email" placeholder="Email Address" />
                  <input className="w-full p-2 border rounded" type="password" placeholder="Password" />
                  <div className="flex justify-between w-full text-sm text-gray-600">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      Remember me
                    </label>
                    <a href="#" className="text-purple-500 hover:underline">Forgot password?</a>
                  </div>
                </>
              )}
              <button className="bg-purple-800 hover:bg-purple-500 transition duration-300 text-white py-2 px-6 rounded w-full">
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full h-[600px] relative">
          {/* Overlay */}
          <div
            className={`absolute top-0 h-full w-1/2 bg-gradient-to-r from-purple-950 to-purple-200 text-white flex flex-col justify-center items-center text-center px-10 z-20 transition-all duration-700 ease-in-out ${isSignUp ? 'left-1/2' : 'left-0'}`}
          >
            {isSignUp ? (
              <>
                <h1 className="text-3xl font-bold">Welcome Back!</h1>
                <p className="my-4">Sign in to access your account</p>
                <button
                  className="border border-white px-6 py-2 rounded-full"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold">Hello, Friend!</h1>
                <p className="my-4">Join us and start your journey</p>
                <button
                  className="border border-white px-6 py-2 rounded-full"
                  onClick={() => setIsSignUp(true)}
                >
                  Sign In
                </button>
              </>
            )}
          </div>

          {/* Sign In */}
          <div className="w-1/2 flex flex-col items-center justify-center px-6 md:px-10 py-6">
            <form className="w-full flex flex-col items-center gap-4">
              <h1 className="text-2xl font-bold">Sign In</h1>
              <div className="flex gap-4">
                <button
                  className={`px-4 py-2 rounded ${userType === 'customer' ? 'bg-purple-800 text-white' : 'bg-gray-200'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setUserType('customer');
                  }}
                >
                  Customer
                </button>
                <button
                  className={`px-4 py-2 rounded ${userType === 'retailer' ? 'bg-purple-800 text-white' : 'bg-gray-200'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setUserType('retailer');
                  }}
                >
                  Retailer
                </button>
              </div>
              <input className="w-full p-2 border rounded" type="email" placeholder="Email Address" />
              <input className="w-full p-2 border rounded" type="password" placeholder="Password" />
              <div className="flex justify-between w-full text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#" className="text-purple-500 hover:underline">Forgot password?</a>
              </div>
              <button className="bg-purple-800 hover:bg-purple-500 transition duration-300 text-white py-2 px-6 rounded w-full">
                Sign In
              </button>
            </form>
          </div>

          {/* Sign Up */}
          <div className="w-1/2 flex flex-col items-center justify-center px-6 md:px-10 py-6 ">
            <form className="w-full flex flex-col items-center gap-4 ">
              <h1 className="text-2xl font-bold">Create Account</h1>
              <div className="flex gap-4">
                <button
                  className={`px-4 py-2 rounded ${userType === 'customer' ? 'bg-purple-800 text-white' : 'bg-gray-200'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setUserType('customer');
                  }}
                >
                  Customer
                </button>
                <button
                  className={`px-4 py-2 rounded ${userType === 'retailer' ? 'bg-purple-800 text-white' : 'bg-gray-200'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setUserType('retailer');
                  }}
                >
                  Retailer
                </button>
              </div>
              {userType === 'customer' ? (
                <>
                  <input className="w-full p-2 border rounded" type="text" placeholder="Full Name" />
                  <input className="w-full p-2 border rounded" type="email" placeholder="Email Address" />
                  <input className="w-full p-2 border rounded" type="password" placeholder="Password" />
                </>
              ) : (
                <>
                  <input className="w-full p-2 border rounded" type="text" placeholder="Store Name" />
                  <input className="w-full p-2 border rounded" type="email" placeholder="Business Email" />
                  <input className="w-full p-2 border rounded" type="password" placeholder="Password" />
                </>
              )}
              <button className="bg-purple-800 hover:bg-purple-500 transition duration-300 text-white py-2 px-6 rounded w-full">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;