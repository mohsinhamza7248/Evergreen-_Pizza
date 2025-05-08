'use client'
import MenuItem from '@/types/MenuItem';
import { Button, Link } from '@nextui-org/react'
import { useSession } from 'next-auth/react';

interface HomeMenuItemCardProps {
  menuItem: MenuItem;
  index: number;
}

const HomeMenuItemCard = ({ menuItem, index }: HomeMenuItemCardProps) => {
  const { data: session } = useSession();
  const hasSizesOrExtras = menuItem.sizes.length > 0 || menuItem.extraIngredientsPrices.length > 0;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6'>
      {/* Layout with dynamic background and text alignment */}
      <div className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} gap-4`}>
        {/* Image Section */}
        <div
          style={{ backgroundImage: `url(${menuItem.image})` }}
          className='h-[200px] sm:h-[300px] bg-cover bg-center bg-no-repeat rounded-lg'
        ></div>

        {/* Text Section */}
        <div className="flex flex-col justify-between p-4 sm:p-8 bg-gradient-to-t from-black/70 to-transparent text-white rounded-lg">
          <h3 className='text-xl sm:text-2xl font-semibold'>{menuItem.name}</h3>
          <p className='text-sm sm:text-base text-gray-300 line-clamp-3'>{menuItem.description}</p>
          <div className='flex items-center gap-4 justify-between'>
            <p className='text-primary font-semibold'>
              {hasSizesOrExtras && <span>From: </span>}
              ${(menuItem.basePrice as number).toFixed(2)}
            </p>
            <Button
              as={Link}
              href={session ? '/menu' : '/login'}
              radius='none'
              size='sm'
              className='bg-transparent border hover:bg-primary hover:text-dark'
            >
              Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMenuItemCard;
