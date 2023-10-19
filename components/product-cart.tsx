import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

type Props = {
  product: {
    img: {
      image: any;
      alt: string;
    };
    description: string;
  };
};

export default function ProductCart({ product }: Props) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="w-72 min-h-[430px] bg-white rounded-md overflow-hidden flex flex-col">
      <Image
        className="w-full max-h-[190px]"
        src={product.img.image}
        alt={product.img.alt}
        width={"300"}
        height={"100"}
      />
      <div className="px-3 grow flex flex-col flex-wrap">
        <p className="text-gray-500  grow  mt-3"> {product.description}</p>
        <p className="flex justify-between mt-4 mb-5">
          <button
            className="bg-green-700 text-white px-3 py-1 rounded-md"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
          <button className=" bg-sky-500 text-white px-3 py-1 rounded-md ">
            Details
          </button>
        </p>
      </div>
    </div>
  );
}
