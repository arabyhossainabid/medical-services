'use client';

import React from 'react';

import DoctorImg from '../../assets/DoctorImg.png';
import Ellipse from '../../assets/Ellipse.png';
import { Check } from 'lucide-react';

function Page() {
  return (
    <header>
      <section className="flex flex-col lg:flex-row items-center justify-around px-4 md:px-8 py-12 gap-8">
        {/* Left Text Content */}
        <div className="max-w-lg space-y-4 text-left">
          <p className="lg:text-5xl text-2xl font-normal">Get Quick</p>
          <p className="lg:text-6xl text-4xl font-bold">Medical Services</p>
          <p className="text-gray-600 font-normal lg:text-lg text:sm">
            Lorem ipsum dolor sit amet consectetur. Auctor integer eget morbi
            molestie gravida donec. Aliquam diam fames at vestibulum morbi quis
            faucibus nulla. Aliquam orci consequat metus nibh magna et eu sit.
            Faucibus lacus ac ultrices facilisis. In nisi faucibus in.
          </p>
          <button className="mt-4 px-11 py-4 bg-[#26B995] text-white rounded-lg">
            Get Services
          </button>
        </div>

        {/* Right Images */}
    <div className="relative w-[300px] h-[360px] md:w-[551px] md:h-[722px]">
  {/* Background Ellipse Image */}
  <img
    src={Ellipse.src}
    alt="Background"
    className="absolute top-0 left-0 w-full h-full object-contain rounded-xl z-0"
  />
  {/* Doctor Image on top */}
  <img
    src={DoctorImg.src}
    alt="Doctor"
    className="absolute top-0 left-0 w-full h-full object-contain z-10"
  />

  {/* Overlay: Top-left stat */}
  <div className="absolute top-28 left-0 md:top-44 md:left-2 lg:top-60 lg:-left-10 z-20 bg-white/80 backdrop-blur-md px-4 sm:px-8 py-2 sm:py-3 rounded-xl shadow-md">
    <div className="flex items-center gap-3">
      <img src={Ellipse.src} alt="Icon" className="w-6 h-6 sm:w-7 sm:h-7" />
      <p className="text-lg sm:text-2xl font-semibold text-black">1520+</p>
    </div>
    <div className="ml-6 sm:ms-10">
      <p className="text-xs sm:text-sm text-gray-700">Active Clients</p>
    </div>
  </div>

  {/* Overlay: Bottom-left promo text */}
  <div className="absolute bottom-20 left-36 md:bottom-28 md:left-44 lg:bottom-52 lg:left-80 w-40 md:w-48 lg:w-52 z-20 bg-white/80 backdrop-blur-md p-2 rounded-xl shadow-md">
    <div className="flex items-center gap-2 sm:gap-3">
      <div className="flex items-center gap-1 text-xs sm:text-sm font-normal text-gray-500">
        <p className='text-[#26B995]'><Check /></p>
        Get 20% off on every 1st month
      </div>
    </div>
    <div className="flex items-center gap-2 sm:gap-3">
     <div className="flex items-center gap-1 text-xs sm:text-sm font-normal text-gray-500">
        <p className='text-[#26B995]'><Check /></p>
        Expert Doctors
      </div>
    </div>
  </div>
</div>


      </section>
    </header>
  );
}

export default Page;
