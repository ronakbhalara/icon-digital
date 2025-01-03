"use client"
import React, { useState } from 'react'
import WebLayout from '../../Layout/WebLayout'
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";
import { PiShoppingCart } from 'react-icons/pi';
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

const Laptop = () => {
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
            image: "/assets/images/best-saller.png",
            name: "Asus VivoBook s15",
            Processor: "i5",
            price: "51,000",
        },
        {
            image: "/assets/images/best-saller.png",
            name: "Asus VivoBook s15",
            Processor: "i5",
            price: "51,000",
        },
        {
            image: "/assets/images/best-saller.png",
            name: "Asus VivoBook s15",
            Processor: "i5",
            price: "51,000",
        },
    ]

    return (
        <WebLayout>
            <h1 className='pt-5 text-7xl_48 font-black text-center pb-4 border-b border-[#CECECE] SF_Pro'>Laptops</h1>
            <div className='w-full max-w-[1200px] mx-auto pt-10'>
                <div className='grid grid-cols-7 gap-x-6'>
                    <div className="bg-white rounded-lg shadow-sm col-span-2">
                        {filterData.map((filter, index) => (
                            <FilterSection key={index} title={filter.title} options={filter.options} />
                        ))}
                    </div>
                    <div className='col-span-5 grid grid-cols-2 gap-7'>
                        {Best_seller.map((item, i) => (
                            <div className='h-[382px] w-auto relative bg-[#F6F6F6] rounded-[20px] pr-3.5 pt-[57px] pl-[23px] pb-[15px]' key={i}>
                                <div className='flex justify-center'>
                                    <Image
                                        src={item?.image}
                                        alt='Best Seller'
                                        height={200}
                                        width={300}
                                        className='w-auto h-[190px]'
                                    />
                                </div>
                                <div className='flex items-end justify-between'>
                                    <div>
                                        <p className='pt-[22px] text-[#2B2A29] text-lg_40/6 font-bold'>{item?.name}</p>
                                        <p className='pt-[2px] text-[#2B2A29] text-sm_40/5'>Processor {item?.Processor}</p>
                                        <p className='pt-4 text-xl_36 text-[#2B2A29] font-bold'>₹ {item?.price}</p>
                                    </div>
                                    <div className='h-[80px] w-[80px] bg-white flex justify-center items-center absolute right-0 bottom-0 rounded-ss-[20px]'>
                                        <Link
                                            className='button-linear-gradient text-white cursor-pointer h-[62px] w-[62px] rounded-full flex justify-center items-center'
                                            href="/laptop/product-details"
                                        >
                                            <PiShoppingCart size={24} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </WebLayout >
    )
}

export default Laptop

