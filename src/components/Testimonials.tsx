'use client';

import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [testimonials, setTestimonals] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await fetch('https://test-api-liard.vercel.app/testimonials');
      const data = await res.json();
      setTestimonals(data);
    };

    fetchReviews();
  }, []);

  return (
    <section className='bg-zinc-100 py-16'>
      <h3 className='text-center font-semibold text-4xl text-zinc-800 tracking-tight'>
        What Our <span className='text-amber-500'>Clients</span> Have to Say
      </h3>
      {testimonials.length > 0 ? (
        <div></div>
      ) : (
        <p className='text-zinc-600 mt-8 text-center'>
          Be the first one to submit your review.
        </p>
      )}
    </section>
  );
};
export default Testimonials;
