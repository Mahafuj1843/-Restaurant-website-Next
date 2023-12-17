"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const Wishlist = () => {
    const [wishlist, setWishlist] = useState<number>(0)
    return (
        <div className="z-[9999] w-full h-full fixed top-0 right-0 hidden">
                <div className="h-full w-full opacity-30 bg-black absolute top-0 left-0"></div>
                <div className="absolute -right-[100] h-full w-[85%] md:w-[370px] bg-white transition-all duration-300">
                    <div className="h-full z-[1] relative">
                        <div className="flex flex-col w-full h-full items-middle bg-white rounded">
                            <div className="w-full flex justify-between items-center relative px-4 py-4 border-b bg-green-50 border-gray-100">
                                <h2 className="font-semibold font-serif text-lg m-0 flex items-center">
                                    <span className="text-xl mr-2 mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                    </span>Wishlist</h2>
                                <button className="inline-flex text-base items-center justify-center text-gray-500 focus:outline-none transition-opacity hover:text-red-400">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                                    </svg>
                                </button>
                            </div>
                            {
                                wishlist > 0 ?
                                <>
                                    <div className='h-full flex flex-col overflow-auto'>
                                        {
                                            [...Array(8)].map((item, i) => (
                                                <div key={i} className="w-full flex justify-start items-center bg-white py-3 px-4 border-b hover:bg-gray-50 transition-all border-gray-100 relative last:border-b-0">
                                                    <div className="relative flex rounded-full border border-gray-100 shadow-sm overflow-hidden flex-shrink-0 mr-4">
                                                        <Image src="/pizza1.png" width="50" height="50" alt="product Img" />
                                                    </div>
                                                    <div className="flex flex-col w-full overflow-hidden gap-y-1">
                                                        <a className="truncate text-sm font-semibold text-gray-700 text-heading line-clamp-1" href="/product/clementine">
                                                            Clementine
                                                        </a>
                                                        <span className="text-xs text-gray-400 mb-1">
                                                            Item Price $48.12
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col items-center justify-between gap-3">
                                                        <button className="text-primary hover:opacity-80 text-lg cursor-pointer">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16"> <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" /> <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                            </svg>
                                                        </button>
                                                        <button className="text-primary hover:opacity-80 text-lg cursor-pointer">
                                                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="mx-5 my-3 bottom-0">
                                            <button className="w-full py-3 px-3 rounded-lg bg-primary hover:opacity-90 gap-3 flex items-center justify-center bg-heading text-sm sm:text-base text-white focus:outline-none transition duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16"> <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" /> <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                </svg>
                                                <h3 className="text-center font-medium font-serif">
                                                    Add all to cart
                                                </h3>
                                            </button>
                                        </div>
                                </>
                                    :
                                    <div className="w-full overflow-auto h-full">
                                        <div className="flex flex-col h-full justify-center">
                                            <div className="flex flex-col items-center">
                                                <div className="flex justify-center items-center w-20 h-20 rounded-full bg-green-100">
                                                    <span className="text-primary text-4xl block">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart-off"><line x1="2" y1="2" x2="22" y2="22" /><path d="M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35" /><path d="M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17" /></svg>
                                                    </span>
                                                </div>
                                                <h3 className="font-serif font-semibold text-gray-700 text-lg pt-5">
                                                    Your wishlist is empty
                                                </h3>
                                                <p className="px-12 text-center text-sm text-gray-500 pt-2">
                                                    No items added in your wishlist. Please add product to your wishlist.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="drawer-handle">
                        <i className="drawer-handle-icon"></i>
                    </div>
                </div>
            </div>
        
    )
}

export default Wishlist