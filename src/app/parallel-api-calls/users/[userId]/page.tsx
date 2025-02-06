import UserProfile from "@/app/components/parallel-api-calls/UserProfile";

async function getUserData(userId: string) {
  try {
    const [userRes, postsRes] = await Promise.all([
      fetch(`https://dummyjson.com/users/${userId}`),
      fetch(`https://dummyjson.com/users/${userId}/posts`),
    ]);

    if (!userRes.ok || !postsRes.ok) throw new Error("Failed to fetch data");

    const [user, posts] = await Promise.all([userRes.json(), postsRes.json()]);

    return { user, posts: posts.posts }; // API returns posts inside "posts" key
  } catch (error) {
    console.error("Error fetching user data:", error);
    return { user: null, posts: [] };
  }
}

export default async function UserPage({
  params,
}: {
  params: { userId: string };
}) {
  const { user, posts } = await getUserData(params.userId);

  return <UserProfile user={user} posts={posts} />;
}
