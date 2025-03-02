// This is the server side component for initial fetch

import UserList from "./UserList";

export default async function UsersPage() {
  const res = await fetch("https://dummyjson.com/users?limit=6&skip=0", {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Error fetching users. Please try again later.</div>;
  }
  const data = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <UserList initialUsers={data.users} />
    </div>
  );
}
