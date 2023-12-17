import Image from 'next/image'
import React, { Fragment } from 'react'

const Offer = () => {
    return (
        <Fragment>
            <section className='mx-4 sm:mx-8 md:mx-22 lg:mx-32 py-6 my-4'>
                <div className='text-left'>
                    <h1 className='text-2xl font-bold mb-2 w-full'>Mega offer</h1>
                    <div className={`separator w-[130px]`}></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 mt-5">
                    {
                        [...Array(2)].map((_, i)=>
                    <div key={i} className='flex flex-col-reverse sm:flex-row gap-3 md:gap-x-6 p-5 border h-full'>
                        <div className='flex flex-col gap-y-4 justify-between'>
                            <div className=''>
                                <h2 className='text-xl md:text-2xl font-bold text-primary'>Deal of the Day.</h2>
                                <p className='text-lg md:text-md font-normal text-gray-500'>Limited offers.</p>
                            </div>
                            <div className='space-y-1 md:space-y-2'>
                                <h4 className='text-lg font-normal'>Home Smart Speaker with Google Assistant</h4>
                                <h2 className='text-[22px] font-normal'>$129.00 <span className="text-[16px] text-gray-400 font-semibold line-through">$150.00</span></h2>
                                <button className="btn bg-primary text-white">Add to cart</button>
                            </div>
                            <div className='flex gap-x-1'>
                                <div className='flex flex-col text-center'><h2 className='py-1 px-[10px] text-md md:text-lg font-semibold bg-primary text-white'>03</h2><p className='text-[10px] md:text-xs text-gray-400'>hours</p></div>
                                <div className='text-xl font-semibold'>:</div>
                                <div className='flex flex-col text-center'><h2 className='py-1 text-md md:text-lg font-semibold bg-primary text-white'>20</h2><p className='text-[10px] md:text-xs text-gray-400'>minutes</p></div>
                                <div className='text-xl font-semibold'>:</div>
                                <div className='flex flex-col text-center'><h2 className='py-1 text-md md:text-lg font-semibold bg-primary text-white'>16</h2><p className='text-[10px] md:text-xs text-gray-400'>seconds</p></div>
                            </div>
                        </div>
                        <div className='flex items-center md:mx-auto'>
                            <div className='basis-3/5 sm:basis-full md:basis-4/5 lg:basis-full mx-auto animate-big'>
                                <Image src={`${!i ? '/home-image.png' : '/pizza.png'}`} alt='offer img' width={270} height={400} />
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </section>
        </Fragment>
    )
}

export default Offer