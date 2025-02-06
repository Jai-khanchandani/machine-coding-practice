"use client";
import { useState, useEffect } from "react";

export default function UserProfile({ user, posts }) {
  const [clientPosts, setClientPosts] = useState(posts || []);

  if (!user) return <p className="text-red-500">User not found.</p>;

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold">
        {user.firstName} {user.lastName}
      </h1>
      <p className="text-gray-600">{user.email}</p>

      <h2 className="mt-4 text-xl font-semibold">User's Posts</h2>
      {clientPosts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul className="mt-2 space-y-2">
          {clientPosts.map((post) => (
            <li key={post.id} className="p-3 border rounded shadow">
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
