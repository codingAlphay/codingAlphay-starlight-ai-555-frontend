import { PiCoinsThin } from 'react-icons/pi';

import AnimatedSection from '@/components/AnimatedSection';

import { CONTRACT } from '@/constant/contract';

export default function Tokenomics() {
  return (
    <AnimatedSection id='tokenomics' className=' text-zinc-900 py-16'>
      <div className='container mx-auto text-center'>
        <div className='flex flex-col-reverse md:flex-row md:items-center justify-start mx-4 md:mx-6 lg:mx-8'>
          <h2 className='text-5xl lg:text-7xl font-extrabold mb-8 text-zinc-900 '>
            Tokenomics
          </h2>
          <PiCoinsThin className='size-32 md:size-42 lg:size-64 px-5 fill-zinc-900' />
        </div>
        <div className='flex gap-8 m-10 justify-center '>
          {CONTRACT.ownershipRenounced && (
            <div className='p-6 border-4 border-zinc-900 rounded-lg shadow-md hover:scale-105 transition-all'>
              <h2 className='text-3xl font-bold  text-zinc-900'>
                Total Supply <br /> 
                <span className='text-transparent bg-text-gradient-1 bg-clip-text font-extrabold pt-2'>
                  1 000 000 000 $STAI
                </span>
              </h2>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}
