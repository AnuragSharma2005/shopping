import React from 'react';

export default function Mainpage() {
  const categories = [
    {
      name: 'Fashion',
      description: "India’s Online Fashion & Beauty Experts",
      bgColor: 'bg-rose-100',
      image: 'https://th.bing.com/th/id/OIP.lEie-TFhnFkKV4kBPkvOdQHaI5?w=158&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      link: './Faishon',
    },
    {
      name: 'Essentials',
      description:	"Essential Shopping, Effortlessly Delivered",
      bgColor: 'bg-amber-100',
      image: 'https://th.bing.com/th/id/OIP.J2zsAwotPLV3IYJMXmZRMwHaFc?w=238&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      link: '/essentials',
    },
    {
      name: 'Pharmacy',
      description: "Trusted Health & Wellness at Your Doorstep",
      bgColor: 'bg-teal-100',
      image: 'https://th.bing.com/th/id/OIP.JyDk9NPOCgOoH6iZcEd-4QHaE8?w=281&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      link: '/pharmacy',
    },
  ];

  return (
     <div className="h-screen w-screen flex items-center justify-center bg-yellow-50 px-4">
            <div className="flex flex-col items-center w-full max-w-4xl space-y-6">
            <h2 className="text-5xl font-extrabold mb-10 text-center text-white drop-shadow-2xl tracking-tight">
        <span className="bg-gradient-to-r from-pink-300 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
          Select Your Store
        </span>
       </h2>

        {categories.map((cat, index) => (
        <div
               key={index}
               onClick={() => window.location.href = cat.link}
               className={`w-full flex justify-between items-center p-6 rounded-2xl shadow-md 
              ${cat.bgColor} backdrop-blur-sm cursor-pointer 
              transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl`}
>

            <div>
              <h3 className="text-xl font-bold">{cat.name}</h3>
              <p className="text-sm mb-2">{cat.description}</p>
              <a href={cat.link} className="text-pink-600 font-semibold text-sm">
                Enter Store →
              </a>
            </div>
            <img
              src={cat.image}
              alt={cat.name}
              className="w-28 h-28 rounded-xl object-cover bg-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
