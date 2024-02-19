<h1>Britannica Home Fashions Inc: Next.js Simple App</h1>

<h3>Set Up:</h3>

To operate the application, clone the repository into your IDE, install dependencies with package manager of choice:

```
npm install
```

After installing, start the server with:

```
npm run dev
```

<h3>Static Page:</h3>

The home page presents a static page of User Profiles populated by entries from a Mock API.

The Mock API data was provided by <a href='https://dummyjson.com/'>dummyjson.com</a>, and I moved those values into <a href='https://mockapi.io/'>mockapi.io</a> so I could perform all CRUD operations. I made the mockapi.io api links exposed in the .env file.

<h3>Dynamic Routes:</h3>

Click any profile to see what posts they have, or if they have any. These user routes are generated with a dynamic route handler <strong>[user]/page.tsx</strong>, that will create a user page that displays the user, their job, and their posts.

- <strong>NOTE:</strong> Because Next.js HEAVILY caches wherever possible, I turned off the cache on the fetch request pertinent to the server action. Otherwise, on revist/reload, Next.js may just provide the memoized data, and the most updated data will not be shown.

<br/>

I utilized the `generateStaticParams()` function in the dynamic route handler, which, in production, will generate static pages for all the routes at <strong>build time.</strong>

To handle users/pages that don't exist, if the fetch response status is not good, the `notFound()` function from `next/navigation` is invoked and sends the user the 404 page.

<h3>Server Action:</h3>

Each of the posts have a like and dislike button, and both of these buttons trigger a server action. The actions behave fundamentally the same (aside from incrementing or decrementing the value):

<br />

- A button click invokes its Server Action
- The server action performs a PATCH request, updating the number of likes in the backend API
- The page is revalidated after the PATCH, and will display the new information

<br />

<strong>NOTE:</strong> Due to the lag that occurs with lifecycle of a server action updating the UI, I added <strong>Optimistic Updates</strong> with React's `useOptimistic()` Hook, providing the UX <strong>immediate feedback</strong> while the server action is still ongoing

<h3>ETC:</h3>

- I used Tailwind to design the application with a mobile first approach, and then implemented responsive breakpoints for larger screen styles
- TypeScript declarations were used throughout where possible, server actions are in actions.tsx, Components are in components folder
- If you were wondering about the cat theme, because the dummy data profile pictures were all cats, I continued with that theme where applicable
- The limits of the mockapi can sometimes slow the data population w/ respect to each user's posts, and if you spam the like / dislike buttons, they can
