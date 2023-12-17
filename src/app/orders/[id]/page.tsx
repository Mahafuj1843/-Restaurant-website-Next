import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OrderSummaryPage = () => {
    return (
        <div className="mx-4 sm:mx-8 md:mx-22 lg:mx-32 my-8 md:my-10">
            <div className="text-center w-full mx-auto text-[18px] md:text-[22px] mb-2 font-semibold">
                Thanks for your order
            </div>
            <div className='w-full flex items-center justify-between'>
                <h4>Order: <b>#8564</b></h4>
                <h4>Ordered on <b>Sunday 21 April, 2023</b></h4>
            </div>
            <hr className='w-full my-2' />
            <div className='w-full justify-center md:flex gap-12 py-2'>
                <div className="md:basis-2/3">
                    {
                        [...Array(3)].map((ind, i) => (
                            <div key={i} className='w-full lg:flex-1 flex justify-start lg:justify-normal gap-2 border-b pt-2'>
                                <div className="shrink-0 aspect-square w-[50px] md:w-[80px] mb-2 lg:mb-0">
                                    <Image
                                        src='/pizza1.png'
                                        alt="Product Img"
                                        width={70}
                                        height={70}
                                    />
                                </div>
                                <div className='w-full flex justify-between mb-2 lg:mb-0'>
                                    <div className='flex flex-col gap-1'>
                                        <div className="text-base md:text-md font-semibold text-black/[0.8]">
                                            {/* {item.title} */}Fram fresh organic fruites
                                        </div>
                                        <div className="text-sm font-medium text-gray-500">
                                            $5.77
                                            {/* {item.price * item.qty} */}
                                        </div>
                                        <div className="text-xs font-normal text-gray-500">
                                            x3
                                            {/* {item.qty} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="md:basis-1/3 mt-4 md:mt-0">
                    <div className='flex flex-col gap-y-5 sticky top-16'>
                        <div className="text-xl font-bold">Summary</div>
                        <div className='space-y-0.5'>
                            <b>Shipping Address</b>
                            <p className='text-sm'>Oxygen, Rufabad, Chattogram</p>
                        </div>
                        <div className='space-y-0.5'>
                            <b>Order Status</b>
                            <p className='text-sm px-1 py-0.5 bg-green-300 rounded-md w-fit'>Order Placed</p>
                        </div>
                        <div className="">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-700">Subtotal</p>
                                <p className="text-black">$129.99</p>
                            </div>
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-700">
                                    Discount
                                    <span className="ml-1 cursor-pointer rounded-md px-1 py-0.5 bg-gray-300 text-sm">Home</span>
                                </p>
                                <p className="text-black">-$129.99 (50%)</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-700">Shipping</p>
                                <p className="text-black">$4.99</p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between">
                                <p className="text-lg font-bold">Total</p>
                                <div className="">
                                    <p className="mb-1 text-lg font-bold">$134.98</p>
                                    {/* <p className="text-sm text-gray-700">including VAT</p> */}
                                </div>
                            </div>
                        </div>

                        <Link href="/checkout"
                            className="w-full py-3 bg-red-700 text-white text-base font-medium transition-transform mb-3 hover:opacity-75 text-center"
                        // onClick={handlePayment}
                        >
                            Cancle Order
                        </Link>
                    </div>
                </div>
            </div>
            <p className='text-sm text-gray-500 mt-8'>We'll send your shipping confirmation when your item are one the way! we apperitcate your
            businees, and hope you enjoy our food Thank you!
            </p>
            <p className='text-sm text-gray-500 mt-8'>Questions? Contact our <Link href='#'><b className='text-gray-800 underline'>customer support</b></Link></p>
        </div>
    )
}

export default OrderSummaryPage
