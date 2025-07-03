import React from 'react';
import HealthCare from '../../assets/HealthCare.png';
import { Check } from 'lucide-react';

function About() {
  return (
    <section className="px-4 py-10">
      <div className="flex flex-col md:flex-row items-center justify-around gap-8">
        
        {/* Image Section */}
        <div className="w-full md:w-[612px] h-auto">
          <img
            src={HealthCare.src}
            alt="Doctor"
            className="w-full h-auto max-w-[612px] rounded-md object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="w-full max-w-[465px] text-left md:text-left">
          <h1 className="font-bold text-3xl md:text-5xl leading-tight mb-4">
            Affordable Health <br className="hidden md:block" />
            <span className="block py-2">Care Solutions</span>
          </h1>
          <p className="font-normal text-base text-[#747474] pb-6 max-w-[400px] mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur. Auctor integer eget morbi molestie gravida donec. 
            Aliquam diam fames at vestibulum morbi quis faucibus nulla. Aliquam orci consequat metus.
          </p>
          
          <div className="font-normal text-base text-[#747474] space-y-2">
            <h4 className="flex items-center gap-2">
              <span className="text-[#26B995]"><Check /></span>
              430+ Happy Patients
            </h4>
            <h4 className="flex items-center gap-2">
              <span className="text-[#26B995]"><Check /></span>
              350+ Happy Rooms
            </h4>
            <h4 className="flex items-center gap-2">
              <span className="text-[#26B995]"><Check /></span>
              100+ Expert Doctors
            </h4>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;
