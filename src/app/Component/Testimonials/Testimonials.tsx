import React from 'react';
import { Star } from 'lucide-react';
import Ellipse6 from '../../assets/Ellipse6.png';
import Ellipse7 from '../../assets/Ellipse7.png';

function Testimonials() {
  return (
    <section className="py-16 sm:max-w-max md:max-w-11/12 mx-auto">
      <div>
        <h2 className="text-lg md:text-5xl text-center font-bold mb-10">
          Hear Our Patients Opinions
        </h2>
      </div>

      <div className="flex flex-col md:flex-row px-6 md:px-20 py-12 justify-between gap-10 md:gap-20">
        {/* Card 1 */}
        <div className="relative px-0 md:pb-0 pb-12 md:px-4 w-full">
          <img
            src={Ellipse6.src}
            alt=""
            className="absolute -top-14 -left-5 md:left-0 w-20 h-20 object-contain z-0"
          />
          <div className="z-10 bg-[#F1F5F6] p-4 lg:p-9 rounded-lg shadow-md w-full">
            <p className="font-normal text-lg text-[#747474] mb-6">
              Lorem ipsum dolor sit amet consectetur. Auctor integer eget morbi molestie gravida donec.
              Aliquam diam fames at vestibulum morbi quis faucibus nulla. Aliquam orci consequat metus.
            </p>
            <div className="flex flex-row items-center gap-2">
              <h2 className="font-bold text-sm lg:text-3xl">Juliet Madagaskar</h2>
              <div className="text-[#FEAD34] flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={20} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative px-0 md:px-4 w-full">
          <img
            src={Ellipse7.src}
            alt=""
            className="absolute -top-14 -left-5 md:left-0 w-20 h-20 object-contain z-0"
          />
          <div className="z-10 bg-[#F1F5F6] p-4 lg:p-9 rounded-lg shadow-md w-full">
            <p className="font-normal text-lg text-[#747474] mb-6">
              Lorem ipsum dolor sit amet consectetur. Auctor integer eget morbi molestie gravida donec.
              Aliquam diam fames at vestibulum morbi quis faucibus nulla. Aliquam orci consequat metus.
            </p>
            <div className="flex flex-row items-center gap-2">
              <h2 className="font-bold text-sm lg:text-3xl">Juliet Madagaskar</h2>
              <div className="text-[#FEAD34] flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={20} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
