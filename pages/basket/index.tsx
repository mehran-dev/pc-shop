// @ts-nocheck
import BasketCart from "@/components/basket-carrt";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

export default function Basket({}: Props) {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="flex justify-center items-center flex-wrap">
      {/* {JSON.stringify(cartItems)} */}
      {cartItems.map((item) => {
        return (
          <div className="">
            <BasketCart product={item} />

            {/* <div key={item._id} className="bg-green-600 flex my-3 mx-2">
              <Image
                src={item.img.image}
                alt={item.img.alt}
                className="w-10"
                width={40}
                height={60}
              />
              <p>{item.description}</p>
            </div> */}
          </div>
        );
      })}
    </div>
  );
}
