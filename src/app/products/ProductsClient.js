"use client";

import { useState, useEffect } from "react";

export default function ProductsClient({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    let timeoutId;

    timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex items-center justify-items-center flex-col">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-md w-96 text-black mb-8"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <a
              key={product.id}
              href={`/details/${product.id}`}
              className="p-4 border rounded-md shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
            </a>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}
