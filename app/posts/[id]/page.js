'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPostById } from '../../utils/api';

export default function Posts({ params }) {
  const id = params.id;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const postData = await getPostById(id);
          setPost(postData);
        } catch (error) {
          console.error("Error fetching post:", error); 
        }
      };
      fetchPost();
    }
  }, [id]);

  if (!post) {
    return <div>No Data Found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href="/">
        Back to Post Listing
      </Link>
    </div>
  );
}
