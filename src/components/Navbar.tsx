import { useEffect, useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import MobileNav from './MobileNav';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        'fixed transition-colors z-10 duration-300 w-full top-0 px-6',
        isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-md' : 'bg-transparent'
      )}
    >
      <MaxWidthWrapper className='flex items-center justify-between md:p-4 px-8 py-4'>
        <Link href={'/'}>
          <h1 className='italic font-bold md:text-xl'>Precision Recalls</h1>
        </Link>
        <MobileNav />
        <ul
          className={cn(
            'hidden md:flex items-center gap-x-12 text-sm font-medium tracking-tight uppercase text-zinc-900'
          )}
        >
          <li>
            <Link href={'/about-us'}>About Us</Link>
          </li>
          <li>
            <Link href={'#services'}>Services</Link>
          </li>
          <li>
            <Link href={'/contact-us'}>Contact Us</Link>
          </li>
          <li>Portfolio</li>
        </ul>
      </MaxWidthWrapper>
    </nav>
  );
};
export default Navbar;
