import Image from 'next/image';
import React, { ReactComponentElement, useState } from 'react'

interface Props {
    // showPopup: boolean,     
    setShowPopup: (showPopup: boolean) => void;
}

const MenuPopup = ({ setShowPopup }: Props) => {
    const [selectedExtras, setSelectedExtras] = useState([]);
    return (
        <div
            onClick={() => setShowPopup(false)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[99999]">
            <div
                onClick={ev => ev.stopPropagation()}
                className="my-8 bg-white p-2 rounded-lg w-[80%] md:max-w-md">
                <div
                    className="overflow-y-auto no-scrollbar scroll-smooth p-2"
                    style={{ maxHeight: 'calc(100vh - 100px)' }}>
                    <Image
                        src="/pizza1.png"
                        alt='Product img'
                        width={300} height={200}
                        objectFit={'contain'} objectPosition={'center'}
                        className="mx-auto w-[80%]" />
                    <h2 className="text-lg font-bold text-center mb-2">Fram fresh organic fruites</h2>
                    <p className="text-center text-gray-500 text-sm mb-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora commodi sunt praesentium, ducimus fugiat accusamus modi aliquam recusandae nulla.
                    </p>
                    {[...Array(3)]?.length > 0 && (
                        <div className="py-2">
                            <h3 className="text-center text-gray-700 mb-2">Pick your size</h3>
                            {[...Array(3)].map((size, i) => (
                                <label
                                    key={i}
                                    className="flex items-center gap-2 p-4 border rounded-md mb-1">
                                    <input
                                        type="radio"
                                        // onChange={() => setSelectedSize(size)}
                                        // checked={selectedSize?.name === size.name}
                                        name="size" />
                                    {/* {size.name} ${basePrice + size.price} */} Small $12
                                </label>
                            ))}
                        </div>
                    )}
                    {[...Array(3)]?.length > 0 && (
                        <div className="py-2">
                            <h3 className="text-center text-gray-700 mb-2">Any extras?</h3>
                            {[...Array(3)].map((extraThing, i) => (
                                <label
                                    key={i}
                                    className="flex items-center gap-2 p-4 border rounded-md mb-1">
                                    <input
                                        type="checkbox"
                        // onChange={ev => handleExtraThingClick(ev, extraThing)}
                        // checked={selectedExtras.map(e => e._id).includes(extraThing._id)}
                        /*name={extraThing.name}*/ />
                                    {/* {extraThing.name} +${extraThing.price} */} Extra cheese +2$
                                </label>
                            ))}
                        </div>
                    )}
                    {/* <FlyingButton
                targetTop={'5%'}
                targetLeft={'95%'}
                src={image}>
                <div className="primary sticky bottom-2"
                     onClick={handleAddToCartButtonClick}>
                  Add to cart ${selectedPrice}
                </div>
              </FlyingButton> */}
                    <div className='flex flex-col gap-y-2 bottom-2'>
                        <button className="btn bg-primary text-white rounded-md">Add to cart</button>
                        <button
                            className="btn bg-red-500 text-white rounded-md"
                            onClick={() => setShowPopup(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuPopup
