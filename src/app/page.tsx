'use client'

import Carousel from '@/components/Carousel'
import Hero from '@/components/Hero'
import MenuPopup from '@/components/MenuPopup'
import Offer from '@/components/Offer'
import Service from '@/components/Service'
import { Fragment, useState } from 'react'

export default function Home() {
  const [showPopup, setShowPopup] = useState<boolean>(false)
  return (
    <Fragment>
      <Hero />
      <Service />
      {
        showPopup &&
        <MenuPopup setShowPopup={setShowPopup} />
      }
      <Carousel title={'Popular Menu'} setShowPopup={setShowPopup}/>
      <Carousel title={'New Menu'} setShowPopup={setShowPopup}/>
      <Offer />
    </Fragment>
  )
}
