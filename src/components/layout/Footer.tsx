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
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-6 px-10 lg:px-48">
        <div className="col-span-full lg:col-span-1 lg:block">
          <Link href="/" className='text-blue-500 text-2xl font-josefin'> Evergreen</Link>
          <div className="mt-6 flex gap-6">
            <TwitterIcon className={"w-6 text-[#1DA1F2]"} />
            <FaceBookIcon className={"w-6 text-[#1877F2]"} />
            <InstaIcon className={"w-6 text-[#E1306C]"} />
          </div>
        </div>

        <div>
          <h4 className="uppercase text-white">About Us</h4>
          <p className="mt-6 text-gray-500">
            Bold & Flavorful:
            Crave the crust. Love the toppings.
            Bold flavor. Big love.
            Say it with cheese.
          </p>
        </div>

        <div>
          <h4 className="uppercase text-white">Opening Hours</h4>
          <p className="mt-6 text-gray-500">Monday - Sun</p>
          <p className="mt-2 text-gray-500">10:00pm - 2:00am</p>
        </div>

        <div>
          <h4 className="uppercase text-white">Services</h4>
          <div className="mt-6 grid space-y-2 text-gray-500">
            <p><a className="inline-flex gap-x-2 hover:text-gray-300" href="/">Dine-In</a></p>
            <p><a className="inline-flex gap-x-2 hover:text-gray-300" href="/">Online Ordering</a></p>
            <p><a className="inline-flex gap-x-2 hover:text-gray-300" href="/">Catering</a></p>
            <p><a className="inline-flex gap-x-2 hover:text-gray-300" href="/">Specialty Pizzas</a></p>
          </div>
        </div>

        <div>
          <h4 className="uppercase text-white">Have a question?</h4>
          <div className="mt-6 text-gray-500">
            <ul className="space-y-2">
              <li className="inline-flex space-x-4">
                <span><LocationIcon className={"w-6 text-gray-500"} /></span>
                <span>20 CP Rd, Asif khan road, Delhi</span>
              </li>
              <li className="inline-flex space-x-4">
                <span><PhoneIcon className={"w-6 text-gray-500"} /></span>
                <span>+91 6668 4892 229</span>
              </li>
              <li className="inline-flex space-x-4">
                <span><MailIcon className={"w-6 text-gray-500"} /></span>
                <span>info@evergreen.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-5 border-t border-gray-700 text-center">
        <p className="mt-4 text-gray-500">Copyright &copy; {new Date().getFullYear()} All rights reserved Evergreen</p>
      </div>
    </footer>
  )
}

export default Footer
