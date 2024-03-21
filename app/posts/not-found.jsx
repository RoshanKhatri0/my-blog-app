import Link from "next/link"

export default function NotFound() {
  return (
    <main>
        <h1>We hit a Brick Wall</h1>
        <p>We could not find the blog you were looking for.</p>
        <Link href="/">Go back to the BlogList</Link>
    </main>
  )
}
