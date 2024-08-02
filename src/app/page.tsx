'use client';

import Footer from '@/components/Footer';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Bot,
  CheckCircle,
  Code,
  Database,
  Infinity,
  Laptop,
  Smartphone,
  Store,
  TrendingUp,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    id: 1,
    serviceName: 'AI/ML',
    description:
      'Developing advanced AI and machine learning models to solve complex business problems and drive innovation.',
    icon: <Bot className='size-12' />,
  },
  {
    id: 2,
    serviceName: 'Web Development',
    description:
      'Building responsive and scalable websites using the latest technologies and best practices.',
    icon: <Laptop className='size-12 text-white' />,
  },
  {
    id: 3,
    serviceName: 'App Development',
    description:
      'Developing custom mobile applications for both Android and iOS platforms.',
    icon: <Smartphone className='size-10' />,
  },
  {
    id: 4,
    serviceName: 'Digital Marketing',
    description:
      'Implementing strategies to enhance online presence and drive traffic through SEO, social media, and content marketing.',
    icon: <Store className='size-10' />,
  },
  {
    id: 5,
    serviceName: 'Software Development',
    description:
      'Designing and developing software solutions tailored to meet business requirements and improve operational efficiency.',
    icon: <Code className='size-10' />,
  },
  {
    id: 6,
    serviceName: 'DevOps',
    description:
      'Integrating development and operations to improve collaboration, automation, and continuous delivery of software.',
    icon: <Infinity className='size-10' />,
  },
  {
    id: 7,
    serviceName: 'Analytics',
    description:
      'Utilizing data analytics to gain insights, drive decision-making, and optimize business performance.',
    icon: <TrendingUp className='size-10' />,
  },
  {
    id: 8,
    serviceName: 'Data Science',
    description:
      'Applying statistical analysis and machine learning techniques to extract insights and inform strategic decisions.',
    icon: <Database className='size-10' />,
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Home() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <main className='h-screen relative'>
        <Navbar />
        <section className='flex h-full gap-x-4 '>
          <div className=' p-6 lg:pr-12  h-full lg:flex-[0.45] flex flex-col justify-center lg:pl-[8rem]'>
            <h1 className='text-zinc-900 text-5xl lg:text-6xl font-semibold text-start tracking-tight'>
              From <span className='text-amber-500'>Data</span> to Deployment:
              We Drive Your <span className='text-amber-500'>Success</span>{' '}
            </h1>

            <p className='mt-8  font-medium text-zinc-600 md:text-lg leading-7 tracking-tight text-justify pr-4 '>
              <span className='text-zinc-950'>Precision Recalls</span> is a data
              science consulting firm offering comprehensive, end-to-end
              solutions for business challenges. Our services encompass data
              accumulation, preprocessing, insight generation, and solution
              deployment.
            </p>

            <Link href={'/about-us'}>
              <Button
                size={'lg'}
                className='bg-teal-500 w-fit hover:bg-teal-600 rounded-xl  tracking-tight mt-11 shadow-xl shadow-teal-400'
              >
                Read more
              </Button>
            </Link>
          </div>
          <div className='relative flex-[0.55] hidden lg:block overflow-hidden'>
            <Image
              alt='hero-image'
              src={'/hero2.png'}
              width={500}
              height={500}
              className='object-cover object-center w-full h-full'
            />
          </div>
        </section>
        <Image
          src={'/yellow-slant.png'}
          alt='decorative'
          width={500}
          height={500}
          className='w-[100px] h-[220px] z-[5] -skew-y-[12deg] absolute -bottom-[12rem] hidden md:block'
        />
      </main>

      {/* services */}
      <section
        id='services'
        className='bg-zinc-100 pt-28 mt-20 pb-36 px-6 md:px-0'
      >
        <h2 className='text-center text-4xl tracking-tight font-semibold text-zinc-800'>
          Our Services
        </h2>
        <p className='text-sm text-zinc-700 text-center mt-4'>
          We provide the best services in all the below mentioned departments.
        </p>

        <MaxWidthWrapper className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-8 gap-y-12 mt-16 px-6'>
          {SERVICES.map((service, index) => (
            <motion.div
              className={cn(
                ' shadow-sm rounded-2xl px-8 py-16 max-w-[22rem] flex flex-col items-center',
                index === 1
                  ? 'bg-teal-500 shadow-2xl shadow-teal-500'
                  : 'bg-white'
              )}
              key={service.id}
              whileInView='animate'
              variants={fadeInAnimationVariants}
              initial='initial'
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {service.icon}
              <h2
                className={cn(
                  'text-center mt-8 text-2xl font-semibold tracking-tight',
                  index === 1 && 'text-white'
                )}
              >
                {service.serviceName}
              </h2>
              <p
                className={cn(
                  'text-center mt-3 text-sm text-zinc-600',
                  index === 1 && 'text-zinc-100'
                )}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </MaxWidthWrapper>
      </section>

      {/* Achievements */}
      <section id='about' className='pt-20 pb-36 md:pb-48 relative'>
        <MaxWidthWrapper className='md:flex items-center md:gap-x-24 px-6'>
          <div className='px-6 md:grow'>
            <h1 className='text-4xl font-semibold tracking-tight text-zinc-800'>
              Why choose us?
            </h1>

            <ul className='mt-8 flex flex-col gap-y-6'>
              <li className='text-zinc-600 tracking-tighter flex md:items-center gap-x-4'>
                <CheckCircle className='text-teal-600 max-w-5 w-full' />
                <span className='text-lg'>
                  A team of 10 Data Scientists with vast experience
                </span>
              </li>
              <li className='text-zinc-500 tracking-tighter flex md:items-center gap-x-4'>
                <CheckCircle className='text-teal-600 max-w-5 w-full' />
                <span className='text-lg'>
                  <span className='text-black font-medium'>92% clients</span>{' '}
                  prefer to renew contracts with us
                </span>
              </li>
              <li className='text-zinc-500 tracking-tighter flex md:items-center gap-x-4'>
                <CheckCircle className='text-teal-600 max-w-5 w-full' />
                <div>
                  <span className='text-lg '>
                    Delivered projects worth more than{' '}
                    <span className='text-black font-medium'>50 lakhs</span>{' '}
                    within 1.5 years of inception
                  </span>
                </div>
              </li>
              <li className='text-zinc-500 tracking-tighter flex md:items-center gap-x-4'>
                <CheckCircle className='text-teal-600 max-w-5 w-full' />
                <span className='text-lg '>
                  <span className='underline underline-offset-2'>
                    Flexible pricing plans
                  </span>{' '}
                  as per project duration/client requirements
                </span>
              </li>
              <li className='text-zinc-500 tracking-tighter flex md:items-center gap-x-4'>
                <CheckCircle className='text-teal-600 max-w-5 w-full' />
                <span className='text-lg '>
                  Expertise in hardware provisioning to algorithm development
                </span>
              </li>
            </ul>
          </div>
          <Image
            loading='lazy'
            src={'/stock-1.jpg'}
            alt={'office-image'}
            width={500}
            height={500}
            className='-skew-y-3 w-[40%] lg:w-auto hidden md:block'
          />
        </MaxWidthWrapper>
        {/* Add after new section is added */}
        {/* <Image
        src={'/green-slant.png'}
        alt='decorative'
        width={500}
        height={500}
        className='w-[100px] h-[220px] z-[5] -skew-y-[12deg] absolute right-0 -bottom-[8rem]'
        /> */}
      </section>

      {/* <Testimonials /> */}

      <Footer />
    </div>
  );
}
