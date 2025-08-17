import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Select() {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    // Banner thoda delay se open hoga
    setTimeout(() => {
      setIsBannerVisible(true);
    }, 300);
  }, []);

  return (
    <div className="w-full shadow relative z-50">
      <Navbar title="Fashion" />

      {/* Category Section */}
      <div className="px-4 py-6 mt-4">
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-screen-lg mx-auto text-black text-sm">
          {/* Men */}
          <Link
            to="/fashion/men"
            className="flex flex-col items-center w-[80px] cursor-pointer transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src="https://img.freepik.com/premium-vector/men-s-fashion-logo_526766-116.jpg"
              alt="Men"
              className="w-20 h-20 object-contain rounded-full border-2 border-black"
            />
            <span className="mt-1 text-center text-xs sm:text-sm">
              Men's<br /> Fashion
            </span>
          </Link>

          {/* Women */}
          <Link
            to="/fashion/women"
            className="flex flex-col items-center w-[80px] cursor-pointer transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTms3yp2B08MI_ovrn0uyV6Xtby5jABtDEtv65qS1RZDU17LCNTChutArxwbXU7T3WbndA&usqp=CAU"
              alt="Women"
              className="w-20 h-20 object-contain rounded-full border-2 border-black"
            />
            <span className="mt-1 text-center text-xs sm:text-sm">
              Women's<br /> Fashion
            </span>
          </Link>

          {/* Baby */}
          <Link
            to="/fashion/baby"
            className="flex flex-col items-center w-[80px] cursor-pointer transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKyx-CRafCpnjQOvuHOf8K4azBz32KYPeO0sgVA1NApeXk8HixAcpRRuRD2YFxRnc5pM&usqp=CAU"
              alt="Baby"
              className="w-20 h-20 object-contain rounded-full border-2 border-black"
            />
            <span className="mt-1 text-center text-xs sm:text-sm">
              Baby<br /> Couture
            </span>
          </Link>
        </div>
      </div>

      {/* Curtain Banner */}
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out ${
          isBannerVisible ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <img
          src="https://t3.ftcdn.net/jpg/05/33/69/68/360_F_533696890_3oTdDiMKgPTPDHlIwI7QkagNQY7njrrz.jpg"
          alt="Banner"
          className="w-full h-[200px] sm:h-[300px] md:h-[300px] object-cover"
        />
      </div>

      {/* Offer Banner */}
      <div className="px-6 py-4">
        <div className="bg-teal-100 rounded-xl flex items-center justify-between p-6">
          <div>
            <h2 className="text-2xl font-bold text-teal-900">Paan Corner</h2>
            <p className="text-sm text-gray-700">
              Smoking Accessories, Mints & More
            </p>
            <button className="mt-2 px-4 py-2 bg-white rounded-full text-teal-700 font-semibold shadow">
              Order Now
            </button>
          </div>
          <img
            src="/paan.png"
            alt="Paan Corner"
            className="w-32 h-32 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
