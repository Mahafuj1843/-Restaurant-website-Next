import React, { Fragment } from 'react'

const CancelPage = () => {
  return (
    <Fragment>
      <div className='w-full px-[2rem] md:px-[3rem] lg:px-[5rem] py-14 md:py-32'>
        <div className='w-full flex flex-col items-center justify-center gap-3'>
          <div className="text-xl font-bold">opps!</div>
          <div className="text-lg">Your order has been failed.</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x-circle icon text-red-600 w-16 h-16 mx-auto mt-6 mb-2" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>
          <span className="text-base font-medium text-red-600">
            Payment failed
          </span>
          <div className='text-sm md:text-base font-medium'>
            You are being redirected to the cart page. Please do not close the page.
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CancelPage
