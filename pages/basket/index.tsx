// @ts-nocheck
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

export default function Basket({}: Props) {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div>
      Basket
      <br />
      {JSON.stringify(cartItems)}
      {cartItems.map((item) => {
        return (
          <div key={item._id} className="bg-green-600 flex my-3 mx-2">
            <Image
              src={item.img.image}
              alt={item.img.alt}
              className="w-10"
              width={40}
              height={60}
            />
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
