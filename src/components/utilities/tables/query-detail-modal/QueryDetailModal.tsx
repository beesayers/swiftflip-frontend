import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment } from "react";
import { IEbaySearchResult } from "../../../../lib/types";

export interface IQueryDetailModal {
  ebaySearchResults: IEbaySearchResult[];
  isOpen: boolean;
  handleClose: () => void;
}

const QueryDetailModal: React.FC<IQueryDetailModal> = ({ ebaySearchResults, isOpen, handleClose }) => {
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
                <Dialog.Panel className="relative transform rounded-lg bg-white px-4 pt-2 pb-4 text-left shadow-xl transition-all max-h-[85vh] max-w-6xl overflow-y-auto">
                  <div className="mt-8 hidden sm:block ">
                    <div className="inline-block min-w-full border-b border-gray-200 align-middle">
                      <table className="min-w-full">
                        <thead>
                          <tr className="border-t border-gray-200">
                            <th
                              className="border-b border-gray-200 bg-gray-50 px-6 text-left text-sm font-semibold text-gray-900"
                              scope="col"
                            />
                            <th
                              className="border-b border-gray-200 bg-gray-50 px-2 py-3 text-left text-sm font-semibold text-gray-900"
                              scope="col"
                            >
                              Title
                            </th>
                            <th
                              className="border-b border-gray-200 bg-gray-50 px-2 text-left text-sm font-semibold text-gray-900"
                              scope="col"
                            >
                              Price
                            </th>
                            <th
                              className="border-b border-gray-200 bg-gray-50 px-2 text-left text-sm font-semibold text-gray-900"
                              scope="col"
                            >
                              Posted
                            </th>
                            <th
                              className="border-b border-gray-200 bg-gray-50 pr-6 text-right text-sm font-semibold text-gray-900"
                              scope="col"
                            />
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                          {ebaySearchResults.map((result) => (
                            <tr key={result._id}>
                              <td>
                                <div className="px-2 py-1">
                                  <a href={result.viewItemURL} target="_blank" rel="noopener noreferrer">
                                    <Image
                                      key={result.itemId}
                                      className="rounded-sm"
                                      src={result.galleryURL.replace("140.jpg", "1000.jpg")}
                                      alt="gallery URL"
                                      width={100}
                                      height={100}
                                    />
                                  </a>
                                </div>
                              </td>
                              <td className="px-2 py-3 text-sm  text-gray-900">
                                <div className="flex flex-col">
                                  <a href={result.viewItemURL} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                                    {result.title}
                                  </a>
                                  <span className="font-normal text-gray-500">{result.primaryCategory.categoryName}</span>
                                </div>
                              </td>
                              <td className="px-2 py-3 text-sm  text-gray-900">
                                {result.sellingStatus.currentPrice.__value__.toLocaleString("en-US", {
                                  style: "currency",
                                  currency: "USD",
                                })}
                              </td>
                              <td className="hidden  px-2 py-3 text-sm text-gray-900 md:table-cell">
                                {new Date(result.listingInfo.startTime)
                                  .toLocaleDateString("en-US", {
                                    month: "2-digit",
                                    day: "2-digit",
                                    year: "numeric",
                                  })
                                  .replace(/\//g, "-")}
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
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                      onClick={handleClose}
                    >
                      Go back to query table
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default QueryDetailModal;
