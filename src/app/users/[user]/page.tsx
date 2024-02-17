import Image from 'next/image';
import Post from '@/app/_components/Post';
import type { PostInfo } from '@/app/_components/Post';
import { Fragment } from 'react';

export async function generateStaticParams() {
  const res = await fetch('https://dummyjson.com/users?limit=20');
  const { users } = await res.json();

  return users.map(({ id }: { id: number }) => ({
    slug: id,
  }));
}

export default async function UserPage({
  params,
}: {
  params: { user: string };
}) {
  const { user } = params;

  const res = await fetch(`https://dummyjson.com/users/${user}`);
  const data = await res.json();
  // console.log(data);

  const postsRes = await fetch(`https://dummyjson.com/users/${user}/posts`);
  const { posts: postData } = await postsRes.json();
  console.log(postData);

  const posts =
    postData && postData.length ? (
      postData.map(({ title, body, tags }: PostInfo) => {
        return (
          <Fragment key={title}>
            <Post title={title} body={body} tags={tags} />
          </Fragment>
        );
      })
    ) : (
      <p className='p-32 text-center text-slate-600'>
        {data.firstName} has not made any posts yet
      </p>
    );

  return (
    <div>
      <div className='flex'>
        <Image
          className='m-5'
          src={data.image}
          alt={`Image of ${data.firstName}`}
          height={150}
          width={150}
        />
        <div className='m-5'>
          <p className='text-3xl'>
            {data.firstName} {data.lastName}
          </p>
        </div>
      </div>
      {posts}
    </div>
  );
}
