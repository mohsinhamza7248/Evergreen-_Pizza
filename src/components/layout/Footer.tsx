import { FaceBookIcon } from "@/icons/FaceBookIcon"
import { InstaIcon } from "@/icons/InstaIcon"
import { LocationIcon } from "@/icons/LocationIcon"
import { MailIcon } from "@/icons/MailIcon"
import { PhoneIcon } from "@/icons/PhoneIcon"
import { TwitterIcon } from "@/icons/TwitterIcon"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-950 pt-12">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-10 mb-6 px-4 lg:px-48">

        {/* Brand and Social Links */}
        <div className="col-span-full sm:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start">
          <Link href="/" className='text-blue-500 text-2xl font-josefin mb-4'>Evergreen</Link>
          <div className="flex gap-6">
            <TwitterIcon className={"w-6 text-[#1DA1F2]"} />
            <FaceBookIcon className={"w-6 text-[#1877F2]"} />
            <InstaIcon className={"w-6 text-[#E1306C]"} />
          </div>
        </div>

        {/* About Us Section */}
        <div>
          <h4 className="uppercase text-white mb-4">About Us</h4>
          <p className="text-gray-500">
            Bold & Flavorful: Crave the crust. Love the toppings. Bold flavor. Big love. Say it with cheese.
          </p>
        </div>

        {/* Opening Hours Section */}
        <div>
          <h4 className="uppercase text-white mb-4">Opening Hours</h4>
          <p className="text-gray-500">Monday - Sun</p>
          <p className="text-gray-500">10:00pm - 2:00am</p>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="uppercase text-white mb-4">Services</h4>
          <div className="text-gray-500">
            <p><a className="inline-flex gap-x-2 hover:text-gray-300" href="/">Dine-In</a></p>
            <p><a className="inline-flex gap-x-2 hover:text-gray-300" href="/">Online Ordering</a></p>
            <p><a className="inline-flex gap-x-2 hover:text-gray-300" href="/">Catering</a></p>
            <p><a className="inline-flex gap-x-2 hover:text-gray-300" href="/">Specialty Pizzas</a></p>
          </div>
        </div>

        {/* Contact Information Section */}
        <div>
          <h4 className="uppercase text-white mb-4">Have a question?</h4>
          <div className="text-gray-500">
            <ul className="space-y-2">
              <li className="inline-flex space-x-4">
                <LocationIcon className={"w-6 text-gray-500"} />
                <span>20 CP Rd, Asif khan road, Delhi</span>
              </li>
              <li className="inline-flex space-x-4">
                <PhoneIcon className={"w-6 text-gray-500"} />
                <span>+91 6668 4892 229</span>
              </li>
              <li className="inline-flex space-x-4">
                <MailIcon className={"w-6 text-gray-500"} />
                <span>info@evergreen.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-5 border-t border-gray-700 text-center">
        <p className="mt-4 text-gray-500 text-sm">
          Copyright &copy; {new Date().getFullYear()} All rights reserved Evergreen
        </p>
      </div>
    </footer>
  )
}

export default Footer
