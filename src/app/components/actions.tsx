'use server';

import { revalidateTag } from 'next/cache';

export async function likeButton(id: number, likes: number) {
  const res = await fetch(`${process.env.POSTS_URI}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ reactions: likes + 1 }),
  });

  if (res.ok) {
    console.log('New Like');
    revalidateTag('post');
  }
}

export async function dislikeButton(id: number, likes: number) {
  const res = await fetch(`${process.env.POSTS_URI}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ reactions: likes - 1 }),
  });

  if (res.ok) {
    console.log('Removed Like');
    revalidateTag('post');
  }
}
