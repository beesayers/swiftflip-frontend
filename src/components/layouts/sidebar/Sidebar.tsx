// components/sidebar/Sidebar.tsx
import { Dialog, Transition } from "@headlessui/react";
import { ArrowLeftOnRectangleIcon, Bars3Icon, HomeIcon, UsersIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import ThemeToggle from "../../buttons/theme/ThemeToggle";

export interface ISidebar {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  { name: "Search", href: "/search", icon: UsersIcon, current: false },
  { name: "Sign In", href: "/signin", icon: ArrowLeftOnRectangleIcon, current: false },
];

const collections = [{ id: 1, name: "Inventory", href: "#", initial: "I", current: false }];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const Sidebar: React.FC<ISidebar> = ({ darkMode, toggleDarkMode }) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Update the `current` property based on the active route
  const updatedNavigation = navigation.map((item) => ({
    ...item,
    current: item.href === router.pathname,
  }));

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden " onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 " />
            </Transition.Child>

            <div className="fixed inset-0 flex ">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-64">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => {
                          setSidebarOpen(false);
                        }}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Secondary, flyout sidebar for smaller screen 
                  THIS IS THE MOTHAFUCKIN PROBLEM CHILD WITH THE COLOR OF THE SIDEBAR */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-2 ring-1 ring-white/10 bg-indigo-600">
                    <div className="flex h-16 shrink-0 items-center">
                      <Image className="h-8 w-auto" width={32} height={32} src="logo/transparent_white_nopro.svg" alt="Company logo" />
                    </div>
                    {/* Navbar for sidebar layout */}
                    <nav className="flex flex-1 flex-col justify-between">
                      <div>
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                          <li>
                            <ul role="list" className="-mx-2 space-y-1">
                              {updatedNavigation.map((item) => (
                                <li key={item.name}>
                                  <Link
                                    href={item.href}
                                    className={classNames(
                                      item.current
                                        ? "button-bg-active-theme button-text-active-theme"
                                        : "button-bg-dormant-theme button-text-dormant-theme",
                                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                    )}
                                  >
                                    <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li>
                            <div className="text-xs font-semibold leading-6 button-text-dormant-theme">Saved Collections</div>
                            <ul role="list" className="-mx-2 mt-2 space-y-1">
                              {collections.map((collection) => (
                                <li key={collection.name}>
                                  <a
                                    href={collection.href}
                                    className={classNames(
                                      collection.current
                                        ? "button-bg-active-theme button-text-active-theme"
                                        : "button-bg-dormant-theme button-text-dormant-theme",
                                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                    )}
                                  >
                                    <span
                                      className={classNames(
                                        collection.current
                                          ? "button-bg-active-theme button-text-active-theme"
                                          : "button-bg-dormant-theme button-text-dormant-theme",
                                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium "
                                      )}
                                    >
                                      {collection.initial}
                                    </span>
                                    <span className="truncate">{collection.name}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul role="contentinfo" className="flex flex-col gap-y-2">
                          <li className="-mx-6 mt-auto px-5 pb-2">
                            {/* Dark mode toggle button */}
                            <ThemeToggle
                              darkMode={darkMode}
                              toggleDarkMode={toggleDarkMode}
                              textClasses="text-sm font-semibold leading-6 text-white"
                            />
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
          {/* Primary, static sidebar for desktop screen */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-theme text-theme px-6">
            <div className="flex h-16 shrink-0 items-center">
              <Image className="h-8 w-auto" width={32} height={32} src="logo/transparent_white_nopro.svg" alt="Company logo" />
            </div>
            {/* Navbar for sidebar layout */}
            <nav className="flex flex-1 flex-col justify-between">
              <div>
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {updatedNavigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "button-bg-active-theme button-text-active-theme"
                                : "button-bg-dormant-theme button-text-dormant-theme",
                              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                            )}
                          >
                            <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <div className="text-xs font-semibold leading-6 button-text-dormant-theme">Saved Collections</div>
                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                      {collections.map((collection) => (
                        <li key={collection.name}>
                          <a
                            href={collection.href}
                            className={classNames(
                              collection.current
                                ? "button-bg-active-theme button-text-active-theme"
                                : "button-bg-dormant-theme button-text-dormant-theme",
                              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                            )}
                          >
                            <span
                              className={classNames(
                                collection.current
                                  ? "button-bg-active-theme button-text-active-theme"
                                  : "button-bg-dormant-theme button-text-dormant-theme",
                                "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium "
                              )}
                            >
                              {collection.initial}
                            </span>
                            <span className="truncate">{collection.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <ul role="contentinfo" className="flex flex-col gap-y-2">
                  <li className="-mx-6 mt-auto px-5">
                    {/* Dark mode toggle button */}
                    <ThemeToggle
                      darkMode={darkMode}
                      toggleDarkMode={toggleDarkMode}
                      textClasses="text-sm font-semibold leading-6 text-white"
                    />
                  </li>
                  <li className="-mx-6 mt-auto">
                    <a
                      href="#"
                      className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white button-bg-dormant-theme"
                    >
                      <img
                        className="h-8 w-8 rounded-full bg-gray-800"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className="sr-only">Your profile</span>
                      <span aria-hidden="true">Tom Cook</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-theme text-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 lg:hidden"
            onClick={() => {
              setSidebarOpen(true);
            }}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 ">Dashboard</div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>

        {/* 
        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">YOUR CONTENT GOES HERE</div>
        </main> */}
      </div>
    </>
  );
};

export default Sidebar;
