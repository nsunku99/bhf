import { UserInfo } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default function User({
  id,
  image,
  firstName,
  lastName,
  email,
  company,
}: UserInfo) {
  return (
    <div className='min-w-[325px] max-lg:max-w-[375px] relative z-0 flex flex-col items-center justify-center gap-5 p-5 py-10 shadow-xl rounded-xl lg:flex-row'>
      <div className='absolute w-full bg-purple-600 max-lg:top-0 lg:w-1/4 lg:left-0 lg:h-full lg:rounded-l-xl max-lg:rounded-t-xl -z-10 h-2/5'></div>
      <div className='max-[400px]:mt-8 mt-16 bg-purple-200 rounded-full shadow-md lg:mt-0'>
        <Image
          className='h-full p-5'
          src={image}
          alt={`Picture of ${firstName}`}
          height={200}
          width={200}
        />
      </div>
      <div className='flex flex-col items-center justify-around gap-5 my-5'>
        <p className='text-3xl font-bold text-center'>
          Hello! My Name Is{' '}
          <span className='text-purple-600 underline decoration-black'>
            &nbsp;{firstName}&nbsp;
          </span>
        </p>
        <Link
          href={`/${id}`}
          className='px-5 py-3 font-semibold text-white bg-purple-600 rounded-full shadow-md hover:opacity-75 active:opacity-30'
        >
          Meet Me!
        </Link>
      </div>
    </div>
  );
}
