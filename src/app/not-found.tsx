// global not found

import Link from 'next/link';
import Image from 'next/image';
import cat404 from '/public/404cat.png';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Image className='w-auto h-1/3' src={cat404} alt='Not Found' />
      <p>Could not find requested resource</p>
      <Link className='p-3 m-3 text-white bg-purple-500 rounded-xl' href='/'>
        Go Back to Main Page
      </Link>
    </div>
  );
}
