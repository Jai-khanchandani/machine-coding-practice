export default async function ProductDetails({ params }) {
  const { id } = params;
  console.log("Params ID:", id);

  const res = await fetch(`https://dummyjson.com/products/2`, {
    cache: "no-store",
  });

  console.log(
    "Fetching product details:",
    `https://dummyjson.com/products/${id}`
  );
  console.log("Response status:", res.status);
  if (!res.ok) {
    console.error(`Error fetching product ${id}:`, res.status, res.statusText);
    return <div>Product not found</div>;
  }
  const product = await res.json();

  console.log({ product });

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}
