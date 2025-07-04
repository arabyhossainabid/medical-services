'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation' // If Next.js app router
import AOS from 'aos'
import 'aos/dist/aos.css'

import Services from './Component/Services/Services'
import About from './Component/About/About'
import Doctors from './Component/Doctors/Doctors'
import Testimonials from './Component/Testimonials/Testimonials'
import Banner from './Component/Banner/page'
import Footer from './Component/Footer/Footer' // ✅ Import Footer here

export default function HomePage() {
  const pathname = usePathname()

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [pathname])

  return (
    <main className="pt-0">
      <section
        id="home"
        data-aos="fade-up"
        className="max-w-8xl mx-auto"
      >
        <div>
          <Banner />
        </div>
      </section>

      <section id="services" data-aos="" className="min-h-[80vh] scroll-mt-20">
        <Services />
      </section>

      <section id="about" data-aos="" className="min-h-[80vh] scroll-mt-20">
        <About />
      </section>

      <section id="doctors" data-aos="" className="min-h-[80vh] scroll-mt-20">
        <Doctors />
      </section>

      <section id="testimonials" data-aos="" className="min-h-[80vh] px-4 py-12 scroll-mt-20">
        <Testimonials />
      </section>
    </main>
  )
}
