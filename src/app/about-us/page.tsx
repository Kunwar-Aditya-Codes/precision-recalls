'use client';

// TODO: mobile responsive

import Footer from '@/components/Footer';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CORE_VALUES = [
  'Customer-centric Approach',
  'Flexibility & Adaptability ',
  'Fair & Reliable',
  'Dynamic & Evolving',
  'Embrace and Drive',
  'Change Foster Growth and Learning',
];

const KEY_DIFFERENCE = [
  {
    title: 'Industry Experience',
    description:
      'Experienced in Retail, FMCG, Fintech IoT, B2C/B2B products, Climate Tech, Cybersecurity, and NLP/Computer Vision. Skilled in leveraging technology for innovation, efficiency, and sustainability. Proficient in advanced security measures and AI-driven solutions for complex business challenges.',
  },

  {
    title: 'Reusable Data Processing Pipelines',
    description:
      'Reusable Data Preprocessing Scripts for faster turn around time of projects to save overall costs.',
  },
  {
    title: 'Tools and Technologies',
    description:
      'Python/JAVA/R/Node.js, SQL, Spark, Kafka, AWS, GCP, Google Looker, Tableau, PowerBI & Other related libraries etc.',
  },
  {
    title: 'DS/DA Team',
    description: 'Our team possesses expertise on multiple technologies.',
  },
];

const Page = () => {
  return (
    <div className='bg-white min-h-screen'>
      <MaxWidthWrapper className='py-8'>
        <Link
          href={'/'}
          className='flex items-center gap-x-1 text-zinc-700 w-fit'
        >
          <ArrowLeft className='size-4' /> Go back
        </Link>

        <section className='mt-12 flex '>
          <div className='flex-[0.7]'>
            <h1 className='text-4xl text-zinc-900  font-semibold underline underline-offset-4 tracking-tight decoration-teal-600'>
              About the company
            </h1>
            <p className='text-justify pr-36 mt-8 text-lg text-zinc-700 tracking-tight'>
              Precision Recalls is a data science consulting firm offering
              comprehensive, end-to-end solutions for business challenges. Our
              services encompass data accumulation, preprocessing, insight
              generation, and solution deployment.
            </p>

            <h2 className='text-4xl text-zinc-900  font-semibold underline underline-offset-4 tracking-tight decoration-teal-600 mt-16'>
              Core Values
            </h2>
            <ul className='mt-8'>
              {CORE_VALUES.map((value, index) => (
                <li
                  className='mt-4 text-lg text-zinc-700 tracking-tighter flex items-center gap-x-2'
                  key={index}
                >
                  <CheckCircle className='size-4 text-teal-600 fill-white' />
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div className='flex-[0.3]'>
            <Image
              src={'/ceo.jpg'}
              alt='ceo'
              width={500}
              height={500}
              className=' rounded-3xl scale-95'
            />
            <h2 className='text-center font-bold text-zinc-900 text-2xl tracking-tight '>
              Abhay Agarwal (CEO)
            </h2>
          </div>
        </section>

        <section className='mb-12'>
          <h2 className='text-4xl text-zinc-900  font-semibold underline underline-offset-4 tracking-tight decoration-teal-600 mt-16'>
            Key Differentiator
          </h2>

          <div className='grid grid-cols-4 gap-6 mt-8'>
            {KEY_DIFFERENCE.map((diff, index) => (
              <div
                className='p-6  shadow border  h-full rounded-3xl flex flex-col gap-y-4'
                key={index}
              >
                <h3 className='h-[3rem] text-xl font-medium text-black'>
                  {diff.title}
                </h3>
                <p className='mt-4 text-zinc-700'>{diff.description}</p>
              </div>
            ))}
          </div>
        </section>
      </MaxWidthWrapper>
      <Footer />
    </div>
  );
};
export default Page;
