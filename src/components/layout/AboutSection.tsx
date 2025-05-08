import { SectionProps } from '@/types/SectionProps'
import React from 'react'

const AboutSection = ({ className }: SectionProps) => {
  return (
    <section id="about" className={className}>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        {/* Background image */}
        <div className="bg-[url('/assets/about-1.jpg')] bg-center bg-no-repeat bg-cover h-[300px] md:h-auto"></div>

        {/* Content Section */}
        <div className="p-8 md:p-24 text-center md:text-left">
          <h1 className="mb-4 text-3xl md:text-4xl font-bold">
            Welcome to <span className="text-blue-500">Evergreen</span>
          </h1>
          <div className='text-gray-300'>
            <p className='mb-4 text-base md:text-lg'>
              At Evergreen, every pizza is more than just food—it’s a celebration of passion and flavor.
              Our journey started with a simple love for great pizza, blending timeless traditions with a fresh twist.
              Inspired by Italy’s rich culinary roots, our chefs hand-select premium ingredients to craft pizzas that are both classic and creative.
            </p>
            <p className='text-base md:text-lg'>
              From our golden, handmade crusts to the vibrant toppings, each bite is a reflection of our dedication to quality.
              We’ve grown a community that shares our love for great taste and good company.
              Come be part of our story—where every slice brings people together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
