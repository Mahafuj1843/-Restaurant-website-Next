"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useEffect, useRef, useState } from 'react'

const Navber = () => {
  const headerRef = useRef<any>();
  const [dropDown, setDropDown] = useState<boolean>(false)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const scrollup = () => {
    window.scrollY >= 70 ? headerRef.current.classList.add("shrink") : headerRef.current.classList.remove('shrink')
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollup)

    return () => {
      window.removeEventListener('scroll', scrollup);
    };
  }, [])

  return (
    <Fragment>
      <div ref={headerRef} className='z-[999] py-2 lg:py-3 transition-all duration-300 bg-white w-full'>
        <div className='flex items-center justify-between mx-4 sm:mx-8 md:mx-22 lg:mx-32'>
          <Link href="#" className='text-primary font-semibold text-3xl'>
            <Image className="w-24 sm:w-28" src="/logo.png" width={100} height={100} alt='logo img' />
          </Link>
          <nav className='hidden md:flex items-center'>
            <ul className='flex items-center gap-4 font-semibold'>
              <li className="cursor-pointer rounded-sm py-1 px-2 hover:bg-gray-100"><Link href="#">Home</Link></li>
              <li className="cursor-pointer rounded-sm py-1 px-2 hover:bg-gray-100"><Link href="#">Menu</Link></li>
              <li className="cursor-pointer rounded-sm py-1 px-2 hover:bg-gray-100"><Link href="#">About</Link></li>
              <li className="cursor-pointer rounded-sm py-1 px-2 hover:bg-gray-100"><Link href="#">Contact</Link></li>
            </ul>
          </nav>
          <div className='flex items-center gap-2 lg:gap-3'>
            <Link href='#'>
              <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center lg:hover:bg-black/[0.05] cursor-pointer relative ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mt-1.5 bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" /> </svg>
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-primary absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  <span className='z-10'>7</span>
                  <div className="animate-ping -z-1 h-full w-full rounded-full bg-primary absolute top-0 left-0 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/cart">
              <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center lg:hover:bg-black/[0.05] cursor-pointer relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /> </svg>
                {
                  // cart.length > 0 &&
                  <>
                    <div className="animate-ping -z-1 h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-primary absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                    </div>
                    <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-primary absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                      {/* {cart.length} */}2
                    </div>
                  </>
                }
              </div>
            </Link>
            <span role='button' className="group relative flex items-center gap-1 bg-slate-200 border-4 rounded-xl" id="menu-button" aria-expanded="true" aria-haspopup="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              {/* <span className='hidden lg:block'>Mahafuj</span> */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 384 512"><path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
              </svg>
              <div className="invisible group-hover:visible absolute px-5 py-3 top-14 group-hover:top-7 opacity-0 group-hover:opacity-100 right-0 -z-[10] group-hover:z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                <ul className="dark:text-white">
                  <li className="font-medium">
                    <a href="#" className="flex items-center px-2 py-1 rounded-md transform transition-all duration-200 hover:bg-gray-200">
                      <div className="mr-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                      </div>
                      Account
                    </a>
                  </li>
                  <li className="font-medium">
                    <a href="#" className="flex items-center px-2 py-1 rounded-md transform transition-all duration-200 hover:bg-gray-200">
                      <div className="mr-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      </div>
                      Setting
                    </a>
                  </li>
                  <hr className="dark:border-gray-700" />
                  <li className="font-medium">
                    <a href="#" className="flex items-center px-2 py-1 rounded-md transform transition-all duration-200  hover:bg-gray-200">
                      <div className="mr-3 text-red-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                      </div>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </span>
            <span onClick={() => setShowMenu(!showMenu)} role='button' className='md:hidden sm:ml-2 md:ml-3'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-center"><line x1="21" x2="3" y1="6" y2="6" /><line x1="17" x2="7" y1="12" y2="12" /><line x1="19" x2="5" y1="18" y2="18" /></svg>
            </span>
          </div>
        </div>
        <div className={`${showMenu ? 'top-0' : '-top-[100%]'} fixed w-full z-10 h-fit overflow-y-auto p-10 rounded-b-3xl bg-white left-0 transition-all duration-300`}>
          <div onClick={() => setShowMenu(!showMenu)} className={`${showMenu ? 'block' : 'hidden'} absolute right-8 top-8 z-50 cursor-pointer`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" id="mainIconPathAttribute"></path> </svg></div>
          <ul id="menu" className="w-full text-black text-center space-y-10 font-bold uppercase">
            <li className='flex justify-center'><Link href='/'>Home</Link></li>

            <li className='flex justify-center'><Link href="/product">Menu</Link></li>
            <li className='flex justify-center'><Link href='#'>About</Link></li>
            <li className='flex justify-center'><Link href='#'>Contact</Link></li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default Navber
