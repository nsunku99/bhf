import Image from 'next/image';
import Post from '@/app/components/Post';
import Link from 'next/link';
import type { PostInfo, UserQuickInfo } from '@/types';
import { Fragment } from 'react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const res = await fetch(`${process.env.USERS_URI}`);
  const users = await res.json();

  return users.map(({ id }: { id: number }) => ({
    slug: id,
  }));
}

export default async function UserPage({
  params,
}: {
  params: { user: string };
}) {
  const { user: id } = params;

  // fetch user display information
  const userRes = await fetch(`${process.env.USERS_URI}/${id}`);
  if (!userRes.ok) notFound();

  const { firstName, lastName, jobTitle, image }: UserQuickInfo =
    await userRes.json();

  // fetch user's posts
  // NOTE: necessary to turn off caching so posts aren't rerendered from memoized fetch data
  const postsRes = await fetch(`${process.env.USERS_URI}/${id}/posts`, {
    cache: 'no-store', // no-store === no-cache
    next: {
      tags: ['post'],
    },
  });
  const postData = await postsRes.json();

  // generate post fragments
  const posts = Array.isArray(postData) ? (
    postData.map(({ id, title, body, tags, reactions }: PostInfo) => {
      return (
        <Fragment key={title}>
          <Post
            id={id}
            title={title}
            body={body}
            tags={tags}
            reactions={reactions}
          />
        </Fragment>
      );
    })
  ) : (
    <p className='p-32 text-center text-slate-600'>
      {firstName} has not made any posts yet
    </p>
  );

  return (
    <div>
      <Link
        className='px-5 py-3 mt-4 mb-32 font-semibold text-white bg-purple-600 rounded-full shadow-md hover:opacity-75 active:opacity-30'
        href={'/'}
      >
        Go Back
      </Link>
      <div className='mt-14 flex flex-col-reverse items-center min-[550px]:flex-row'>
        <Image
          className='m-5'
          src={image}
          alt={`Image of ${firstName}`}
          height={150}
          width={150}
        />
        <div className='w-full m-5 md:text-right max-md:text-center'>
          <p className='text-3xl'>
            {firstName} {lastName}
          </p>
          {/* <br /> */}
          <p>{jobTitle}</p>
        </div>
      </div>
      {posts}
    </div>
  );
}
