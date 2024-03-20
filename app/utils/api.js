const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getAllPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`);
  const posts = await response.json();
  return posts;
};

export const getPostById = async id => {
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  const post = await response.json();
  return post;
};
