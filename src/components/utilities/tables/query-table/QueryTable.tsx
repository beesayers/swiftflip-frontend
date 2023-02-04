import { useLayoutEffect, useRef, useState } from "react";

export interface IProduct {
  keywords: string;
  roiTarget: number;
  resultCount: number;
  min: number;
  median: number;
  average: number;
  max: number;
}

export interface IProducts {
  products: IProduct[];
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const QueryTable: React.FC<IProducts> = ({ products }) => {
  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);

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
                <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Bulk save
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Delete all
                  </button>
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                      Product Description
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      ROI Target
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Result Qty
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
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Save</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {products.map((product) => (
                    <tr
                      key={product.keywords}
                      className={selectedProducts.includes(product) ? "bg-gray-50" : undefined}
                    >
                      <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                        {selectedProducts.includes(product) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                          value={product.keywords}
                          checked={selectedProducts.includes(product)}
                          onChange={(e) => {
                            setSelectedProducts(
                              e.target.checked
                                ? [...selectedProducts, product]
                                : selectedProducts.filter((p) => p !== product)
                            );
                          }}
                        />
                      </td>
                      <td
                        className={classNames(
                          "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                          selectedProducts.includes(product) ? "text-indigo-600" : "text-gray-900"
                        )}
                      >
                        {product.keywords}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.roiTarget}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.resultCount}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.min}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.median}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.average}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.max}</td>
                      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Save<span className="sr-only">, {product.keywords}</span>
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
