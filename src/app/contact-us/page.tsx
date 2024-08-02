'use client';

import Footer from '@/components/Footer';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className='bg-white min-h-screen '>
      <MaxWidthWrapper className='py-8 px-6'>
        <Link
          href={'/'}
          className='flex items-center gap-x-1 text-zinc-700 w-fit'
        >
          <ArrowLeft className='size-4' /> Go back
        </Link>

        <section className='mt-12'>
          <div className=''>
            <h1 className='text-2xl md:text-4xl text-zinc-900  font-semibold underline underline-offset-4 tracking-tight decoration-teal-600'>
              Contact Us
            </h1>
            <p className='text-justify w-full  mt-3 md:text-lg text-zinc-700 tracking-tight'>
              We will respond back to you as soon as possible.
            </p>
          </div>

          <div className='flex flex-col gap-y-8 md:gap-y-0 md:flex-row justify-between  mt-8'>
            <div className='md:flex-[0.5] shadow-md border rounded-xl py-6 flex justify-start items-center'>
              <iframe
                src='https://docs.google.com/forms/d/e/1FAIpQLSfoAb_CzkyekX9X2Lke_MxH2eTHogU6uptTtwtiJYJEVA5bOg/viewform?embedded=true'
                width='70'
                height='800'
                className='w-full m-0 p-0'
              >
                Loading…
              </iframe>
            </div>
            <div className='md:flex-[0.5] flex justify-end  h-fit'>
              <div className='border shadow-sm max-w-[30rem] flex justify-between items-center w-full p-8 rounded-2xl'>
                <div>
                  <p className='flex flex-col gap-y-0.5'>
                    <span className='text-zinc-600'>Email</span>
                    <span className='md:text-xl'>xxx@email.com</span>
                  </p>
                  <p className='flex flex-col mt-8 gap-y-0.5'>
                    <span className='text-zinc-600'>Phone</span>
                    <span className='md:text-xl'>+1934488484</span>
                  </p>
                </div>
                <hr className='h-full border border-zinc-200' />
                <div className='h-full'>
                  <div className='flex flex-col  gap-y-1.5'>
                    <span className='text-zinc-600'>Socials</span>
                    <div className='flex items-center space-x-3 '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='28'
                        height='28'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='lucide lucide-instagram '
                      >
                        <rect
                          width='20'
                          height='20'
                          x='2'
                          y='2'
                          rx='5'
                          ry='5'
                        />
                        <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                        <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='28'
                        height='28'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='lucide lucide-facebook '
                      >
                        <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
                      </svg>

                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='28'
                        height='28'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='lucide lucide-linkedin '
                      >
                        <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                        <rect width='4' height='12' x='2' y='9' />
                        <circle cx='4' cy='4' r='2' />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
      <Footer />
    </div>
  );
};
export default Page;
