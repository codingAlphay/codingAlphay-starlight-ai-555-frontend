import Image from 'next/image';
import Link from 'next/link';
import { FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


import AnimatedSection from '@/components/AnimatedSection';

import { CONTRACT } from '@/constant/contract';

export default function Socials() {
  return (
    <AnimatedSection id='socials'>
      <div className='flex flex-col-reverse items-center md:flex-row justify-between gap-5 '>
        <div className='w-full md:w-1/2 mx-4 px-4 flex justify-center items-center'>
          <div className='w-80 md:96 lg:w-[1000px] aspect-square mx-8 relative'>
            <Image fill src={CONTRACT.logo3} alt='Logo' className='rounded-full' />
          </div>
        </div>

        <div className='w-full md:w-1/2 mx-4 px-4'>
          <h2 className='text-center md:text-left text-3xl lg:text-5xl font-extrabold mb-8 text-zinc-900   '>
            Follow {CONTRACT.name} on social media
          </h2>
          <div className='flex items-center justify-center md:justify-start gap-4'>
            <Link href={CONTRACT.twitter}>
              <FaXTwitter className='size-16 lg:size-24 transform hover:scale-110 transition duration-200 fill-black' />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
