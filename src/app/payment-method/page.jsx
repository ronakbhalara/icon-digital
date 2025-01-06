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
            <div className='w-full max-w-[1300px] sm:pb-9 pb-7 mx-auto sm:px-0 px-4 pt-14'>
                <Image
                    src="/assets/images/logo.png"
                    alt="logo image"
                    height={70}
                    width={150}
                    className="cursor-pointer sm:h-[50px] h-9 w-auto"
                />
                <div className='mt-16 grid sm:grid-cols-7 grid-cols-1 border border-[#E9E9E9] sm:rounded-[20px] rounded-xl'>
                    <div className='col-span-5 sm:p-8 p-3 pb-5 sm:border-r border-b border-[#E9E9E9]'>
                        {/* Tabs */}
                        <div className="flex max-w-[500px] gap-x-8">
                            <div
                                className={`flex-1 py-2 text-center sm:text-base text-sm cursor-pointer ${activeTab === 1 ? "border-b-2 border-[#00A0E3] text-[#2B2A29]" : " border-b border-[#D9D9D9]"
                                    }`}
                                onClick={() => setActiveTab(1)}
                            >
                                <div className="flex items-center">
                                    <span
                                        className={`w-6 h-6 rounded-full sm:flex hidden items-center justify-center text-[#2B2A29] ${activeTab === 1 ? "bg-[#00A0E3] text-white" : "bg-gray-300"
                                            }`}
                                    >
                                        1
                                    </span>
                                    <span className="ml-2">Information</span>
                                </div>
                            </div>
                            <div
                                className={`flex-1 py-2 text-center sm:text-base text-sm cursor-pointer ${activeTab === 2 ? "border-b-2 border-[#00A0E3] text-[#2B2A29]" : "border-b border-[#D9D9D9]"
                                    }`}
                                onClick={() => setActiveTab(2)}
                            >
                                <div className="flex items-center">
                                    <span
                                        className={`w-6 h-6 rounded-full  sm:flex hidden items-center justify-center text-[#2B2A29] ${activeTab === 2 ? "bg-[#00A0E3] text-white" : "bg-gray-300"
                                            }`}
                                    >
                                        2
                                    </span>
                                    <span className="ml-2">Payment Method</span>
                                </div>
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="pt-8">
                            {activeTab === 1 &&
                                <div>
                                    <h3 className='text-lg font-medium SF_Pro text-[#2B2A29]'>Your shipping address</h3>
                                    <div className='pt-6 grid gap-y-4'>
                                        <div>
                                            <label htmlFor="productModelNo" className="block text-[#2B2A29] text-sm mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                name="productModelNo"
                                                type="text"
                                                className="appearance-none border w-full py-2.5 rounded-lg px-3 text-[#2B2A29] leading-tight focus:outline-none"
                                                placeholder="Enter Your Email"
                                            />
                                        </div>
                                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-5'>
                                            <div>
                                                <label htmlFor="productModelNo" className="block text-[#2B2A29] text-sm mb-2">
                                                    First name
                                                </label>
                                                <input
                                                    name="productModelNo"
                                                    type="text"
                                                    className="appearance-none border w-full py-2.5 rounded-lg px-3 text-[#2B2A29] leading-tight focus:outline-none"
                                                    placeholder="Enter Your First Name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="productModelNo" className="block text-[#2B2A29] text-sm mb-2">
                                                    Last name
                                                </label>
                                                <input
                                                    name="productModelNo"
                                                    type="text"
                                                    className="appearance-none border w-full py-2.5 rounded-lg px-3 text-[#2B2A29] leading-tight focus:outline-none"
                                                    placeholder="Enter Your Last Name"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="productModelNo" className="block text-[#2B2A29] text-sm mb-2">
                                                Address
                                            </label>
                                            <div className='grid sm:grid-cols-2 grid-cols-1 gap-2.5'>
                                                <input
                                                    name="productModelNo"
                                                    type="text"
                                                    className="appearance-none border w-full py-2.5 rounded-lg px-3 text-[#2B2A29] leading-tight focus:outline-none"
                                                    placeholder="Enter Your Address"
                                                />
                                                <input
                                                    name="productModelNo"
                                                    type="text"
                                                    className="appearance-none border w-full py-2.5 rounded-lg px-3 text-[#2B2A29] leading-tight focus:outline-none"
                                                    placeholder="Enter Your Address"
                                                />
                                            </div>
                                        </div>
                                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-5'>
                                            <div>
                                                <label htmlFor="productModelNo" className="block text-[#2B2A29] text-sm mb-2">
                                                    Landmark
                                                </label>
                                                <input
                                                    name="productModelNo"
                                                    type="text"
                                                    className="appearance-none border w-full py-2.5 rounded-lg px-3 text-[#2B2A29] leading-tight focus:outline-none"
                                                    placeholder="Enter Your Landmark"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="productModelNo" className="block text-[#2B2A29] text-sm mb-2">
                                                    Pin code
                                                </label>
                                                <input
                                                    name="productModelNo"
                                                    type="number"
                                                    className="appearance-none border w-full py-2.5 rounded-lg px-3 text-[#2B2A29] leading-tight focus:outline-none"
                                                    placeholder="Enter Your Pin code"
                                                />
                                            </div>
                                        </div>
                                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-5'>
                                            <div>
                                                <label htmlFor="productModelNo" className="block text-[#2B2A29] text-sm mb-2">
                                                    City
                                                </label>
                                                <input
                                                    name="productModelNo"
                                                    type="text"
                                                    className="appearance-none border w-full py-2.5 rounded-lg px-3 text-[#2B2A29] leading-tight focus:outline-none"
                                                    placeholder="Enter Your City"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="productModelNo" className="block text-[#2B2A29] text-sm mb-2">
                                                    State
                                                </label>
                                                <input
                                                    name="productModelNo"
                                                    type="text"
                                                    className="appearance-none border w-full py-2.5 rounded-lg px-3 text-[#2B2A29] leading-tight focus:outline-none"
                                                    placeholder="Enter Your State"
                                                />
                                            </div>
                                        </div>
                                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-5'>
                                            <div>
                                                <label htmlFor="productModelNo" className="block text-[#2B2A29] text-sm mb-2">
                                                    Company Name
                                                </label>
                                                <input
                                                    name="productModelNo"
                                                    type="text"
                                                    className="appearance-none border w-full py-2.5 rounded-lg px-3 text-[#2B2A29] leading-tight focus:outline-none"
                                                    placeholder="Enter Your Company Name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="productModelNo" className="block text-[#2B2A29] text-sm mb-2">
                                                    Phone number
                                                </label>
                                                <input
                                                    name="productModelNo"
                                                    type="number"
                                                    className="appearance-none border w-full py-2.5 rounded-lg px-3 text-[#2B2A29] leading-tight focus:outline-none"
                                                    placeholder="Enter Your Phone number"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {activeTab === 2 &&
                                <div>
                                    <div className='flex justify-between items-center'>
                                        <h3 className='text-lg font-medium SF_Pro text-[#2B2A29]'>Credit / Debit Card</h3>
                                        <div className='flex items-center gap-x-3'>
                                            <Image
                                                src="/assets/images/visa.png"
                                                alt=''
                                                className='h-3 w-auto'
                                                height={50}
                                                width={60}
                                            />
                                            <input
                                                type="radio"
                                                name="option"
                                                value="option1"
                                                className="mr-2 h-4 w-4 accent-[#14519E]"
                                            />
                                        </div>
                                    </div>
                                    <div className='pt-6 grid gap-y-4'>
                                        <div>
                                            <label htmlFor="productModelNo" className="block text-[#2B2A29] text-sm mb-2">
                                                Card Number
                                            </label>
                                            <input
                                                name="productModelNo"
                                                type="number"
                                                className="appearance-none border w-full py-2.5 rounded-lg px-3 text-[#2B2A29] leading-tight focus:outline-none"
                                                placeholder="Enter Your Card Number"
                                            />
                                        </div>
                                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-5'>
                                            <div>
                                                <label htmlFor="productModelNo" className="block text-[#2B2A29] text-sm mb-2">
                                                    Expiration date
                                                </label>
                                                <input
                                                    name="productModelNo"
                                                    type="date"
                                                    className="appearance-none border w-full py-2.5 rounded-lg px-3 text-[#2B2A29] leading-tight focus:outline-none"
                                                    placeholder="MM/YY"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="productModelNo" className="block text-[#2B2A29] text-sm mb-2">
                                                    CVV
                                                </label>
                                                <input
                                                    name="productModelNo"
                                                    type="number"
                                                    className="appearance-none border w-full py-2.5 rounded-lg px-3 text-[#2B2A29] leading-tight focus:outline-none"
                                                    placeholder=""
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="productModelNo" className="block text-[#2B2A29] text-sm mb-2">
                                                Cardholder's Name
                                            </label>
                                            <input
                                                name="productModelNo"
                                                type="text"
                                                className="appearance-none border w-full py-2.5 rounded-lg px-3 text-[#2B2A29] leading-tight focus:outline-none"
                                                placeholder="Enter Your Cardholder's Name"
                                            />
                                        </div>
                                        <div>
                                            <div className='flex justify-between items-center pt-2'>
                                                <Image
                                                    src="/assets/images/upi.png"
                                                    alt=''
                                                    className='h-5 w-auto'
                                                    height={50}
                                                    width={80}
                                                />
                                                <input
                                                    type="radio"
                                                    name="option"
                                                    value="option1"
                                                    className="mr-2 h-4 w-4 accent-[#14519E]"
                                                />
                                            </div>
                                            <input
                                                name="productModelNo"
                                                type="text"
                                                className="appearance-none border w-full py-2.5 mt-2 rounded-lg px-3 text-[#2B2A29] leading-tight focus:outline-none"
                                                placeholder="Enter Your UPI Address"
                                            />
                                        </div>
                                        <div className='flex justify-between items-center pt-2'>
                                            <Image
                                                src="/assets/images/paytm.png"
                                                alt=''
                                                className='h-4 w-auto'
                                                height={50}
                                                width={80}
                                            />
                                            <input
                                                type="radio"
                                                name="option"
                                                value="option1"
                                                className="mr-2 h-4 w-4 accent-[#14519E]"
                                            />
                                        </div>
                                        <div className='flex justify-between items-center pt-2'>
                                            <Image
                                                src="/assets/images/g-pay.png"
                                                alt=''
                                                className='h-6 w-auto'
                                                height={50}
                                                width={80}
                                            />
                                            <input
                                                type="radio"
                                                name="option"
                                                value="option1"
                                                className="mr-2 h-4 w-4 accent-[#14519E]"
                                            />
                                        </div>
                                        <div className='flex justify-between items-center pt-2'>
                                            <Image
                                                src="/assets/images/phone-pay.png"
                                                alt=''
                                                className='h-8 w-auto'
                                                height={50}
                                                width={80}
                                            />
                                            <input
                                                type="radio"
                                                name="option"
                                                value="option1"
                                                className="mr-2 h-4 w-4 accent-[#14519E]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <div className='col-span-2 p-5 pb-8 flex flex-col justify-between'>
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
                                className="bg-[#00A0E3] w-full flex gap-x-3 justify-center items-center rounded-[10px] text-white font-medium py-3  px-4 focus:outline-none "
                            >
                                Continue
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
