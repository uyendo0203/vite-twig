// filepath: /Users/zen/ZenWorks/Projects/vite-twig/react/blog-ssg.jsx
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/main.scss';

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
}

function Posts({ posts }) {
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <ul>
        {posts.slice(0, 20).map((post) => (
          <li key={post.id}>
            <a href={`/posts/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(data => setPosts(data));
  }, []);

  return <Posts posts={posts} />;
}

const rootElement = document.getElementById('blogSsg');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}