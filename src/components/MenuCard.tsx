'use client'

import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import MenuPopup from './MenuPopup'

interface Props { 
    showPopup: boolean,     
    setShowPopup: (showPopup: boolean) => void;
}

const MenuCard = ({setShowPopup}: { setShowPopup: (arg0: boolean) => void}) => {
    const [first, setfirst] = useState<Boolean>(false)
    return (
        <Fragment>
            <div className='group card_shadow p-5 relative rounded-lg cursor-pointer'>
                <Image className='group-hover:scale-110 transition-all duration-300 mx-auto drop-shadow-xl' src='/pizza1.png' alt='Product Img' width={170} height={170} objectFit={'contain'} objectPosition={'center'} />
                <span className='font-medium text-sm mt-4'>Fresh Item</span>
                <h2 className='font-bold text-xl'>Fram fresh organic fruites</h2>
                <div>
                    <span className="text-md font-medium text-slate-900 me-1">$7.55</span>
                    <span className="text-xs text-gray-600 font-semibold line-through">$9.00</span>
                </div>
                <button onClick={() => setShowPopup(true)} className='absolute bottom-0 right-0 p-3 bg-primary text-white text-xl rounded-tl-lg rounded-br-lg'>
                    {
                        !first ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16"> <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" /> <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-x" viewBox="0 0 16 16"> <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z" /> <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                    }
                </button>
                <div role='button' className='absolute top-4 right-4 text-xl text-center rounded-3xl p-2.5 transition-all duration-300 bg-primary'>
                    {/* {
                        !first ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                            : */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={`${first ? 'red' : 'white'}`} className="bi bi-heart-fill" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                    {/* } */}
                </div>
                <div className='clip-path absolute text-xs left-0 top-4 bg-primary text-white py-1 ps-2 pe-3 rounded-tr-md rounded-br-md'>-25%</div>
            </div>
        </Fragment>
    )
}

export default MenuCard
