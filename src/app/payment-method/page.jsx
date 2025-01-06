"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { PiArrowArcRight, PiArrowRight } from 'react-icons/pi';

const PaymentMethod = () => {
    const [quantity, setQuantity] = useState(1);
    const basePrice = 129990;
    const [activeTab, setActiveTab] = useState(1);
    return (
        <>
            <div className='w-full max-w-[1300px] sm:pb-0 pb-7 mx-auto sm:px-0 px-4 pt-14'>
                <Image
                    src="/assets/images/logo.png"
                    alt="logo image"
                    height={70}
                    width={150}
                    className="cursor-pointer sm:h-[50px] h-9 w-auto"
                />
                <div className='mt-16 grid sm:grid-cols-7 grid-cols-1 border border-[#E9E9E9] sm:rounded-[20px] rounded-xl'>
                    <div className='col-span-5 sm:p-8 p-3 border-r border-[#E9E9E9]'>
                        <div className="max-w-md mx-auto mt-10">
                            {/* Tabs */}
                            <div className="flex border-b">
                                <button
                                    className={`flex-1 py-2 text-center ${activeTab === 1 ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
                                        }`}
                                    onClick={() => setActiveTab(1)}
                                >
                                    <div className="flex items-center justify-center">
                                        <span
                                            className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${activeTab === 1 ? "bg-blue-500" : "bg-gray-300"
                                                }`}
                                        >
                                            1
                                        </span>
                                        <span className="ml-2">Information</span>
                                    </div>
                                </button>
                                <button
                                    className={`flex-1 py-2 text-center ${activeTab === 2 ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
                                        }`}
                                    onClick={() => setActiveTab(2)}
                                >
                                    <div className="flex items-center justify-center">
                                        <span
                                            className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${activeTab === 2 ? "bg-blue-500" : "bg-gray-300"
                                                }`}
                                        >
                                            2
                                        </span>
                                        <span className="ml-2">Payment Method</span>
                                    </div>
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="p-4">
                                {activeTab === 1 && <div>Information content goes here.</div>}
                                {activeTab === 2 && <div>Payment method content goes here.</div>}
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2 p-5 sm:space-y-44 space-y-10'>
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
                            <button
                                type="submit"
                                className="bg-[#00A0E3] w-full flex gap-x-3 justify-center items-center rounded-[10px] text-white font-bold py-3  px-4 focus:outline-none "
                            >
                                Submit
                                <PiArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentMethod;
