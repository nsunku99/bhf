import Image from 'next/image';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Post, { type PostInfo } from '@/app/components/Post';
import { Fragment, Suspense } from 'react';

export type UserQuickInfo = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  image: StaticImport;
};

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
  const { firstName, lastName, jobTitle, image }: UserQuickInfo =
    await userRes.json();

  // fetch user's posts
  const postsRes = await fetch(`${process.env.USERS_URI}/${id}/posts`, {
    cache: 'no-cache',
    next: {
      tags: ['post'],
    },
  });
  const postData = await postsRes.json();

  // generate post fragments
  const posts = Array.isArray(postData) ? (
    postData.map(({ id, title, body, tags, reactions }: PostInfo) => {
      return (
        <Suspense key={title} fallback='Loading...'>
          <Post
            id={id}
            title={title}
            body={body}
            tags={tags}
            reactions={reactions}
          />
        </Suspense>
      );
    })
  ) : (
    <p className='p-32 text-center text-slate-600'>
      {firstName} has not made any posts yet
    </p>
  );

  return (
    <div>
      <div className='flex flex-col-reverse min-[550px]:flex-row'>
        <Image
          className='m-5'
          src={image}
          alt={`Image of ${firstName}`}
          height={150}
          width={150}
        />
        <div className='m-5'>
          <p className='text-3xl max-md:text-center'>
            {firstName} {lastName}
          </p>
        </div>
      </div>
      {posts}
    </div>
  );
}
