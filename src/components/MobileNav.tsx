import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Ellipsis } from 'lucide-react';
import Link from 'next/link';

const MobileNav = () => {
  return (
    <div className='md:hidden'>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Ellipsis className='size-4' />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='mr-6 w-[12rem] text-lg gap-y-2.5 p-2 flex flex-col'>
          <DropdownMenuItem className='p-2'>
            <Link href={'/about-us'}>About Us</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='p-2'>
            <Link href={'#services'}>Services</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='p-2'>
            <Link href={'/contact-us'}>Contact Us</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='p-2'>Portfolio</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default MobileNav;
