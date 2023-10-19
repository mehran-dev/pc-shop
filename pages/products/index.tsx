import ProductCart from "@/components/product-cart";
import React from "react";

type Props = { products: any };

export default function Products({ products }: Props) {
  return (
    <div>
      {" "}
      <h1 className="text-center font-semibold py-2 text-sky-800 text-2xl">
        List of products{" "}
      </h1>
      {products.map((product: any) => {
        return <ProductCart key={product.id} product={product} />;
      })}
    </div>
  );
}

export const getServerSideProps = async () => {
  let products = [];

  const data = await fetch(`${process.env.NEXT_BASE_URL}/api/products`);
  console.log("data", data);

  products = await data.json();
  console.log("products ", products);

  return {
    props: {
      products: products,
    },
  };
};
