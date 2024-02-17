import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

export type UserInfo = {
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
      <div>
        <h1 className='my-5 text-2xl font-semibold'>Meet {firstName}!</h1>
        <p>{`${firstName} ${lastName}`} </p>
        <p>{`${age} years old`} </p>
        <a href={`mailto:${email}`}>{`${email}`} </a>
        <p>{` ${company.title} at ${company.name}`} </p>
      </div>
    </div>
  );
}
