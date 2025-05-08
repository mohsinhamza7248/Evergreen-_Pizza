'use client'
import { CartIcon } from '@/icons/CartIcon'
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useContext } from 'react'
import { ChevronDownIcon } from '@/icons/ChevronDownIcon'
import { UserIcon } from '@/icons/UserIcon'
import { TagIcon } from '@/icons/TagIcon'
import { UsersIcon } from '@/icons/UsersIcon'
import { ShoppingBagIcon } from '@/icons/ShoppingBagIcon'
import { MenuIcon } from '@/icons/MenuIcon'
import { SignOutIcon } from '@/icons/SignOutIcon'
import { AlignJustify } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { CartContext } from '../../util/ContextProvider'
import { useProfile } from '../hooks/useProfile'

const Header = () => {
  const { data: session } = useSession(); // Get session data (whether the user is logged in)
  const { cartProducts } = useContext(CartContext); // Get the products in the cart from context
  const pathname = usePathname(); // Get the current pathname
  const { data: profileData } = useProfile(); // Get profile data of the logged-in user

  return (
    <Navbar className='font-semibold bg-black py-3' classNames={{ item: 'data-[active=true]:text-secondary' }}>
      <NavbarBrand>
        <Link href="/" className='text-blue-500 text-2xl font-josefin'> Evergreen</Link>
      </NavbarBrand>

      <NavbarContent className="gap-8 hidden md:flex" justify="center">
        <NavbarItem isActive={pathname === '/'} className='hover:text-secondary'>
          <Link href="/" aria-current="page" className='hover:text-secondary'>Home</Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/menu'} className='hover:text-secondary'>
          <Link href="/menu" className='hover:text-secondary'>Menu</Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/services'} className='hover:text-secondary'>
          <Link href="/services" className='hover:text-secondary'>Services</Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/about'} className='hover:text-secondary'>
          <Link href="/about" className='hover:text-secondary'>About</Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/contact'} className='hover:text-secondary'>
          <Link href="/contact" className='hover:text-secondary'>Contact</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="gap-4 flex items-center justify-end w-full">
        <div className="md:hidden">
          {/* Conditionally render the cart icon only if the user is logged in */}
          {session && (
            <Button className='bg-transparent' as={Link} href='/cart'>
              <CartIcon className='w-8 stroke-white' />
              {cartProducts.length > 0 &&
                <span className='w-4 h-4 rounded-full bg-secondary text-dark text-xs text-center absolute right-1 top-0'>{cartProducts.length}</span>
              }
            </Button>
          )}
        </div>

        {profileData ? (
          <div className='flex items-center'>
            <Dropdown className='text-white'>
              <DropdownTrigger>
                <Button className='bg-transparent h-full' startContent={<Avatar src={profileData?.image ? profileData.image : ''} isBordered color='secondary' size='sm' />} endContent={<ChevronDownIcon className={'w-4 stroke-white'} />} disableAnimation />
              </DropdownTrigger>
              <DropdownMenu aria-label="Link Actions" color='secondary' variant='flat'>
                <DropdownItem key="profile" href="/profile" startContent={<UserIcon className={"w-6"} />}>My Profile</DropdownItem>
                <DropdownItem key="orders" href="/orders" startContent={<ShoppingBagIcon className={"w-6"} />}>Orders</DropdownItem>
                {<DropdownItem className={profileData.isAdmin ? '' : 'hidden'} key="categories" href="/categories" startContent={<TagIcon className={"w-6"} />} >Categories</DropdownItem>}
                {<DropdownItem className={profileData.isAdmin ? '' : 'hidden'} key="menu-items" href="/menu-items" startContent={<MenuIcon className={"w-6"} />}>Menu Items</DropdownItem>}
                {<DropdownItem className={profileData.isAdmin ? '' : 'hidden'} key="users" href="/users" startContent={<UsersIcon className={"w-6"} />}>Users</DropdownItem>}
                <DropdownItem key="signOut" startContent={<SignOutIcon className={'w-6'} />} onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        ) : (
          <div className='flex gap-6 items-center'>
            {session === null && (
              <>
                <Link href={'/login'} className='hover:text-secondary'>Login</Link>
                <Button as={Link} color="secondary" href={'/register'} className='font-semibold rounded-full px-6 py-2 text-dark'>
                  Sign Up
                </Button>
              </>
            )}
          </div>
        )}
      </NavbarContent>

      {/* Mobile Menu Button with Three Dots */}
      <div className="md:hidden">
        <Dropdown>
          <DropdownTrigger>
            <Button size="sm" startContent={<AlignJustify className="w-8" />} />
          </DropdownTrigger>
          <DropdownMenu aria-label="Mobile Menu">
            <DropdownItem key="home" href="/">Home</DropdownItem>
            <DropdownItem key="menu" href="/menu">Menu</DropdownItem>
            <DropdownItem key="services" href="/services">Services</DropdownItem>
            <DropdownItem key="about" href="/about">About</DropdownItem>
            <DropdownItem key="contact" href="/contact">Contact</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Navbar>
  );
}

export default Header;
