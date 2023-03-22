import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import React, { Fragment, useState } from "react";
import { IEbaySearchResult } from "../../../lib/types";
import ModalGraph from "./modal-graph/ModalGraph";
import ModalTable from "./modal-table/ModalTable";

export interface ISearchModal {
  ebaySearchResults: IEbaySearchResult[];
  isOpen: boolean;
  handleClose: () => void;
}

const SearchModal: React.FC<ISearchModal> = ({ ebaySearchResults, isOpen, handleClose }) => {
  const [products, setProducts] = useState<IEbaySearchResult[]>(ebaySearchResults);
  const [selectedProducts, setSelectedProducts] = useState<IEbaySearchResult[]>([]);
  const headers = ["Title", "Listed On", "Type", "Price", "Shipping", "Total"];

  if (!isOpen) return null;

  return (
    <div className="min-h-full">
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition>

          <div className="fixed inset-0 z-10">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform rounded-lg bg-white px-2 pb-2 text-left shadow-xl transition-all max-h-[85vh] max-w-6xl overflow-y-auto">
                  <div className="my-2 text-right">
                    <button
                      type="button"
                      className="rounded-md border border-transparent p-1.5 bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={handleClose}
                    >
                      <XMarkIcon className="h-5 w-6 align-middle" />
                    </button>
                  </div>
                  <ModalGraph data={products.map((product) => product.sellingStatus.currentPrice.__value__)} />
                  <ModalTable
                    ebaySearchResults={ebaySearchResults}
                    products={products}
                    setProducts={setProducts}
                    selectedProducts={selectedProducts}
                    setSelectedProducts={setSelectedProducts}
                    headers={headers}
                  />
                </Dialog.Panel>
              </Transition>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default SearchModal;
