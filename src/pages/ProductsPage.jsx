import React from "react";
import { useLoaderData } from "react-router";

export default function ProductsPage() {
  const { products } = useLoaderData();

  return (
    <div>
      ProductsPage
      <img src="https://fastly.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60" />
      <hr />
      <ul>
        {products.map((product) => (
          <li>
            {product.id}: {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
