'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllPosts } from './utils/api';

export default function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getAllPosts();
      setPosts(postsData);
    };
    fetchPosts();
  }, []);
  const truncateBody = (body) => {
    return body.length > 100 ? body.substring(0, 100) + '...' : body;
  };
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <Link legacyBehavior href={`/posts/${post.id}`}>
            <a>
              <h2>{post.title}</h2>
              <p>{truncateBody(post.body)}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};
