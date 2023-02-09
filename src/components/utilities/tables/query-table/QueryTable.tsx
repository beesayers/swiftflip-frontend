import { useLayoutEffect, useRef, useState } from "react";

export interface IProduct {
  rowId: number;
  searchId: string | undefined;
  keywords: string | undefined;
  quantity: number | undefined;
  min: number | undefined;
  median: number | undefined;
  average: number | undefined;
  max: number | undefined;
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const QueryTable: React.FC<IProduct[]> = (initialProducts) => {
  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>(Object.values(initialProducts));

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    // handle event when user presses enter and input field is not empty
    const targetRowId = e.currentTarget.id;
    const keywords = e.currentTarget.value;
    const enterOrTab = e.key === "Enter" || e.key === "Tab";

    if (enterOrTab && keywords !== "") {
      alert("Search for: " + keywords + " on item " + targetRowId);
      updateProduct(targetRowId, keywords, 0, 0, 0, 0, 0);
    }
    console.log(products);
  };

  const updateProduct = (
    targetRowId: string,
    keywords: string,
    quantity: number,
    min: number,
    median: number,
    average: number,
    max: number
  ): void => {
    const updatedProducts = products.map((product) => {
      if (product.rowId.toString() === targetRowId) {
        return {
          ...product,
          searchId: Math.random().toString(36).substring(3, 8),
          keywords,
          quantity,
          min,
          median,
          average,
          max,
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="ml-0 text-xl font-semibold text-gray-900">Product Lookup</h1>
          <p className="mt-2 text-sm text-gray-700">
            Lookup products by detailed description, and get pricing information from Active Ebay Listings. <br />
            Make sure to save good deals you think you could flip for a profit!
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            + 1 line
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            + 5 lines
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            + 10 lines
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {selectedProducts.length > 0 && (
                <div className="absolute top-0 left-12 px-3 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-red-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Remove
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Save
                  </button>
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-300">
                    <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8 ">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th scope="col" className="min-w-[12rem] pl-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Product Description
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Quantity Returned
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Min $
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Median $
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Average $
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Max $
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {products.map((product) => (
                    <tr key={product.rowId} className={selectedProducts.includes(product) ? "bg-gray-50" : undefined}>
                      <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                        {selectedProducts.includes(product) && <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                          value={product.rowId}
                          checked={selectedProducts.includes(product)}
                          onChange={(e) => {
                            setSelectedProducts(
                              e.target.checked ? [...selectedProducts, product] : selectedProducts.filter((p) => p !== product)
                            );
                          }}
                        />
                      </td>
                      <td
                        className={classNames(
                          "whitespace-nowrap text-sm font-medium",
                          selectedProducts.includes(product) ? "text-indigo-600" : "text-gray-900"
                        )}
                      >
                        <input
                          type="text"
                          id={product.rowId.toString()}
                          className="w-full h-full m-0 pl-3 pr-0 text-sm border-gray-300 text-gray-500 focus:ring-indigo-500 rounded-md"
                          placeholder="detailed product description"
                          onKeyDown={handleKeyDown}
                        />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.quantity}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {product.min !== undefined ? `$${product.min.toLocaleString("en")}` : ""}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {product.median !== undefined ? `$${product.median.toLocaleString("en")}` : ""}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {product.average !== undefined ? `$${product.average.toLocaleString("en")}` : ""}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {product.max !== undefined ? `$${product.max.toLocaleString("en")}` : ""}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 space-x-3 text-sm">
                        <a href="#" className="text-red-600 hover:text-red-800">
                          {product.quantity !== undefined ? "Remove" : ""}
                          <span className="sr-only">, {product.rowId}</span>
                        </a>
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          {product.quantity !== undefined ? "Save" : ""}
                          <span className="sr-only">, {product.rowId}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryTable;
