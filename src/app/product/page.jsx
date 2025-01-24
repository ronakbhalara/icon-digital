"use client"
import React, { useState } from 'react'
import WebLayout from '../Layout/WebLayout'
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";
import { PiArrowUpRight, PiShoppingCart } from 'react-icons/pi';
import Image from 'next/image';
import Link from 'next/link';
const FilterSection = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[#2B2A2966]">
            <button
                className="flex justify-between w-full px-4 py-3 text-left text-sm font-medium text-gray-800 hover:bg-gray-100"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <span>{isOpen ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}</span>
            </button>
            {isOpen && (
                <div className="px-4 py-2 space-y-2">
                    {options.map((option, index) => (
                        <label key={index} className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="text-sm text-gray-600">{option}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

const Product = () => {
    const filterData = [
        {
            title: "Laptop Series",
            options: [
                "XPS Laptops",
                "Latitude Laptops",
                "Inspiron Laptops",
                "Vostro Laptops",
                "Alienware Laptops",
                "G Series Laptops",
                "Chromebook Laptops",
            ],
        },
        {
            title: "Gaming Series",
            options: [],
        },
        {
            title: "CPU",
            options: ["Intel i5", "Intel i7", "AMD Ryzen 5", "AMD Ryzen 7"],
        },
        {
            title: "GPU",
            options: ["NVIDIA GTX", "NVIDIA RTX", "AMD Radeon"],
        },
        {
            title: "Panel Size",
            options: ["14 inch", "15 inch", "16 inch", "22 inch"],
        },
    ];

    const Best_seller = [
        {
            type: "Product",
            image: "/assets/images/best-saller.png",
            name: "Asus VivoBook s15",
            Processor: "i5",
            price: "51,000",
        },
        {
            type: "Advertise",
            title: "Add Customize Part With Us",
            description: null,
            price: null,
            image: null,
            Processor: null,
        },
        {
            type: "Product",
            image: "/assets/images/best-saller.png",
            name: "Asus VivoBook s15",
            Processor: "i5",
            price: "51,000",
        },
        {
            type: "Product",
            image: "/assets/images/best-saller.png",
            name: "Asus VivoBook s15",
            Processor: "i5",
            price: "51,000",
        },
    ]

    return (
        <WebLayout>
            <h1 className='pt-5 text-4xl font-black text-center pb-4 border-b border-[#CECECE] SF_Pro'>Laptops</h1>
            <div className='w-full max-w-[1300px] mx-auto pt-10 sm:px-0 px-4'>
                <div className='grid sm:grid-cols-7 grid-cols-1 sm:gap-x-6 gap-y-4'>
                    <div className="bg-white rounded-lg shadow-sm col-span-2">
                        {filterData.map((filter, index) => (
                            <FilterSection key={index} title={filter.title} options={filter.options} />
                        ))}
                    </div>
                    <div className='col-span-5 grid sm:grid-cols-3 gap-7'>
                        {Best_seller.map((item, i) => {
                            if (item.type === "Advertise") {
                                // Render Advertise Section
                                return (
                                    <div
                                        key={i}
                                        className="w-auto sm:h-[350px] h-60 bg-gray-100 sm:p-8 p-4 rounded-[20px] relative"
                                    >
                                        <h2 className="text-3xl leading-[50px] font-bold w-auto">{item.title}</h2>
                                        <div className='absolute sm:bottom-5 bottom-7 flex items-center'>
                                            <button className='px-9 py-2.5  border border-[#14519E] text-base_40/5 font-medium gradient-text rounded-full Outfit'>View All</button>
                                            <div className='p-[13px] border border-[#14519E] rounded-full'>
                                                <PiArrowUpRight />
                                            </div>
                                        </div>
                                    </div>

                                );
                            } else if (item.type === "Product") {
                                return (
                                    <Link href="/product/product-details">
                                        <div className='sm:h-[350px] cursor-pointer group h-auto w-auto relative bg-[#F6F6F6] rounded-[20px] sm:pr-3.5 pr-3 sm:pt-8 pt-5 sm:pl-[23px] pl-3 pb-[15px]' key={i}>
                                            <div className='flex justify-center'>
                                                <Image
                                                    src={item?.image}
                                                    alt='Best Seller'
                                                    height={200}
                                                    width={300}
                                                    className='w-auto h-[160px] group-hover:scale-110 transform transition-transform duration-300'
                                                />
                                            </div>
                                            <div className='flex pt-5 items-end justify-between'>
                                                <div>
                                                    <p className='pt-[22px] text-[#2B2A29] text-lg_40/6 font-bold'>{item?.name}</p>
                                                    <p className='pt-[2px] text-[#2B2A29] text-sm_40/5'>Processor {item?.Processor}</p>
                                                    <p className='pt-4 text-xl_36 text-[#2B2A29] font-bold'>₹ {item?.price}</p>
                                                </div>
                                                <div className='sm:h-[80px] h-[30px] sm:absolute bottom-0 right-0 sm:mb-0 mb-2 sm:w-[80px] w-auto bg-white flex justify-center items-center rounded-[20px]'>
                                                    <p
                                                        className='button-linear-gradient text-white sm:h-[62px] sm:w-[62px] h-14 w-14 rounded-full flex justify-center items-center'
                                                    >
                                                        <PiShoppingCart size={24} />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            } else {
                                return null; // Fallback for other item types
                            }
                        })}
                    </div>
                </div>
            </div>
        </WebLayout >
    )
}

export default Product

