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
    <div className='container-fluid b-details'>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href="/">
      <button class="btn-12"><span>View More</span></button>
      </Link>
    </div>
  );
}
