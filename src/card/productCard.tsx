import React from "react";
import Image from "next/image";
import { IProduct } from "@/data/prod";

const ProductCard = ({ product }: { product: IProduct }) => {
  console.log(product);
  return (
    <div className="flex flex-col items-center max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="relative w-40 h-40 p-4">
        <Image src={product.image} alt={product.name} fill />
      </div>
      <div className="p-5">
        <h5 className="mt-4 text-center font-bold text-2xl">{product.name}</h5>
        <p className="text-center">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
