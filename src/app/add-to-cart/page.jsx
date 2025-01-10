"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { PiArrowArcRight, PiArrowRight } from 'react-icons/pi';

const AddToCart = () => {
    // State to manage the quantity and the base price
    const [quantity, setQuantity] = useState(1);
    const basePrice = 129990; // Base price of the item

    // Handler functions for increment and decrement
    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    return (
        <>
            <div className='w-full max-w-[1300px] sm:pb-0 pb-7 mx-auto sm:px-0 px-4 pt-14'>
                <Link href="/">
                    <Image
                        src="/assets/images/logo.png"
                        alt="logo image"
                        height={70}
                        width={150}
                        className="cursor-pointer sm:h-[50px] h-9 w-auto"
                    />
                </Link>
                <div className='mt-16 grid sm:grid-cols-7 grid-cols-1 border border-[#E9E9E9] sm:rounded-[20px] rounded-xl'>
                    <div className='col-span-5 sm:p-8 p-3 border-r border-[#E9E9E9]'>
                        <h3 className='text-2xl pb-4 border-b border-[#E9E9E9] font-semibold text-[#2B2A29] SF_Pro'>Add to Cart</h3>
                        <div className='mt-5 sm:border border-[#E9E9E9] rounded-xl sm:p-3 sm:flex sm:gap-x-5'>
                            <Image
                                src="/assets/images/best-saller.png"
                                alt="logo image"
                                height={300}
                                width={300}
                                className="cursor-pointer sm:h-44 rounded-lg border border-[#E9E9E9] p-3 h-auto w-auto"
                            />
                            <div className='sm:flex flex-wrap gap-x-20'>
                                <div className='sm:max-w-[60%]'>
                                    <h3 className='text-2xl SF_Pro font-medium sm:pt-0 pt-4'>ASUS Vivobook S 16 OLED S5606MA-MX951WS</h3>
                                    <div className='pt-3 space-y-2'>
                                        <div className='flex sm:gap-x-0 gap-x-4'>
                                            <p className='text-[#232323] sm:w-[40%] text-sm'>
                                                Processor
                                            </p>
                                            <p className='text-[#232323] text-sm'>
                                                - Intel Core i5-12450H
                                            </p>
                                        </div>
                                        <div className='flex sm:gap-x-0 gap-x-4'>
                                            <p className='text-[#232323] sm:w-[40%] text-sm'>
                                                Ram
                                            </p>
                                            <p className='text-[#232323] text-sm'>
                                                - 16GB DDR4
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='sm:max-w-[40%] sm:block flex items-center justify-between sm:pt-0 pt-6 sm:space-y-28'>
                                    <h3 className='text-end text-xl font-semibold text-[#2B2B2B]'>
                                        ₹{(basePrice * quantity).toLocaleString("en-IN", {
                                            maximumFractionDigits: 2,
                                        })}.00
                                    </h3>
                                    <div className='border w-36 border-[#CACACA] py-2 px-4 text-[#C0C0C0] text-xl flex justify-between items-center rounded-lg'>
                                        <p className='text-3xl cursor-pointer'
                                            onClick={decrement}
                                        >-</p>
                                        <p className='text-[#2B2A29]'>{quantity}</p>
                                        <p className='text-3xl cursor-pointer'
                                            onClick={increment}
                                        >+</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 p-5 flex flex-col justify-between'>
                        <div>
                            <p className='text-base text-[#333311] SF_Pro font-medium'>Summary</p>
                            <div className='pt-3 space-y-3 border-b pb-3 border-dashed border-[#CACACA]'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[#838383] text-base'>Price :</p>
                                    <p className='text-[#838383] text-base'>₹129,990.00</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[#838383] text-base'>Sub Total :</p>
                                    <p className='text-[#838383] text-base'>00.00</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[#838383] text-base'>Delivery Cost :</p>
                                    <p className='text-[#838383] text-base'>Free</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pt-3'>
                                <p className='text-[#838383] text-base'>Total :</p>
                                <p className='text-[#14519E] text-base'>
                                    ₹{(basePrice * quantity).toLocaleString("en-IN", {
                                        maximumFractionDigits: 2,
                                    })}.00
                                </p>
                            </div>
                        </div>
                        <div>
                            <Link
                                type="submit"
                                href='/payment-method'
                                className="bg-[#00A0E3] w-full flex gap-x-3 justify-center items-center rounded-[10px] text-white font-bold py-3  px-4 focus:outline-none "
                            >
                                Place Order
                                <PiArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddToCart;
