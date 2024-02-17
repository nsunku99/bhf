import Image from 'next/image';
import Post from '@/app/_components/Post';
import type { PostInfo } from '@/app/_components/Post';
import { Fragment } from 'react';

export default async function UserPage({
  params,
}: {
  params: { user: string };
}) {
  const { user } = params;

  const response = await fetch(`https://dummyjson.com/users/${user}`);
  const data = await response.json();
  console.log(data);

  const postResponse = await fetch(`https://dummyjson.com/users/${user}/posts`);
  const { posts: postData } = await postResponse.json();

  // console.log(posts, posts.posts[0]);
  const posts = postData.map(({ title, body, tags }: PostInfo) => {
    return (
      <Fragment key={title}>
        <Post title={title} body={body} tags={tags} />
      </Fragment>
    );
  });

  return (
    <div>
      <div>
        <Image
          src={data.image}
          alt={`Image of ${data.firstName}`}
          height={150}
          width={150}
        />
        <p>
          {data.firstName} {data.lastName}
        </p>
      </div>
      {posts}
    </div>
  );
}
