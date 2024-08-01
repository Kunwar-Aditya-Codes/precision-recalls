import { ChevronRight } from 'lucide-react';
import MaxWidthWrapper from './MaxWidthWrapper';

const Footer = () => {
  return (
    <footer className='bg-zinc-800 pt-12'>
      <MaxWidthWrapper className='pb-12 text-white flex flex-col md:flex-row gap-y-16 md:gap-y-0 items-start justify-between px-6'>
        <div>
          <h3 className='text-2xl font-semibold tracking-tight'>
            Precision Recalls
          </h3>
          <p className='text-zinc-300 mt-4 max-w-[35rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            deserunt nemo ipsam voluptas a tempora.
          </p>

          <div className='flex items-center space-x-6 text-zinc-300 mt-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-instagram hover:text-zinc-100'
            >
              <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
              <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
              <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-facebook hover:text-zinc-100'
            >
              <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
            </svg>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-linkedin hover:text-zinc-100'
            >
              <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
              <rect width='4' height='12' x='2' y='9' />
              <circle cx='4' cy='4' r='2' />
            </svg>
          </div>
        </div>
        <div className=''>
          <h3 className='text-lg'>Quick Links</h3>
          <ul className='text-zinc-300  mt-1 flex flex-col gap-y-1'>
            <li className='flex items-center gap-x-1  hover:text-zinc-100'>
              <ChevronRight className='size-4' />
              About Us
            </li>
            <li className='flex items-center gap-x-1 hover:text-zinc-100'>
              <ChevronRight className='size-4' />
              Portfolio
            </li>
            <li className='flex items-center gap-x-1 hover:text-zinc-100'>
              <ChevronRight className='size-4' />
              Testimonials
            </li>
            <li className='flex items-center gap-x-1 hover:text-zinc-100'>
              <ChevronRight className='size-4' />
              Contact Us
            </li>
            <li className='flex items-center gap-x-1 hover:text-zinc-100'>
              <ChevronRight className='size-4' />
              Privacy Policy
            </li>
          </ul>
        </div>
      </MaxWidthWrapper>
      <p className='border-t text-center text-white font-medium text-sm  py-4'>
        &copy; {new Date().getFullYear()} Precision Recalls. All rights
        reserved.
      </p>
    </footer>
  );
};
export default Footer;
