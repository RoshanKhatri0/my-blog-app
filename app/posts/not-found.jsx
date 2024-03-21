import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NotFound() {
  return (
    <div className="container text-center my-5">
      <h1>We hit a Brick Wall</h1>
    <img
      src="https://i.pinimg.com/564x/4e/19/c2/4e19c2d8da38136202aa53345057f601.jpg"
      style={{ height: '400px' }}
      alt="Not Found"
      className="img-fluid my-2"
    />
    <p className="lead">
    We could not find the blog you were looking for.
    </p>
    <Link href="/"> 
      <button className="cssbuttons-io">
        <span>Go back to the BlogList</span>
      </button>
    </Link>
  </div>
  )
}
