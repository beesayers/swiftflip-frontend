// Use this for mocking examples of this component

import { IProducts } from "./QueryTable";

const base: IProducts = {
  products: [
    {
      keywords: "iPhone 13 Pro Max 128gb",
      roiTarget: 2.0,
      resultCount: 97,
      min: 452,
      median: 523,
      average: 547,
      max: 679,
    },
    {
      keywords: "Charizard Generation 1 Mint Graded 10",
      roiTarget: 2.0,
      resultCount: 9,
      min: 32000,
      median: 63000,
      average: 76123,
      max: 196213,
    },
  ],
};

export const mockQueryTableProps = {
  base,
};
