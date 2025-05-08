'use client'
import { Button, Image, Link } from '@nextui-org/react'
import SlideBackground from './SlideBackground'
import { SectionProps } from '@/types/SectionProps'

const HomeSlider = ({ className }: SectionProps) => {
  return (
    <section className={className}>
      <div data-hs-carousel='{"loadingClasses": "opacity-0", "isAutoPlay": true}' className="relative h-[850px] sm:h-[500px] md:h-[850px] z-0">
        <div className="hs-carousel relative overflow-hidden w-full h-full">
          <div className="hs-carousel-body w-full absolute top-0 bottom-0 start-0 flex flex-nowrap duration-700 ease-in-out delay-200 opacity-0">

            {/*First Slide*/}
            <SlideBackground bgImage={'/assets/slider_bg_4.jpg'}>
              <div className="w-full flex flex-col justify-center text-center h-[90vh] sm:h-[60vh] absolute z-10 px-4 md:px-8">
                <span className="font-nothingYouCouldDo text-primary text-[30px] sm:text-[40px] mb-4">Welcome</span>
                <h1 className="mb-8 text-[30px] sm:text-[40px]">Crafted with Love, <span className='block'>Baked to Perfection</span></h1>
                <h3 className="mb-16 text-[16px] sm:text-[20px]">Indulge in artisanal pizzas made from the freshest ingredients—flavor that speaks for itself.</h3>

                <p>
                  <Button as={Link} href='/menu' radius='full' size='lg' className='bg-blue-500 py-4 px-6 text-white'>Order Now</Button>
                  <Button as={Link} href='/menu' radius='full' size='lg' className='bg-transparent border-2 py-4 px-6 ml-2'>View Menu</Button>
                </p>
              </div>
            </SlideBackground>

            {/*Second Slide*/}
            <SlideBackground bgImage={'/assets/slider_bg_2.jpg'}>
              <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center h-full absolute z-10 px-4 md:px-8">
                <div className='w-3/4 md:w-1/4'>
                  <Image src="/assets/slider_pizza_1.png" alt="Pizza Image" />
                </div>
                <div className='max-w-xl ml-6 text-center md:text-left'>
                  <span className="font-nothingYouCouldDo text-primary text-[30px] sm:text-[40px] mb-4">Crunchy</span>
                  <h1 className="mb-8 text-[30px] sm:text-[40px]">Authentic Italian Pizza</h1>
                  <h3 className="mb-16 text-[16px] sm:text-[20px]">A true taste of Italy in every bite—crispy crusts, rich sauces, and unforgettable toppings.</h3>

                  <p>
                    <Button as={Link} href='/menu' radius='full' size='lg' className='py-4 px-6 text-white bg-blue-500'>Order Now</Button>
                    <Button as={Link} href='/menu' radius='full' size='lg' className='bg-transparent border-2 py-4 px-6 ml-2'>View Menu</Button>
                  </p>
                </div>
              </div>
            </SlideBackground>

            {/*Third Slide*/}
            <SlideBackground bgImage={'/assets/slider_bg_2.jpg'}>
              <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center h-full absolute z-10 px-4 md:px-8">
                <div className='max-w-xl text-end mr-6'>
                  <span className="font-nothingYouCouldDo text-primary text-[30px] sm:text-[40px] mb-4">Delicious</span>
                  <h1 className="mb-8 text-[30px] sm:text-[40px]">Savor the Flavors of Italy</h1>
                  <h3 className="mb-16 text-[16px] sm:text-[20px]">From classic Margheritas to bold new creations—experience the passion behind every slice.</h3>

                  <p>
                    <Button as={Link} href='/menu' radius='full' size='lg' className='py-4 px-6 text-white bg-blue-500'>Order Now</Button>
                    <Button as={Link} href='/menu' radius='full' size='lg' className='bg-transparent border-2 py-4 px-6 ml-2'>View Menu</Button>
                  </p>
                </div>
                <div className='w-3/4 md:w-1/4'>
                  <Image src="/assets/slider_pizza_2.png" alt="Pizza Image" />
                </div>
              </div>
            </SlideBackground>
          </div>
        </div>

        {/* Indicator buttons */}
        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-3">
          <span className="hs-carousel-active:bg-white hs-carousel-active:border-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer flex items-center justify-center">
            <span className="hs-carousel-active:bg-white hs-carousel-active:border-gray-500 w-3 h-3 border border-gray-400 rounded-full cursor-pointer "></span>
          </span>
          <span className="hs-carousel-active:bg-white hs-carousel-active:border-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer flex items-center justify-center">
            <span className="hs-carousel-active:bg-white hs-carousel-active:border-gray-500 w-3 h-3 border border-gray-400 rounded-full cursor-pointer "></span>
          </span>
          <span className="hs-carousel-active:bg-white hs-carousel-active:border-none w-[18px] h-[18px] border-2 border-gray-400 rounded-full cursor-pointer flex items-center justify-center">
            <span className="hs-carousel-active:bg-white hs-carousel-active:border-gray-500 w-3 h-3 border border-gray-400 rounded-full cursor-pointer "></span>
          </span>
        </div>
      </div>
    </section>
  )
}

export default HomeSlider
