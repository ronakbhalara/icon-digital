"use client"
import React, { useState } from 'react'
import WebLayout from '../../Layout/WebLayout'
import { PiPlus } from 'react-icons/pi';
import Link from 'next/link';
import Image from 'next/image';
import CostomizeProductModel from "../../Component/customize/CostomizeProductModel"

const customizeProductDetails = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const PC_Details = [
        {
            image: "/assets/images/Processor.png",
            name: "Select Processor",
            price: "0.00"
        },
        {
            image: "/assets/images/Motherboard.png",
            name: "Select Motherboard",
            price: "0.00"
        },
        {
            image: "/assets/images/ram.png",
            name: "Select RAM",
            price: "0.00"
        },
        {
            image: "/assets/images/hdd.png",
            name: "Select Hard Drive",
            price: "0.00"
        },
        {
            image: "/assets/images/ssd.png",
            name: "Select Solid Drive",
            price: "0.00"
        },
        {
            image: "/assets/images/cabinet.png",
            name: "Select Cabinet",
            price: "0.00"
        },
        {
            image: "/assets/images/fan.png",
            name: "Select Cabinet Fan",
            price: "0.00"
        },
        {
            image: "/assets/images/version.png",
            name: "Select Windows Version",
            price: "0.00"
        },
        {
            image: "/assets/images/card.png",
            name: "Select Graphics Card",
            price: "0.00"
        },
        {
            image: "/assets/images/unit.png",
            name: "Select Power Supply Unit",
            price: "0.00"
        },
        {
            image: "/assets/images/moniter.png",
            name: "Select Monitor",
            price: "0.00"
        },
        {
            image: "/assets/images/keyboard.png",
            name: "Select Keyboard",
            price: "0.00"
        },
        {
            image: "/assets/images/mouse.png",
            name: "Select Mouse",
            price: "0.00"
        },
        {
            image: "/assets/images/accessories.png",
            name: "Select Accessories",
            price: "0.00"
        },
    ]

    const icon = [
        "/assets/images/send-2.svg",
        "/assets/images/sms.svg",
        "/assets/images/printer.svg",
        "/assets/images/document-download.svg"
    ]

    const Service = [
        {
            image: "/assets/images/details-service-1.png",
            title: "Free Shipping",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
        {
            image: "/assets/images/details-service-2.png",
            title: "Easy Returns",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
        {
            image: "/assets/images/details-service-3.png",
            title: "Secure Checkout",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
        {
            image: "/assets/images/details-service-4.png",
            title: "Ontime Delivery",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
    ]

    return (
        <WebLayout>
            <div className='w-full max-w-[1200px] mx-auto sm:px-0 px-4 z-10'>
                <div className='flex justify-center text-center pt-10'>
                    <div className='sm:max-w-[500px] w-auto'>
                        <h1 className='sm:w-full SF_Pro sm:text-4xl text-2xl text-[#2B2A29] font-semibold'>
                            Choose Your Pc Parts!
                        </h1>
                        <p className='text-[#4D4D4D] text-sm pt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
                <div className='pt-10 sm:grid gap-x-8 sm:grid-cols-6 grid-cols-1'>
                    <div className='col-span-4 space-y-5'>
                        {PC_Details.map((item, i) => (
                            <div key={i}>
                                <div className='w-full bg-[#F6F6F6] border border-[#AEAEAE] rounded-[20px] p-5 flex justify-between'>
                                    <div className='flex gap-x-6'>
                                        <div className='w-[40px]'>
                                            <Image
                                                src={item?.image}
                                                alt=''
                                                className='w-auto h-[40px]'
                                                height={70}
                                                width={70}
                                            />
                                        </div>
                                        <div className='space-y-8'>
                                            <p className='text-xs text-[#2B2A29] font-semibold'>{item?.name}</p>
                                            <p className='text-xs text-[#2B2A29] font-semibold'>₹ {item?.price || "0.00"}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-end'>
                                        <Link
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault(); // To prevent the default anchor behavior
                                                setIsModalOpen(true); // Open the modal
                                            }}
                                            className='button-linear-gradient text-white cursor-pointer h-[40px] w-[40px] rounded-full flex justify-center items-center'
                                        >
                                            <PiPlus size={24} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='col-span-2 w-full sm:pt-0 pt-5'>
                        <div className='bg-[#F6F6F6] border border-[#AEAEAE] p-5 rounded-[20px]'>
                            <div className='space-y-3 pb-2.5 border-b  border-dashed border-[#B9B9B9]'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xs font-semibold text-[#2B2A29]'>Sub Total</p>
                                    <p className='text-xs text-[#2B2A29]'>14,850.00</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xs font-semibold text-[#2B2A29]'>Delivery</p>
                                    <p className='text-xs text-[#2B2A29]'>Free</p>
                                </div>
                            </div>
                            <div className='flex pt-3 items-center justify-between'>
                                <p className='text-xs font-semibold text-[#2B2A29]'>Total</p>
                                <p className='text-xs text-[#2B2A29] font-semibold'>14,850.00</p>
                            </div>
                            <div className='pt-6'>
                                <Link
                                    href='/add-to-cart'
                                    className='py-3 block text-center w-full text-base font-medium bg-linear-gradient capitalize text-white rounded-[10px] SF_Pro'>Add To Cart</Link>
                                <button className='py-3 mt-4 w-full text-base_40/5 border border-[#C9C9C9] font-medium capitalize bg-[#DADADA] text-[#232323] rounded-[10px] SF_Pro'>Remove All</button>
                            </div>
                            <div className='pt-7 grid grid-cols-4 gap-x-4'>
                                {icon.map((item, i) => (
                                    <div className='py-1 bg-[#DADADA] border border-[#C9C9C9] rounded-lg flex justify-center' key={i}>
                                        <Image
                                            src={item}
                                            alt=''
                                            className=''
                                            height={25}
                                            width={25}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* service block */}
                <div className='sm:pt-[130px] pt-10'>
                    <div className='w-ful grid sm:grid-cols-4 grid-cols-2 sm:gap-11 gap-5'>
                        {Service.map((item, i) => (
                            <div className='' key={i}>
                                <div className='flex justify-center'>
                                    <Image
                                        src={item.image}
                                        alt='service'
                                        height={60}
                                        width={60}
                                        className='w-auto h-[35px]'
                                    />
                                </div>
                                <p className='sm:pt-[30px] pt-3 font-bold text-[#2B2A29] sm:text-lg_40/7 text-md_40 text-center SF_Pro'>{item.title}</p>
                                <div className='flex justify-center '>
                                    <p className='sm:pt-[17px] pt-1 text-[#2B2A29] sm:text-base_40/6 text-sm_40/5 max-w-[330px] text-center'>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <CostomizeProductModel
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </WebLayout>
    )
}

export default customizeProductDetails;
