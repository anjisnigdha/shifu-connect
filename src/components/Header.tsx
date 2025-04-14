'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import ThemeToggle from './ThemeToggle';
import ShifuLogo from './ShifuLogo';

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Ideaboard', href: '/dashboard/ideaboard' },
  { name: 'Roadmap', href: '/dashboard/roadmap' },
  { name: 'Resources', href: '/dashboard/resources' },
  { name: 'Connect', href: '/dashboard/connect' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-white shadow dark:bg-shifu-dark border-b dark:border-shifu-table-border transition-colors duration-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <ShifuLogo />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href || 
                                    (item.href !== '/dashboard' && pathname?.startsWith(item.href));
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                          isActive
                            ? 'border-b-2 border-shifu-orange text-gray-900 dark:text-white'
                            : 'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white'
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                <ThemeToggle />
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white dark:bg-shifu-brown text-sm focus:outline-none focus:ring-2 focus:ring-shifu-accent focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <div className="h-8 w-8 rounded-full bg-shifu-orange flex items-center justify-center">
                        <span className="text-xs font-medium text-white">JS</span>
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-shifu-brown">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/profile"
                            className={`${
                              active ? 'bg-gray-100 dark:bg-shifu-table-row' : ''
                            } block px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/settings"
                            className={`${
                              active ? 'bg-gray-100 dark:bg-shifu-table-row' : ''
                            } block px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`${
                              active ? 'bg-gray-100 dark:bg-shifu-table-row' : ''
                            } block px-4 py-2 text-sm text-gray-700 dark:text-gray-200`}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <ThemeToggle />
                <Disclosure.Button className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-shifu-orange dark:hover:bg-shifu-brown dark:hover:text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href || 
                                (item.href !== '/dashboard' && pathname?.startsWith(item.href));
                return (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    href={item.href}
                    className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
                      isActive
                        ? 'border-shifu-orange bg-shifu-table-header/20 text-shifu-orange dark:text-shifu-accent'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-shifu-table-header/30 dark:hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Disclosure.Button>
                );
              })}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4 dark:border-shifu-table-border">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-shifu-orange flex items-center justify-center">
                    <span className="text-sm font-medium text-white">JS</span>
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800 dark:text-white">John Smith</div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">john@example.com</div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as={Link}
                  href="/profile"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-shifu-table-header/30 dark:hover:text-white"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as={Link}
                  href="/settings"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-shifu-table-header/30 dark:hover:text-white"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-shifu-table-header/30 dark:hover:text-white"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
} 