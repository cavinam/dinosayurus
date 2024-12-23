import React from "react";
import ProductCard from "@/card/productCard";
import { products } from "@/data/prod";

const ProductPage = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-green-200 to-green-700 bg-cover bg-center h-full"
      id="product"
    >
      <div className="container mx-auto py-16 max-w-7xl justify-center">
        <h1 className="text-5xl font-bold text-center">DinoProd</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto my-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
