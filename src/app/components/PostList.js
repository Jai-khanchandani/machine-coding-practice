"use client";

import { useEffect, useState } from "react";

export default function PostList({ initialPosts }) {
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      {loading && <p className="text-center">Loading posts...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <ul className="border p-4 rounded shadow-md bg-white">
        {posts.map((post) => (
          <li key={post.id} className="p-2 border-b">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded w-full"
        onClick={fetchPosts}
      >
        Reload Posts
      </button>
    </div>
  );
}
