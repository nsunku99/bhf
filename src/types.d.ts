import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type UserQuickInfo = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  image: StaticImport;
};

export type UserInfo = {
  id: number;
  image: StaticImport;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
};

export type PostInfo = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: number;
};
