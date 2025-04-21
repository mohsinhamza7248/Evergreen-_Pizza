import { ClockIcon } from '@/icons/ClockIcon'
import { FaceBookIcon } from '@/icons/FaceBookIcon'
import { InstaIcon } from '@/icons/InstaIcon'
import { LocationIcon } from '@/icons/LocationIcon'
import { PhoneIcon } from '@/icons/PhoneIcon'
import { TwitterIcon } from '@/icons/TwitterIcon'
import { SectionProps } from '@/types/SectionProps'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

const BusinessInfo = ({ className }: SectionProps) => {
  return (
    <section className={className}>
      <div className='grid grid-cols-3'>
        <div className="col-span-2 py-8 bg-dark">
          <div className='grid-cols-3 flex justify-center gap-16'>
            <div className='flex gap-4 items-center'>
              <PhoneIcon className={'w-10 fill-blue-500'} />
              <div className='text-center'>
                <p className='text-lg font-semibold'>+91 6668 4892 229</p>
                <p className='text-gray-400'>Call us now!</p>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <LocationIcon className={'w-10 stroke-blue-500'} />
              <div className='text-center'>
                <p className='text-lg font-semibold'>20 20 CP Rd  </p>
                <p className='text-gray-400'>Asif khan road,Delhi</p>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <ClockIcon className={'w-10  stroke-blue-500'} />
              <div className='text-center'>
                <p className='text-lg font-semibold'>Open Monday-Sun</p>
                <p className='text-gray-400'>10:00pm - 2:00am</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-blue-500 py-8 text-center flex justify-center items-center'>
          <Button as={Link} href='https://twitter.com' className='bg-transparent' startContent={<TwitterIcon className={'w-8 fill-white'} />} />
          <Button as={Link} href='https://facebook.com' className='bg-transparent' startContent={<FaceBookIcon className={'w-8 fill-white'} />} />
          <Button as={Link} href='https://instagram.com' className='bg-transparent' startContent={<InstaIcon className={'w-8 stroke-white'} />} />
        </div>
      </div>
    </section>
  )
}

export default BusinessInfo