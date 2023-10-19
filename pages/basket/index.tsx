// @ts-nocheck
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
    </div>
  );
}
