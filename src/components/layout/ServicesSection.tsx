'use client'
import { DietFoodIcon } from '@/icons/DietFoodIcon'
import { PizzaIcon } from '@/icons/PizzaIcon'
import { ScooterIcon } from '@/icons/ScooterIcon'
import { SectionProps } from '@/types/SectionProps'
import { motion } from "framer-motion"

const ServicesSection = ({ className }: SectionProps) => {
  return (
    <section className={`bg-[url('/assets/bg_wallpaper-4.jpg')] bg-repeat sm:h-[80vh] text-dark ${className}`}>
      <div className='container py-12'>

        <div className="container max-w-4xl text-center mb-10">
          <h1 className="font-semibold mb-4 text-xl sm:text-2xl md:text-3xl">Our Services</h1>
          <p className="text-base sm:text-lg md:text-xl">
            From lightning-fast delivery to wholesome meal choices and handcrafted pizza creations,
            we’re here to serve flavor, freshness, and convenience—every single time.
          </p>
        </div>

        {/* Grid layout for 3 services */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>

          {/* First Service: Healthy Food */}
          <div className='flex flex-col gap-3 text-center p-6'>
            <div className="flex items-center justify-center mb-5">
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 225, transition: { duration: 1, ease: 'easeInOut' } }}
                className='w-[100px] h-[100px] border border-dark/20 flex justify-center items-center hover:bg-light relative'>
              </motion.span>
              <span className='absolute'>
                <DietFoodIcon className={'w-16'} />
              </span>
            </div>

            <h3 className='uppercase mb-4 text-lg sm:text-xl md:text-2xl'>Healthy Food</h3>
            <div className="text-sm sm:text-base md:text-lg">
              Enjoy nourishing meals without sacrificing taste. Our healthy options are made with fresh, wholesome ingredients—perfect for mindful eating with maximum flavor.
            </div>
          </div>

          {/* Second Service: Fast Delivery */}
          <div className='flex flex-col gap-3 text-center p-6'>
            <div className="flex items-center justify-center mb-5">
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 225, transition: { duration: 1, ease: 'easeInOut' } }}
                className='w-[100px] h-[100px] border border-dark/20 flex justify-center items-center hover:bg-light relative'>
              </motion.span>
              <span className='absolute'>
                <ScooterIcon className={'w-16'} />
              </span>
            </div>
            <h3 className='uppercase mb-4 text-lg sm:text-xl md:text-2xl'>Fast Delivery</h3>
            <div className="text-sm sm:text-base md:text-lg">
              Craving pizza in a hurry? We&apos;ve got you covered. Our speedy delivery ensures your food arrives hot, fresh, and right on time.
            </div>
          </div>

          {/* Third Service: Original Recipes */}
          <div className='flex flex-col gap-3 text-center p-6'>
            <div className="flex items-center justify-center mb-5">
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 225, transition: { duration: 1, ease: 'easeInOut' } }}
                className='w-[100px] h-[100px] border border-dark/20 flex justify-center items-center hover:bg-light relative'>
              </motion.span>
              <span className='absolute'>
                <PizzaIcon className={'w-16'} />
              </span>
            </div>
            <h3 className='uppercase mb-4 text-lg sm:text-xl md:text-2xl'>Original Recipes</h3>
            <div className="text-sm sm:text-base md:text-lg">
              Discover the difference with our signature pizza recipes—crafted with passion, perfected over time, and bursting with authentic flavor in every bite.
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ServicesSection
