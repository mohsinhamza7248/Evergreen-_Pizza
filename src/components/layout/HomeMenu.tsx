'use client'
import React, { useEffect, useState } from 'react'
import MenuItem from '@/types/MenuItem'
import HomeMenuItemCard from './HomeMenuItemCard'
import SectionHeader from './SectionHeader'
import { SectionProps } from '@/types/SectionProps'

const HomeMenu = ({ className }: SectionProps) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])

  useEffect(() => {
    fetch("/api/menu-items")
      .then(res => res.json())
      .then(menuItems => setMenuItems(menuItems.slice(0, 6))) // Fetching only 6 items
  }, [])

  return (
    <section className={className}>
      <SectionHeader
        header={'Hot Pizza Meals'}
        description={'From classic favorites to innovative creations, our hot pizza meals promise a delightful symphony of flavors that will leave you craving for more.'}
      />
      <div className='container px-4 mx-auto'>
        {/* Adjust the grid layout to show 2 columns on mobile and 3 columns on larger screens */}
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {menuItems && menuItems.map((menuItem, index) => (
            <HomeMenuItemCard key={menuItem._id} menuItem={menuItem} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeMenu
