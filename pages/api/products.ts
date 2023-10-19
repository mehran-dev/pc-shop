import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      name: string;
    }
  | any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    {
      img: {
        alt: "lotrem episom ",
        image: "/images/1.png",
      },
      description: "lorem episom ",
      inStock: Math.floor(Math.random() * 200),
    },
  ]);
}
