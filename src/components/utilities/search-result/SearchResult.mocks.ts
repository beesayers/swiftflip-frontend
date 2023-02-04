// Use this for mocking examples of this component

import { ISearchResult } from "./SearchResult";

const base: ISearchResult = {
  cost: 50,
  roi: 2.0,
  resultCount: 20,
  minPrice: 100,
  maxPrice: 200,
  avgPrice: 150,
  medPrice: 140,
};

export const mockSearchResultProps = {
  base,
};
