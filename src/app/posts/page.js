import PostList from "../components/PostList";

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const posts = await res.json();

  return (
    <div>
      <h1>Posts</h1>
      <PostList initialPosts={posts} />
    </div>
  );
}
