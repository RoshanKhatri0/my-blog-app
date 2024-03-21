import { getAllPosts } from "../utils/api";
import Link from 'next/link';

export default async function BlogList() {
  const posts = await getAllPosts(); 

  const truncateBody = (body) => {
    return body.length > 100 ? body.substring(0, 100) + '...' : body;
  };

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            
              <h2>{post.title}</h2>
              <p>{truncateBody(post.body)}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
