import Link from 'next/link';

export default function Headers() {
  return (
    <>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
      
    
  );
}