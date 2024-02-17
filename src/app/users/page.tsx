// Static Site Generation of Mock API
// NextJS prefetches content in production, and can optionally revalidate if data changes

import User from '../_components/User';
import { Fragment } from 'react';
import type { UserInfo } from '../_components/User';

export default async function Users() {
  const response = await fetch('https://dummyjson.com/users?limit=20');
  const data = await response.json();

  const userData = data.users.map(
    ({ image, firstName, lastName, age, email, company }: UserInfo) => {
      return (
        <Fragment key={`${firstName} ${lastName}`}>
          <User
            image={image}
            firstName={firstName}
            lastName={lastName}
            age={age}
            email={email}
            company={company}
          />
        </Fragment>
      );
    }
  );

  return (
    <>
      <h1>User Data</h1>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>{userData}</div>
    </>
  );
}