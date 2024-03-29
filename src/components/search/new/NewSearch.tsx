import { useEffect, useRef, useState } from "react";
import makeApiRequest from "../../../api/api";
import { IEbaySearchResult } from "../../../lib/types";
import SearchModal from "../../modals/search-modal/SearchModal";

export interface IProduct {
  rowId: number;
  searchId: string | undefined;
  keywords: string | undefined;
  ebaySearchResults: IEbaySearchResult[] | undefined;
  quantity: number | undefined;
  min: number | undefined;
  med: number | undefined;
  avg: number | undefined;
  max: number | undefined;
}

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const NewSearch: React.FC = () => {
  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);
  const [products, setProducts] = useState<IProduct[]>([
    {
      rowId: 0,
      searchId: undefined,
      keywords: undefined,
      ebaySearchResults: undefined,
      quantity: undefined,
      min: undefined,
      med: undefined,
      avg: undefined,
      max: undefined,
    },
  ]);
  const [modalProductList, setModalProductList] = useState<IEbaySearchResult[]>([]);

  useEffect(() => {
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

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>, rowId: number): Promise<void> => {
    // handle event when user presses enter and input field is not empty
    const targetRowId = e.currentTarget.id;
    const keywords = e.currentTarget.value;
    const enterOrTab = e.key === "Enter" || e.key === "Tab";

    if (enterOrTab && keywords !== "") {
      // API to search ebay and save results to database
      await executeSearch(targetRowId, keywords);

      // Set the focus on the input element of the next row
      if (rowId === products[products.length - 1].rowId) {
        // Add a new row
        addRows(1);
      }

      // Set a timeout to ensure the new row has been added to the DOM
      setTimeout(() => {
        // Query all input elements inside the table
        const nodeList = document.querySelectorAll("table input[type=text]");
        const currentId = rowId;
        // Get the ID of the subsequent node
        const nextNodeId = getNextNodeId(nodeList, currentId);
        if (nextNodeId !== null) {
          // Focus the subsequent node
          document.getElementById(nextNodeId.toString())?.focus();
        } else {
          console.log("No subsequent node found");
        }
      }, 0);
    }
  };

  const executeSearch = async (targetRowId: string, keywords: string): Promise<void> => {
    // create payload for API call
    const data = {
      keywords,
      condition: "3000",
      sortOrder: "BestMatch",
    };

    // call API
    const json = await makeApiRequest("search", "POST", data);

    // verify response
    if (json === undefined) {
      alert("Error: API call failed");
    } else if (json.ebaySearchResults === undefined) {
      alert("No results found");
    } else {
      console.log("Ebay search results returned: ", json.ebaySearchResults.length);
    }

    // update product
    updateProduct(
      targetRowId,
      keywords,
      json._id,
      json.ebaySearchResults,
      json.stats.quantity,
      json.stats.min,
      json.stats.med,
      json.stats.avg,
      json.stats.max
    );
  };

  const updateProduct = (
    targetRowId: string,
    keywords: string,
    searchId: string,
    ebaySearchResults: IEbaySearchResult[],
    quantity: number,
    min: number,
    med: number,
    avg: number,
    max: number
  ): void => {
    const updatedProducts = products.map((product) => {
      if (product.rowId.toString() === targetRowId) {
        return {
          ...product,
          keywords,
          searchId,
          ebaySearchResults,
          quantity,
          min,
          med,
          avg,
          max,
        };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const addRows = (numRows: number): void => {
    setProducts((products) => {
      const newProducts = [...products];
      if (newProducts.length === 0) {
        for (let i = 0; i < numRows; i++) {
          newProducts.push({
            rowId: i,
            searchId: undefined,
            keywords: undefined,
            ebaySearchResults: undefined,
            quantity: undefined,
            min: undefined,
            med: undefined,
            avg: undefined,
            max: undefined,
          });
        }
      } else if (newProducts.length > 0) {
        for (let i = 0; i < numRows; i++) {
          newProducts.push({
            rowId: products[products.length - 1].rowId + 1 + i,
            searchId: undefined,
            keywords: undefined,
            ebaySearchResults: undefined,
            quantity: undefined,
            min: undefined,
            med: undefined,
            avg: undefined,
            max: undefined,
          });
        }
      }
      return newProducts;
    });
  };

  const removeRow = (rowId: number): void => {
    setProducts((products) => {
      const newProducts = [...products];
      const index = newProducts.findIndex((product) => product.rowId === rowId);
      newProducts.splice(index, 1);
      return newProducts;
    });
    setSelectedProducts((selectedProducts) => {
      const newSelectedProducts = [...selectedProducts];
      const index = newSelectedProducts.findIndex((product) => product.rowId === rowId);
      newSelectedProducts.splice(index, 1);
      return newSelectedProducts;
    });
  };

  const removeRows = (): void => {
    setProducts((products) => {
      const newProducts = [...products];
      return newProducts.filter((newProduct) => {
        return !selectedProducts.includes(newProduct);
      });
    });
    setSelectedProducts([]);
  };

  const getNextNodeId = (nodeList: NodeListOf<Element>, currentId: number): number | null => {
    // Convert the NodeList to an array
    const nodeArray = Array.from(nodeList);

    // Find the index of the node with the given ID
    const currentIndex = nodeArray.findIndex((node) => parseInt(node.id) === currentId);

    // If the index is not the last one, return the ID of the subsequent node
    if (currentIndex !== -1 && currentIndex < nodeArray.length - 1) {
      return parseInt(nodeArray[currentIndex + 1].id);
    }

    // If the index is the last one or not found, return null
    return null;
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="ml-0 text-xl font-semibold text-gray-900">Product Lookup</h1>
          <p className="mt-2 text-sm text-gray-700">
            Search for products by description and get pricing information from Active Ebay Listings. <br />
            Save searches to your account.
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            {
              // This is the div for the main search table.
            }
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {selectedProducts.length > 0 && (
                <div className="absolute top-0 left-12 px-3 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-red-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                    onClick={removeRows}
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
              <div className="lg:pl-64">
                {modalOpen && (
                  <SearchModal
                    ebaySearchResults={modalProductList}
                    isOpen={modalOpen}
                    handleClose={() => {
                      setModalOpen(!modalOpen);
                    }}
                  ></SearchModal>
                )}
              </div>
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-300">
                    <th scope="col" className="relative w-0 px-6">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th scope="col" className="w-5/12 pl-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Product Description
                    </th>
                    <th scope="col" className="w-1/12 pl-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Results
                    </th>
                    <th scope="col" className="w-1/12 pl-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Min $
                    </th>
                    <th scope="col" className="w-1/12 pl-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Med $
                    </th>
                    <th scope="col" className="w-1/12 pl-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Avg $
                    </th>
                    <th scope="col" className="w-1/12 pl-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Max $
                    </th>
                    <th scope="col" className="w-2/12 pl-3 py-3.5 text-left text-sm font-semibold text-gray-900 ">
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
                          "whitespace-nowrap text-sm font-medium py-4",
                          selectedProducts.includes(product) ? "text-indigo-600" : "text-gray-900"
                        )}
                      >
                        <input
                          type="text"
                          id={product.rowId.toString()}
                          className="w-full h-full m-0 pl-3 pr-0 text-sm border-gray-300 text-gray-500 focus:ring-indigo-500 rounded-md"
                          placeholder="detailed product description"
                          // eslint-disable-next-line @typescript-eslint/no-misused-promises
                          onKeyDown={(e) => {
                            void handleKeyDown(e, product.rowId);
                          }}
                        />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {product.quantity === 0 ? "No Results Found" : product.quantity}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {product.min !== undefined ? `${product.min.toLocaleString("en-US", { style: "currency", currency: "USD" })}` : ""}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {product.med !== undefined ? `${product.med.toLocaleString("en-US", { style: "currency", currency: "USD" })}` : ""}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {product.avg !== undefined ? `${product.avg.toLocaleString("en-US", { style: "currency", currency: "USD" })}` : ""}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {product.max !== undefined ? `${product.max.toLocaleString("en-US", { style: "currency", currency: "USD" })}` : ""}
                      </td>
                      <td className="whitespace-nowrap pl-3 py-4 text-sm">
                        <div className={product.quantity !== undefined ? "space-x-1" : "hidden"}>
                          <button
                            className="inline-flex items-center rounded border border-gray-300 bg-blue-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                            onClick={() => {
                              setModalOpen(true);
                              setModalProductList(product.ebaySearchResults ?? []);
                            }}
                          >
                            Details
                          </button>
                          <button
                            className="inline-flex items-center rounded border border-gray-300 bg-red-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                            onClick={() => {
                              removeRow(product.rowId);
                            }}
                          >
                            Remove
                          </button>
                          <button className="inline-flex items-center rounded border border-gray-300 bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30">
                            Save
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-2 text-center space-x-3">
              <button
                type="button"
                className="items-center rounded-md border border-transparent bg-indigo-600 px-2 py-0.5 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => {
                  addRows(5);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSearch;
