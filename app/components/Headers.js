import Link from 'next/link';

export default function Headers() {
  return (
    <>
      <div className="input">
        <Link href="/"><button className="value">Home</button></Link>
        <Link href="/contact"><button className="value">Contact</button></Link>
      </div>


    </>


  );
}
