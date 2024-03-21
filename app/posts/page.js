import { Suspense } from 'react';
import Loading from '../loading';
import BlogList from '../components/BlogList';
import Link from 'next/link';

export default function Home() {
  
  
  return (
    <div>
      <h1>Blog Posts List:</h1>
      <Suspense fallback={<Loading/>}>
        <BlogList/>
      </Suspense>
      <Link href='#'>Top</Link>
    </div>
  );
};
