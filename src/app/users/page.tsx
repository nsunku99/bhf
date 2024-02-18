// Static Site Generation of Mock API
// NextJS prefetches content in production, and can optionally revalidate if data changes

import User, { type UserInfo } from '@/app/components/User';
import { Fragment } from 'react';

export default async function Users() {
  // fetch user data
  const response = await fetch('https://dummyjson.com/users');
  const data = await response.json();

  // generate User Cards array
  const userData = data.users.map(
    ({ id, image, firstName, lastName, email, company }: UserInfo) => {
      return (
        <Fragment key={id}>
          <User
            id={id}
            image={image}
            firstName={firstName}
            lastName={lastName}
            email={email}
            company={company}
          />
        </Fragment>
      );
    }
  );

  return (
    <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>{userData}</div>
  );
}
