// These can then be imported into other files and used as types like so:
// import { IExampleData } from '../lib/types';

export interface IExampleData {
  example: string;
  example2: string;
  example3: number;
}

export interface IEbaySearchResult {
  _id: string;
  itemId: string;
  title: string;
  globalId: string;
  primaryCategory: {
    categoryId: string;
    categoryName: string;
  };
  galleryURL: string;
  viewItemURL: string;
  autoPay: boolean;
  postalCode: string;
  location: string;
  country: string;
  shippingInfo: {
    shippingServiceCost: {
      "@currencyId": string;
      __value__: number;
    };
    shippingType: string;
    shipToLocations: string;
    expeditedShipping: boolean;
    oneDayShippingAvailable: boolean;
    handlingTime: number;
  };
  sellingStatus: {
    currentPrice: {
      "@currencyId": string;
      __value__: number;
    };
    convertedCurrentPrice: {
      "@currencyId": string;
      __value__: number;
    };
    sellingState: string;
    timeLeft: string;
  };
  listingInfo: {
    bestOfferEnabled: boolean;
    buyItNowAvailable: boolean;
    startTime: Date;
    endTime: Date;
    listingType: string;
    gift: boolean;
    watchCount: number;
  };
  returnsAccepted: boolean;
  condition: {
    conditionId: string;
    conditionDisplayName: string;
  };
  isMultiVariationListing: boolean;
  topRatedListing: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
