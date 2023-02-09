// Use this for mocking examples of this component

import { IProduct } from "./QueryTable";

const base: IProduct[] = [
  {
    rowId: 0,
    searchId: undefined,
    keywords: undefined,
    quantity: undefined,
    min: undefined,
    median: undefined,
    average: undefined,
    max: undefined,
  },
  {
    rowId: 1,
    searchId: undefined,
    keywords: undefined,
    quantity: undefined,
    min: undefined,
    median: undefined,
    average: undefined,
    max: undefined,
  },
];

export const mockQueryTableProps = {
  base,
};
