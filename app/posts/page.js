import { Suspense } from 'react';
import Loading from '../loading';
import BlogList from '../components/BlogList';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className='home container-fluid'>
      <h1 className='text-center mb-3'>Blog Posts List:</h1>
      <Suspense fallback={<Loading />}>
        <BlogList />
      </Suspense>
      <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <Link href='#'>
          <button className="t-Btn">
            <svg height="1.2em" class="arrow" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
            <p class="t-text">Back to Top</p>
          </button>
        </Link>
      </div>
    </div>
  );
};
