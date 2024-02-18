import Image from 'next/image';
import cat_loader from '/public/loading.gif';

export default function Loading() {
  return (
    <div className='flex items-center justify-center w-full h-[70vh]'>
      <Image src={cat_loader} alt='Loading...' />
    </div>
  );
}
