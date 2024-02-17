import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

export type UserInfo = {
  id: number;
  image: StaticImport;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  company: {
    name: string;
    title: string;
  };
};

export default function User({
  id,
  image,
  firstName,
  lastName,
  age,
  email,
  company,
}: UserInfo) {
  return (
    <div className='flex flex-col items-center gap-5 p-10 border-4 border-purple-800 rounded-xl md:flex-row'>
      <div>
        <Image
          className='m-3'
          src={image}
          alt={`Picture of ${firstName}`}
          height={150}
          width={150}
        />
      </div>
      <div className='flex flex-col items-start justify-around gap-5'>
        <p className='text-3xl font-bold '>{`${firstName} ${lastName}`} </p>
        <Link
          href={`/users/${id}`}
          className='p-3 text-xl font-semibold bg-purple-400 border-2 border-purple-600 rounded-xl hover:opacity-75'
        >
          Meet {firstName}!
        </Link>
        {/* <p>{`${age} years old`} </p>
        <a className='hover:opacity-50' href={`mailto:${email}`}>
          {`${email}`}{' '}
        </a>
        <p>
          <span className='font-semibold'>{company.title}</span> at{' '}
          <a
            className='hover:opacity-75'
            href={`https://www.google.com/search?q=${company.name}`}
          >
            {company.name}
          </a>
        </p> */}
      </div>
    </div>
  );
}
