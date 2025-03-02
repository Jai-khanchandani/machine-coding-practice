"use client";

import { useEffect, useState } from "react";

export default function UserProfile({ params }) {
  const userId = Number(params.userId);
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const userRes = await fetch(`https://dummyjson.com/users/${userId}`);
        if (!userRes.ok) throw new Error("Failed to fetch user");
        const userData = await userRes.json();
        setUser(userData);

        const postsRes = await fetch(
          `https://dummyjson.com/users/${userId}/posts`
        );
        console.log(`https://dummyjson.com/users/${userId}/posts`);
        if (!postsRes.ok) throw new Error("Failed to fecth posts");
        const postsData = await postsRes.json();
        setPosts(postsData.posts);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>
          {user?.firstName} {user?.lastName}
        </p>
      )}
      <ul>
        {posts?.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}
