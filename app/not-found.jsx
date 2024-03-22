import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NotFound() {
  return (
    <div className="container text-center my-5">
      <Image
        src="https://i.pinimg.com/564x/4e/19/c2/4e19c2d8da38136202aa53345057f601.jpg"
        alt="Not Found"
        width={400}
        height={400}
        className="img-fluid my-2"
      />
      <p className="lead">
        We could not find the page you were looking for.
      </p>
      <Link href="/"> 
        <button className="cssbuttons-io">
          <span>Go back to the Dashboard</span>
        </button>
      </Link>
    </div>
  );
}
