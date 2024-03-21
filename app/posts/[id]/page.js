import Link from 'next/link';
import { getAllPosts, getPostById } from '../../utils/api';
import { notFound } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

export const dynamicParams = true

export async function generateStaticParams(){
  const posts = await getAllPosts()
  return posts.map((post)=>({
    id: String(post.id)
  }))
}

async function getPosts(id){
  const post = await getPostById(id)
  if (!post.id) {
    notFound()
  }
  return post
}

export default async function Posts({ params }) {
  const post = await getPosts(params.id);
  return (
    <div className='container-fluid my-5'>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href="/">
        Back to Post Listing
      </Link>
    </div>
  );
}
