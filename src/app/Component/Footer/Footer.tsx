'use client';
import { SendHorizontal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="md:max-w-10/12 mx-auto px-4 py-8 flex flex-col lg:flex-row lg:gap-[174px] gap-8">
        {/* Medical Services */}
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Medical Services
          </h2>
          <p className="text-sm font-normal w-96 ">
            Lorem ipsum dolor sit amet consectetur. Auctor integer eget morbi molestie gravida donec.
            Aliquam diam fames at vestibulum morbi quis faucibus nulla. Aliquam orci
          </p>
        </div>

        {/* Other Sections */}
        <section className="flex flex-col lg:flex-row md:gap-16 gap-8 w-full">

          <div className="grid grid-cols-3 gap-16 order-2 lg:order-1">
          {/* Doctors */}
          <div className="w-[143px]">
            <h3 className="font-semibold text-xl mb-2">Doctors</h3>
            <p>Dr. Ahmad Khan</p>
            <p>Dr. Sarah Ali</p>
            <p>Dr. John Smith</p>
            <p>Dr. Maria Khan</p>
          </div>

          {/* Terms */}
          <div className="w-[143px]">
            <h3 className="font-semibold text-xl mb-2">Terms</h3>
            <p>Privacy Policy</p>
            <p>Settings</p>
            <p>Setup</p>
            <p>Help</p>
          </div>

          {/* About */}
          <div className="w-[143px]">
            <h3 className="font-semibold text-xl mb-2">About</h3>
            <p>Doctors</p>
            <p>Hospital</p>
            <p>Contact</p>
            <p>Address</p>
          </div>
          </div>

           {/* Newsletter */}
          <div className="order-1 lg:order-2 w-72">
            <h3 className="font-semibold text-xl mb-2">Newsletter</h3>
            <div className='flex'>
              <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="py-4 px-3.5 bg-[#28BF98] text-white"><SendHorizontal /></button>

            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
