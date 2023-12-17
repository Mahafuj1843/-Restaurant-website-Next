'use client'

import CartItem from '@/components/CartItem'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'

const CartPage = () => {
  const [cart, setCart] = useState([1, 2, 4])
  return (
    <Fragment>
      <div className='mx-4 sm:mx-8 md:mx-22 lg:mx-32 md:py-12'>
        {
          cart.length > 0 ?
            <div>
              <div className="text-center w-full mx-auto mt-8 md:mt-0">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                  Shopping Cart
                </div>
              </div>

              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-10"> */}
              <div className='w-full justify-center md:flex gap-12 py-8'>
                <div className="md:basis-2/3">
                  <div className="hidden lg:flex text-sm font-bold py-4 ps-4 pe-8 bg-gray-200 rounded-sm">
                    <span className='flex-[4]'>Cart Items</span>
                    <span className='flex-[1] text-center'>Price</span>
                    <span className='flex-[2] text-center'>Qty</span>
                    <span className='flex-[1] text-center'>Subtotal</span>
                  </div>
                  {
                    cart.map((item, i) =>
                      <CartItem key={i} /*item={item}*/ />
                    )
                  }
                </div>

                <div className="md:basis-1/3">
                  <div className='flex flex-col sticky top-16'>
                    <div className="text-lg font-bold">Summary</div>
                    <div className="p-5 my-3 bg-black/[0.05] rounded-xl">
                      <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Subtotal</p>
                        <p className="text-black">$129.99</p>
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
                      <div className="text-sm md:text-md pt-3">
                        The total price of
                        your order, including duties and taxes,
                        before any applicable discounts. It does
                        not include delivery costs and
                        international transaction fees.
                      </div>
                    </div>
                    <div className="flex gap-2 my-3 justify-center">
                      <input className='w-2/3 h-[50px] lg:h-[40px] px-3 border border-gray-400 outline-gray-400' type="text" placeholder="Enter coupon code" />
                      <button className='w-1/3 py-2 bg-primary text-white hover:opacity-75'>Apply</button>
                    </div>

                    <Link href="/checkout"
                       className="w-full py-4 rounded-full bg-primary text-white text-lg font-medium transition-transform mb-3 hover:opacity-75 text-center"
                    // onClick={handlePayment}
                    >
                      Check out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            :
            <div className="flex flex-col items-center pb-10 ">
              <img
                // src={emptyCartImg}
                width={200}
                height={200}
                className="w-[200px] md:w-[300px]"
              />
              <span className="text-xl font-bold">
                Your cart is empty
              </span>
              <span className="text-center mt-4">
                Looks like you have not added anything in your cart.
                <br />
                Go ahead and explore top categories.
              </span>
              <Link
                href="/product"
                className="py-3 px-6 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
              >
                Continue Shopping
              </Link>
            </div>
        }
      </div>
    </Fragment>
  )
}

export default CartPage
