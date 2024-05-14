import { Suspense } from 'react';

import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

// export const metadata = {
//   title: 'Latest Post',
//   description: 'Browse our latest posts'
// }

export async function generateMetadata({params}){
 const posts = await getPosts();
 const numberofPosts = posts.length;
 return{
  title: `Browse all our ${numberofPosts} posts.`,
  description:'Browse all our posts.'
 }
}

async function LatestPosts() {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts} />;
}

export default async function Home() {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed.</p>
      <section id="latest-posts">
      <Suspense fallback={<p>Loading recent posts...</p>}>
        <LatestPosts />
      </Suspense>
      </section>
    </>
  );
}
