import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div id="home">
      <div className="mx-4 sm:mx-8 md:mx-22 lg:mx-32 py-12 flex flex-col-reverse sm:flex-row sm:gap-x-8 gap-y-5 md:gap-y-0 items-center md:space-x-32 md:flex-row">
        <div className="home__content text-center sm:text-left md:basis-1/2 md:text-start lg:basis-3/5">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase">HAPPY TUMMY WITH TASTY BURGERS.</h1>
          <div className="separator w-28 my-5 mx-auto sm:mx-0"></div>
          <p className="paragraph my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,libero magni? Fugiat perspiciatis eius.</p>
          <button className="btn bg-primary text-white">Order Now</button>
        </div>
        <div className="mx-auto basis-2/5 md:basis-3/5">
          <div className="w-44 sm:w-60 md:w-full animate-movingY">
            <Image className='mx-auto sm:mx-0' src="/burger.png" alt="home image" width={370} height={300}/>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Hero
