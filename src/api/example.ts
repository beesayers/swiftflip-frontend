// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IExampleData } from "../lib/types";

interface IApiExampleRequest extends NextApiRequest {
  name: string;
}

export type IApiExampleResponseData = IExampleData[];

export default function handler(req: IApiExampleRequest, res: NextApiResponse<IApiExampleResponseData>): void {
  res.status(200).json([
    { example: "some data 1", example2: "some more data 1", example3: 1 },
    { example: "some data 2", example2: "some more data 2", example3: 2 },
  ]);
}
