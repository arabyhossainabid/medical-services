import React from 'react';
import DrAhmadKhan from '../../assets/DrAhmadKhan.png';
import Dr from '../../assets/Dr.png';
import Dr2 from '../../assets/Dr2.png';

function Doctors() {
  return (
    <section className="bg-[#F1F5F6] py-16">
      <div>
        <h2 className="text-3xl md:text-5xl text-center font-bold mb-10">
          Our Best Doctors
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-8">
        {/* Doctor Card 1 */}
        <div className="bg-white rounded-lg w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] max-w-[410px]">
          <img
            src={DrAhmadKhan.src}
            alt="Doctor"
            className="w-full h-auto max-h-[486px] rounded-t-lg object-contain"
          />
          <div className="text-left px-6 pb-6 pt-8">
            <h1 className="font-bold text-2xl md:text-3xl">Dr. Ahmad Khan</h1>
            <p className="font-normal text-lg">Neuro Surgeon</p>
          </div>
        </div>

        {/* Doctor Card 2 */}
        <div className="bg-white rounded-lg w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] max-w-[410px]">
          <img
            src={Dr.src}
            alt="Doctor"
            className="w-full h-auto max-h-[486px] rounded-t-lg object-contain"
          />
          <div className="text-left px-6 pb-6 pt-8">
            <h1 className="font-bold text-2xl md:text-3xl">Dr. Ahmad Khan</h1>
            <p className="font-normal text-lg">Neuro Surgeon</p>
          </div>
        </div>

        {/* Doctor Card 3 */}
        <div className="bg-white rounded-lg w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] max-w-[410px]">
          <img
            src={Dr2.src}
            alt="Doctor"
            className="w-full h-auto max-h-[486px] rounded-t-lg object-contain"
          />
          <div className="text-left px-6 pb-6 pt-8">
            <h1 className="font-bold text-2xl md:text-3xl">Dr. Ahmad Khan</h1>
            <p className="font-normal text-lg">Neuro Surgeon</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Doctors;
