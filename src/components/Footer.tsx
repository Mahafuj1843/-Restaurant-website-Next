'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>
      <footer className="bg-white mx-4 sm:mx-8 md:mx-22 lg:mx-32">
        <div className="w-full py-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-8 lg:gap-y-0 lg:gap-x-3">
            <div className='lg:col-span-2 flex flex-col items-center lg:items-start gap-y-3'>
              <Image className="w-24 sm:w-28" src="/logo.png" width={100} height={100} alt='logo img' />

              <p className="max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>

              <nav className="flex gap-4 md:place-self-left md:justify-self-end">
                <Link href='/' className='group p-2.5 rounded-md bg-primary -rotate-[10deg] md:hover:rotate-0 transition-all duration-300'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </Link>
                <Link href='/' className='group p-2.5 rounded-md bg-primary -rotate-[10deg] md:hover:rotate-0 transition-all duration-300'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </Link>
                <Link href='/' className='group p-2.5 rounded-md bg-primary -rotate-[10deg] md:hover:rotate-0 transition-all duration-300'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </Link>
              </nav>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-lg font-medium text-gray-900">About Us</p>

              <nav aria-label="Footer About Nav" className="mt-3">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Company History
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Employee Handbook
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-lg font-medium text-gray-900">Helpful Links</p>

              <nav aria-label="Footer Helpful Nav" className="mt-3">
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className='flex justify-center lg:justify-start'>
                    <a className="flex gap-1.5" href="/"
                    >
                      <span className="text-gray-700 transition group-hover:text-gray-700/75">
                        Live Chat
                      </span>

                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-lg font-medium text-gray-900">Contact Us</p>

              <ul className="space-y-2 text-sm mt-3">
                <li>
                  <a
                    className="flex items-center justify-center lg:justify-start gap-1.5"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="text-gray-700">john@doe.com</span>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center justify-center lg:justify-start gap-1.5"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="text-gray-700">0123456789</span>
                  </a>
                </li>

                <li className="flex justify-center lg:justify-start gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address className="not-italic text-gray-700">
                    213 Lane, London, United Kingdom
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-6 lg:py-6 border-t">
          <div className="text-center  sm:justify-between sm:text-left ">
            <div className="text-sm flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center text-gray-500 ">
              <div >
                <p className="mt-4 text-sm text-gray-500 sm:order-first  sm:mt-0" style={{ margin: 0 }}>
                  Copyright © 2023 - All right reserved
                </p>
                <div>Created By Mahafuj Chowdhury</div>

              </div>
              <div className='h-[20px]'>
                <Image src='/payments.png' width={250} height={100} objectFit='contain' alt="payment img" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer
