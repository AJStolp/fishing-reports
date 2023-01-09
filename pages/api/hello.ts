// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  response: string;
};

type RequestData = {
  email: string;
  phoneNumber: number;
  userName: string;
  reportText: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({
    response: "Thanks for your report!",
  });
  console.log("response");
}
