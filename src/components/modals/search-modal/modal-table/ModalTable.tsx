import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";
import { IEbaySearchResult } from "../../../../lib/types";

export interface IModalTable {
  ebaySearchResults: IEbaySearchResult[];
  products: IEbaySearchResult[];
  setProducts: React.Dispatch<React.SetStateAction<IEbaySearchResult[]>>;
  selectedProducts: IEbaySearchResult[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<IEbaySearchResult[]>>;
  headers: string[];
}

const ModalTable: React.FC<IModalTable> = ({
  ebaySearchResults,
  products,
  setProducts,
  selectedProducts,
  setSelectedProducts,
  headers,
}) => {
  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [sort, setSort] = useState<"null" | "asc" | "desc">("null");
  const [sortHeader, setSortHeader] = useState<string>("null");

  useLayoutEffect(() => {
    const isIndeterminate = selectedProducts.length > 0 && selectedProducts.length < products.length;
    setChecked(selectedProducts.length === products.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current !== null) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedProducts, products.length]);

  const toggleAll = (): void => {
    setSelectedProducts(checked || indeterminate ? [] : products);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  };

  const sortTable = (e: React.MouseEvent): void => {
    const target = e.target as HTMLInputElement;
    const header = target.textContent;
    const tempSort = sort === "asc" ? "desc" : sort === "desc" ? "null" : "asc";
    if (header === sortHeader) {
      setSort(sort === "asc" ? "desc" : sort === "desc" ? "null" : "asc");
    } else {
      setSort("asc");
    }
    setSortHeader(header as string);
    const sortedProducts = [...products];

    if (tempSort === "asc") {
      sortedProducts.sort((a, b) => {
        if (header === "Title") {
          return a.title > b.title ? 1 : -1;
        } else if (header === "Listed On") {
          return a.listingInfo.startTime > b.listingInfo.startTime ? 1 : -1;
        } else if (header === "Type") {
          return a.listingInfo.listingType > b.listingInfo.listingType ? 1 : -1;
        } else if (header === "Price") {
          return a.sellingStatus.currentPrice.__value__ > b.sellingStatus.currentPrice.__value__ ? 1 : -1;
        } else if (header === "Shipping") {
          return a.shippingInfo.shippingServiceCost.__value__ > b.shippingInfo.shippingServiceCost.__value__ ? 1 : -1;
        } else if (header === "Total") {
          const aTotal = a.sellingStatus.currentPrice.__value__ + a.shippingInfo.shippingServiceCost.__value__;
          const bTotal = b.sellingStatus.currentPrice.__value__ + b.shippingInfo.shippingServiceCost.__value__;
          return aTotal > bTotal ? 1 : -1;
        } else return 1;
      });
      setProducts(sortedProducts);
    } else if (tempSort === "desc") {
      sortedProducts.sort((a, b) => {
        if (header === "Title") {
          return a.title < b.title ? 1 : -1;
        } else if (header === "Listed On") {
          return a.listingInfo.startTime < b.listingInfo.startTime ? 1 : -1;
        } else if (header === "Type") {
          return a.listingInfo.listingType < b.listingInfo.listingType ? 1 : -1;
        } else if (header === "Price") {
          return a.sellingStatus.currentPrice.__value__ < b.sellingStatus.currentPrice.__value__ ? 1 : -1;
        } else if (header === "Shipping") {
          return a.shippingInfo.shippingServiceCost.__value__ < b.shippingInfo.shippingServiceCost.__value__ ? 1 : -1;
        } else if (header === "Total") {
          const aTotal = a.sellingStatus.currentPrice.__value__ + a.shippingInfo.shippingServiceCost.__value__;
          const bTotal = b.sellingStatus.currentPrice.__value__ + b.shippingInfo.shippingServiceCost.__value__;
          return aTotal < bTotal ? 1 : -1;
        } else return 1;
      });
      setProducts(sortedProducts);
    } else if (tempSort === "null") {
      setProducts(ebaySearchResults);
    }
  };

  return (
    <div>
      <div className="hidden sm:block">
        <div className="inline-block min-w-full border-b border-gray-200 align-middle">
          <table className="min-w-full">
            <thead className="sticky top-0 z-10">
              <tr className="border-y border-gray-200 bg-gray-50">
                <th className="px-4 text-left" scope="col">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    ref={checkbox}
                    checked={checked}
                    onChange={toggleAll}
                  />
                </th>
                <th className="px-2 text-left text-sm font-semibold text-gray-900" scope="col" />
                {/* 
                              Sortable table headers 
                            */}
                {headers.map((header, index) => (
                  <th key={header} className="px-2 py-3 text-left text-sm font-semibold text-gray-900 flex-nowrap" scope="col">
                    <button
                      onClick={(e) => {
                        sortTable(e);
                      }}
                    >
                      {header}
                      {sortHeader === header && sort === "desc" && <ChevronUpIcon className="h-5 w-6 " />}
                      {sortHeader === header && sort === "asc" && <ChevronDownIcon className="h-5 w-6 " />}
                    </button>
                  </th>
                ))}
                <th className="pr-6 text-right text-sm font-semibold text-gray-900" scope="col" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {products.map((product) => (
                <tr key={product._id} className={selectedProducts.includes(product) ? "bg-gray-50" : undefined}>
                  <td className="relative text-center">
                    {selectedProducts.includes(product) && <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />}
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      value={product._id}
                      checked={selectedProducts.includes(product)}
                      onChange={(e) => {
                        setSelectedProducts(
                          e.target.checked ? [...selectedProducts, product] : selectedProducts.filter((p) => p !== product)
                        );
                      }}
                    />
                  </td>
                  <td>
                    <div className="pr-2 py-1">
                      <a href={product.viewItemURL} target="_blank" rel="noopener noreferrer">
                        <Image
                          key={product.itemId}
                          className="rounded-sm"
                          src={product.galleryURL.replace("140.jpg", "1000.jpg")}
                          alt="gallery URL"
                          width={100}
                          height={100}
                        />
                      </a>
                    </div>
                  </td>
                  <td className="px-2 py-3 text-sm text-gray-900 max-w-[420px]">
                    <div className="flex flex-col">
                      <a href={product.viewItemURL} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                        {product.title}
                      </a>
                      <span className="font-normal text-gray-500">{product.primaryCategory.categoryName}</span>
                    </div>
                  </td>
                  <td className="px-2 py-3 text-sm text-gray-900 min-w-[105px]">
                    {new Date(product.listingInfo.startTime).toLocaleDateString("en-US", {
                      month: "2-digit",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-2 py-3 text-sm  text-gray-900 min-w-[95px]">{product.listingInfo.listingType}</td>
                  <td className="px-2 py-3 text-sm  text-gray-900 min-w-[90px]">
                    {product.sellingStatus.currentPrice.__value__.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td className="px-2 py-3 text-sm  text-gray-900 min-w-[100px]">
                    {product.shippingInfo.shippingServiceCost.__value__.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </td>

                  <td className="px-2 py-3 text-sm  text-gray-900 min-w-[90px]">
                    {(product.sellingStatus.currentPrice.__value__ + product.shippingInfo.shippingServiceCost.__value__).toLocaleString(
                      "en-US",
                      {
                        style: "currency",
                        currency: "USD",
                      }
                    )}
                  </td>
                  <td className=" px-2 py-3 text-right text-sm ">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pt-2 text-center opacity-75">
        <button
          type="button"
          className={
            "rounded-md border border-transparent p-1.5 text-white shadow-sm " +
            (selectedProducts.length === 0
              ? "bg-gray-300"
              : "bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2")
          }
          disabled={selectedProducts.length === 0}
        >
          Remove Selected Products
        </button>
      </div>
    </div>
  );
};

export default ModalTable;
