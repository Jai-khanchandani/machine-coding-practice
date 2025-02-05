"use client";

import { useEffect, useState } from "react";

export default function UserList({ initialUsers }) {
  const [users, setUsers] = useState(initialUsers);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (page !== 1) fetchUsers(page);
  }, [page]);

  const fetchUsers = async (pageNumber) => {
    try {
      setLoading(true);
      setError(null);
      const skip = (pageNumber - 1) * 6;

      const res = await fetch(
        `https://dummyjson.com/users?limit=6&skip=${skip}`
      );

      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data.users);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {loading && (
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Loading users...
        </p>
      )}
      {error && <p className="text-red-500 text-lg">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105"
          >
            <img
              src={user.image}
              alt={user.firstName}
              className="w-24 h-24 object-cover rounded-full mx-auto"
            />
            <h2 className="text-lg font-semibold mt-2">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-600 text-sm">{user.email}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50 hover:bg-blue-600 transition"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="text-lg font-semibold">{page}</span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
