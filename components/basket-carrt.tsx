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

export default function BasketCart({ product }: Props) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="w-72 min-h-[430px] bg-white rounded-md overflow-hidden flex flex-col mx-3 my-5">
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
          <div className="bg-gray-200 px-1 py-1 rounded-md flex">
            <button
              className="bg-green-700 text-white px-3 py-1 rounded-full"
              onClick={handleAddToCart}
            >
              -
            </button>
            <p className="w-9 text-center align-middle">5</p>
            <button
              className="bg-green-700 text-white px-3 py-1 rounded-full"
              onClick={handleAddToCart}
            >
              +
            </button>
          </div>
          <button className=" bg-red-500 text-white px-3 py-1 rounded-md ">
            remove
          </button>
        </p>
      </div>
    </div>
  );
}
