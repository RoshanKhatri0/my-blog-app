import Link from "next/link"

export default function NotFound() {
  return (
    <main>
        <h1>There was a problem.</h1>
        <p>We could not find the page you were looking for.</p>
        <Link href="/">Go back to the Dashboard</Link>
    </main>
  )
}
