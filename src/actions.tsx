'use server';

// server action functions

import { revalidateTag } from 'next/cache';

export async function likeButton(id: number, likes: number) {
  await fetch(`${process.env.POSTS_URI}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ reactions: likes + 1 }),
  });

  revalidateTag('post');
}

export async function dislikeButton(id: number, likes: number) {
  await fetch(`${process.env.POSTS_URI}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ reactions: likes - 1 }),
  });

  revalidateTag('post');
}
