import React from 'react';
import DoctorImg from '../../assets/Vector.png';
import Ellipse from '../../assets/solar_users.png';
import MedicalServices from '../../assets/icon-park.png';

function Services() {
  const services = [
    {
      title: "Free Support",
      description: "On what matters most free matching support optional",
    },
    {
      title: "Easy to use",
      description: "An easy-to-use online directory that lets you search and filter",
    },
    {
      title: "Online Care",
      description: "One-to-one matching for experience support you",
    },
  ];

  const serviceImages = [DoctorImg, Ellipse, MedicalServices];

  return (
    <section className="bg-[#F1F5F6]">
      <h2 className="text-3xl sm:text-4xl font-medium pt-8 md:pt-20 lg:mb-12 mb-5 text-center">OUR SERVICES</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 sm:gap-8 px-4 sm:px-10 md:px-12 lg:px-36">
        {services.map((service, index) => (
          <div
            key={index}
            className="text-center mx-auto hover:bg-[#9BDAC866] py-10 sm:py-12 px-5 sm:px-7 transition duration-300 rounded-lg"
          >
            <div className="bg-[#4EC09F4F] hover:bg-[#28BF98] p-4 rounded-lg w-fit mx-auto mb-4">
              <img
                src={serviceImages[index].src}
                alt={`Service Icon ${index + 1}`}
                className="w-9 h-8"
              />
            </div>

            <h3 className="font-semibold text-2xl sm:text-3xl mb-3">{service.title}</h3>
            <p className="text-sm sm:text-base w-[302px] text-[#747474]">{service.description}</p>

            <button className="mt-6 px-6 sm:px-8 py-3 bg-[#26B995] text-white rounded-lg hover:bg-[#1ea582] transition duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
