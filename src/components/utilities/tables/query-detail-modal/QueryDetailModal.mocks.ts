// Use this for mocking examples of this component

import { IQueryDetailModal } from "./QueryDetailModal";

const base: IQueryDetailModal = {
  ebaySearchResults: [
    {
      itemId: "204236636211",
      title: "MEW VMAX 269/264 Alternate Art Secret Rare Pokémon Fusion Strike",
      globalId: "EBAY-US",
      primaryCategory: {
        categoryId: "183454",
        categoryName: "CCG Individual Cards",
      },
      galleryURL: "https://i.ebayimg.com/thumbs/images/g/4m8AAOSwexJj4qZx/s-l140.jpg",
      viewItemURL: "https://www.ebay.com/itm/MEW-VMAX-269-264-Alternate-Art-Secret-Rare-Pokemon-Fusion-Strike-/204236636211",
      autoPay: false,
      postalCode: "640**",
      location: "Liberty,MO,USA",
      country: "US",
      shippingInfo: {
        shippingServiceCost: {
          "@currencyId": "USD",
          __value__: 3.8,
        },
        shippingType: "Flat",
        shipToLocations: "Worldwide",
        expeditedShipping: false,
        oneDayShippingAvailable: false,
        handlingTime: 2,
      },
      sellingStatus: {
        currentPrice: {
          "@currencyId": "USD",
          __value__: 84.99,
        },
        convertedCurrentPrice: {
          "@currencyId": "USD",
          __value__: 84.99,
        },
        sellingState: "Active",
        timeLeft: "P17DT22H13M8S",
      },
      listingInfo: {
        bestOfferEnabled: true,
        buyItNowAvailable: false,
        startTime: new Date("2023-02-07T19:29:39.000Z"),
        endTime: new Date(1678217379000),
        listingType: "FixedPrice",
        gift: false,
        watchCount: 3,
      },
      returnsAccepted: false,
      condition: {
        conditionId: "3000",
        conditionDisplayName: "Used",
      },
      isMultiVariationListing: false,
      topRatedListing: false,
      _id: "63efeeaf5553ea285bc6af2d",
      createdAt: new Date(1676668591769),
      updatedAt: new Date(1676668591769),
      __v: 1,
    },
    {
      itemId: "185739197843",
      title: "Mew VMAX Alternate Art Secret Rare - 269/264 Fusion Strike - Pokemon TCG Mint/NM",
      globalId: "EBAY-US",
      primaryCategory: {
        categoryId: "183454",
        categoryName: "CCG Individual Cards",
      },
      galleryURL: "https://i.ebayimg.com/thumbs/images/g/vH8AAOSw5v5jxGkA/s-l140.jpg",
      viewItemURL: "https://www.ebay.com/itm/Mew-VMAX-Alternate-Art-Secret-Rare-269-264-Fusion-Strike-Pokemon-TCG-Mint-NM-/185739197843",
      autoPay: true,
      postalCode: "080**",
      location: "Swedesboro,NJ,USA",
      country: "US",
      shippingInfo: {
        shippingServiceCost: {
          "@currencyId": "USD",
          __value__: 0,
        },
        shippingType: "Free",
        shipToLocations: "Worldwide",
        expeditedShipping: true,
        oneDayShippingAvailable: false,
        handlingTime: 1,
      },
      sellingStatus: {
        currentPrice: {
          "@currencyId": "USD",
          __value__: 150,
        },
        convertedCurrentPrice: {
          "@currencyId": "USD",
          __value__: 150,
        },
        sellingState: "Active",
        timeLeft: "P25DT22H42M43S",
      },
      listingInfo: {
        bestOfferEnabled: false,
        buyItNowAvailable: false,
        startTime: new Date(1673816354000),
        endTime: new Date(1678910354000),
        listingType: "FixedPrice",
        gift: false,
        watchCount: 4,
      },
      returnsAccepted: true,
      condition: {
        conditionId: "3000",
        conditionDisplayName: "Used",
      },
      isMultiVariationListing: false,
      topRatedListing: true,
      _id: "63efeeaf5553ea285bc6af2e",
      createdAt: new Date(1676668591769),
      updatedAt: new Date(1676668591769),
      __v: 1,
    },
    {
      itemId: "155321178586",
      title: "Mew VMAX 269/264 Alternate Art Secret Rare Fusion Strike Set Pokemon TCG Card",
      globalId: "EBAY-US",
      primaryCategory: {
        categoryId: "183454",
        categoryName: "CCG Individual Cards",
      },
      galleryURL: "https://i.ebayimg.com/thumbs/images/g/fLsAAOSw~bZjo4Lu/s-l140.jpg",
      viewItemURL: "https://www.ebay.com/itm/Mew-VMAX-269-264-Alternate-Art-Secret-Rare-Fusion-Strike-Set-Pokemon-TCG-Card-/155321178586",
      autoPay: true,
      postalCode: "563**",
      location: "Saint Cloud,MN,USA",
      country: "US",
      shippingInfo: {
        shippingServiceCost: {
          "@currencyId": "USD",
          __value__: 0,
        },
        shippingType: "Free",
        shipToLocations: "Worldwide",
        expeditedShipping: false,
        oneDayShippingAvailable: false,
        handlingTime: 2,
      },
      sellingStatus: {
        currentPrice: {
          "@currencyId": "USD",
          __value__: 99.99,
        },
        convertedCurrentPrice: {
          "@currencyId": "USD",
          __value__: 99.99,
        },
        sellingState: "Active",
        timeLeft: "P4DT0H48M38S",
      },
      listingInfo: {
        bestOfferEnabled: true,
        buyItNowAvailable: false,
        startTime: new Date(1671660309000),
        endTime: new Date(1677017109000),
        listingType: "FixedPrice",
        gift: false,
        watchCount: 1,
      },
      returnsAccepted: false,
      condition: {
        conditionId: "3000",
        conditionDisplayName: "Used",
      },
      isMultiVariationListing: false,
      topRatedListing: false,
      _id: "63efeeaf5553ea285bc6af2f",
      createdAt: new Date(1676668591769),
      updatedAt: new Date(1676668591769),
      __v: 1,
    },
  ],
  isOpen: true,
  handleClose: () => {},
};

export const mockQueryDetailModalProps = {
  base,
};
