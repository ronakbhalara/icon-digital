"use client"
import React, { useEffect, useState } from 'react'
import WebLayout from '@/Layout/WebLayout'
import Image from 'next/image'
import { PiShoppingCart, PiStar, PiStarFill } from 'react-icons/pi'

const Home = () => {
    const Processor = [
        "/assets/images/Processor-1.png",
        "/assets/images/Processor-2.png",
        "/assets/images/Processor-3.png",
        "/assets/images/Processor-4.png",
        "/assets/images/Processor-5.png",
        "/assets/images/Processor-6.png",
        "/assets/images/Processor-6.png",
        "/assets/images/Processor-6.png",
    ]
    const Brands1 = [
        "/assets/images/brand-image-1.png",
        "/assets/images/brand-image-2.png",
        "/assets/images/brand-image-3.png",
    ]
    const Brands2 = [
        "/assets/images/brand-image-4.png",
        "/assets/images/brand-image-5.png",
        "/assets/images/brand-image-6.png",
        "/assets/images/brand-image-7.png",
    ]

    const Price = [
        "/assets/images/price.png",
        "/assets/images/price.png",
        "/assets/images/price.png",
        "/assets/images/price.png",
    ]

    const Use = [
        {
            image: "/assets/images/use-image-1.png",
            name: "Creator"
        },
        {
            image: "/assets/images/use-image-2.png",
            name: "Gaming"
        },
        {
            image: "/assets/images/use-image-3.png",
            name: "Home use"
        },
        {
            image: "/assets/images/use-image-4.png",
            name: "Student"
        },
        {
            image: "/assets/images/use-image-5.png",
            name: "Business"
        }


    ]

    const Best_seller = [
        {
            image: "/assets/images/best-saller.png",
            name: "Asus VivoBook s15",
            Processor: "i5",
            price: "51,000"
        },
        {
            image: "/assets/images/best-saller.png",
            name: "Asus VivoBook s15",
            Processor: "i5",
            price: "51,000"
        },
        {
            image: "/assets/images/best-saller.png",
            name: "Asus VivoBook s15",
            Processor: "i5",
            price: "51,000"
        },
    ]

    const Scroll_Image = [
        "/assets/images/scroll-image-1.png",
        "/assets/images/scroll-image-2.png",
        "/assets/images/scroll-image-3.png",
        "/assets/images/scroll-image-4.png",
        "/assets/images/scroll-image-5.png",
        "/assets/images/scroll-image-6.png",
        "/assets/images/scroll-image-7.png",
    ]

    const Service = [
        {
            image: "/assets/images/service-image-1.png",
            title: "Premium Quality",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
        {
            image: "/assets/images/service-image-2.png",
            title: "On Time Services",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
        {
            image: "/assets/images/service-image-3.png",
            title: "Support Home",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
        {
            image: "/assets/images/service-image-4.png",
            title: "Part and Upgrades",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
    ]

    const Customer = [
        {
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            image: "/assets/images/customer-image.png",
            name: "Tushar Patel"
        },
        {
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            image: "/assets/images/customer-image.png",
            name: "Tushar Patel"
        },
        {
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            image: "/assets/images/customer-image.png",
            name: "Tushar Patel"
        },
        {
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            image: "/assets/images/customer-image.png",
            name: "Tushar Patel"
        },
    ]

    const insta_image = [
        "/assets/images/insta-2.png",
        "/assets/images/insta-1.png",
        "/assets/images/insta-2.png",
        "/assets/images/insta-1.png",
        "/assets/images/insta-2.png",
        "/assets/images/insta-1.png",
    ]

    return (
        <WebLayout>
            {/* Banner  */}
            <Image
                src="/assets/images/banner.png"
                alt='Banner image'
                height={800}
                width={1950}
                className=''
            />

            {/* About Block  */}
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-[60px] items-center relative'>
                <Image
                    src="/assets/images/about-image.png"
                    alt='About image'
                    height={650}
                    width={960}
                    className='w-[960px] h-[600px] object-cover'
                />
                <div>
                    <h2 className='text-[48px] font-bold text-[#2B2A29] SF_Pro'>About Icon Digital</h2>
                    <p className='text-[#2B2A29] max-w-[618px] font-medium text-base_40/6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <button className='px-9 py-[15px] button-linear-gradient text-base_40/5 font-medium text-white rounded-full mt-[35px] Outfit'>Read More</button>
                </div>
                <Image
                    src="/assets/images/about-bg-image.png"
                    alt='About background'
                    height={270}
                    width={210}
                    className='object-cover absolute -bottom-8 right-36'
                />
            </div>

            {/* Shop By Processor */}
            <div className="bg-[url('/assets/images/Processor-bg-image.png')] h-[772px] w-auto bg-cover">
                <div className='w-full max-w-[1200px] mx-auto'>
                    <div className='pt-[84px]'>
                        <h2 className='text-[#2B2A29] font-bold text-6xl_57 text-center SF_Pro'>Shop By Processor</h2>
                    </div>
                    <div className='flex justify-center pt-[60px]'>
                        <div className='grid sm:grid-cols-4 grid-cols-2 items-center flex-wrap gap-x-16 gap-y-14'>
                            {Processor.map((item, i) => (
                                <Image
                                    src={item}
                                    alt={item}
                                    height={200}
                                    width={200}
                                    className='object-cover'
                                    key={i}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Shop By Brands */}
            <div className="bg-[url('/assets/images/Shop-By-Brands.png')] h-[700px] w-auto bg-cover">
                <div className='w-full max-w-[1200px] mx-auto'>
                    <div className='pt-[55px]'>
                        <h2 className='text-[#2B2A29] font-bold SF_Pro text-6xl_57 text-center'>Shop By Brands</h2>
                    </div>
                    <div className='flex justify-center pt-[60px]'>
                        <div className='grid gap-y-11'>
                            <div className='flex justify-center items-center flex-wrap gap-x-16 gap-y-14'>
                                {Brands1.map((item, i) => (
                                    <Image
                                        src={item}
                                        alt={item}
                                        height={200}
                                        width={200}
                                        className='object-cover cursor-pointer'
                                        key={i}
                                    />
                                ))}
                            </div>
                            <div className='grid sm:grid-cols-4 grid-cols-2 items-center flex-wrap gap-x-16 gap-y-14'>
                                {Brands2.map((item, i) => (
                                    <Image
                                        src={item}
                                        alt={item}
                                        height={200}
                                        width={200}
                                        className='object-cover cursor-pointer'
                                        key={i}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Price and Use */}
            <div className="relative">
                <Image
                    src="/assets/images/price-bg-image.png"
                    alt=""
                    height={800}
                    width={500}
                    className='absolute top-12 left-0 h-[750px] w-[600px] -z-30'
                />
                <div className='w-full max-w-[1200px] mx-auto pt-[74px]'>
                    <h2 className='text-[#2B2A29] font-bold text-6xl_57 text-center SF_Pro'>Shop By Price</h2>
                    <div className='pt-[60px] flex justify-center'>
                        <div className='grid sm:grid-cols-4 grid-cols-2 gap-x-[55px]'>
                            {Price.map((item, i) => (
                                <Image
                                    src={item}
                                    alt={item}
                                    height={110}
                                    width={300}
                                    className='object-cover cursor-pointer'
                                    key={i}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='pt-[140px]'>
                        <h2 className='text-[#2B2A29] font-bold text-6xl_57 text-center SF_Pro'>Shop By Use</h2>
                        <div className='pt-[78px] grid sm:grid-cols-5 grid-cols-2 gap-[80px]'>
                            {Use.map((item, i) => (
                                <div className='relative' key={i}>
                                    <Image
                                        src="/assets/images/Polygon.png"
                                        alt=""
                                        height={234}
                                        width={234}
                                        className='object-cover cursor-pointer'
                                    />
                                    <Image
                                        src={item.image}
                                        alt=""
                                        height={150}
                                        width={150}
                                        className='object-cover cursor-pointer absolute -top-2.5 left-3  '
                                    />
                                    <p className='text-center pt-6'>
                                        {item.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Best seller  */}
            <div className='pt-[140px]'>
                <div className="bg-linear-gradient h-[641px] relative">
                    <Image
                        src="/assets/images/best-saller-bg-image.png"
                        alt='Best Seller background'
                        height={650}
                        width={1000}
                        className='w-auto bg-cover h-[641px] absolute top-0'
                    />
                    <div className='w-full z-30 max-w-[1200px] relative mx-auto py-[130px] flex gap-x-[83px]'>
                        <div>
                            <p className='text-white font-bold border-b border-white text-5xl_46/10 inline-block SF_Pro'>Best Seller</p>
                            <p className='pt-5 text-white text-xl_40/7 SF_Pro'>New Arrivals</p>
                            <button className='px-9 py-[15px] bg-white text-[#14519E] text-base_40/5 font-medium rounded-full mt-[240px]'>Read More</button>
                        </div>
                        <div className='flex gap-x-[15px]'>
                            {Best_seller.map((item, i) => (
                                <div className='h-[382px] w-auto bg-white rounded-[20px] pr-3.5 pt-[57px] pl-[23px] pb-[15px]' key={i}>
                                    <Image
                                        src={item?.image}
                                        alt='Best Seller'
                                        height={200}
                                        width={300}
                                        className='w-auto h-[190px]'
                                    />
                                    <div className='flex items-end justify-between'>
                                        <div>
                                            <p className='pt-[22px] text-[#2B2A29] text-lg_40/6 font-bold SF_Pro'>{item?.name}</p>
                                            <p className='pt-[2px] text-[#2B2A29] text-sm_40/5'>Processor {item?.Processor}</p>
                                            <p className='pt-4 text-xl_36 text-[#2B2A29] font-bold'>₹ {item?.price}</p>
                                        </div>
                                        <div className='button-linear-gradient text-white cursor-pointer h-[62px] w-[62px] rounded-full flex justify-center items-center'>
                                            <PiShoppingCart size={24} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* scroll image */}
            <div className='pt-[130px]'>
                <div className='w-full max-w-[1200px] mx-auto flex justify-between'>
                    {Scroll_Image.map((item, i) => (
                        <Image
                            src={item}
                            alt='Best Seller'
                            height={90}
                            width={250}
                            className='w-auto h-[56px] cursor-pointer'
                            key={i}
                        />
                    ))}
                </div>
            </div>


            {/* service block */}
            <div className='pt-[130px]'>
                <div className='w-full max-w-[1200px] mx-auto'>
                    <h2 className='text-[#2B2A29] font-bold text-6xl_57 text-center SF_Pro'>We’re Here to Help You</h2>
                    <div className='pt-[80px] grid grid-cols-4 gap-11'>
                        {Service.map((item, i) => (
                            <div className='' key={i}>
                                <div className='flex justify-center'>
                                    <Image
                                        src={item.image}
                                        alt='service'
                                        height={60}
                                        width={60}
                                        className='w-auto h-[60px]'
                                    />
                                </div>
                                <p className='pt-[30px] font-bold text-[#2B2A29] text-lg_40/7 text-center SF_Pro'>{item.title}</p>
                                <div className='flex justify-center '>
                                    <p className='pt-[17px] text-[#2B2A29] text-base_40/6 max-w-[330px] text-center'>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Customer block */}
            <div className='pt-[130px]'>
                <div className='w-full max-w-[1200px] mx-auto'>
                    <h2 className='text-[#2B2A29] font-bold text-6xl_57 text-center SF_Pro'>What Customer Say</h2>
                    <div className='pt-10 grid grid-cols-4 gap-5'>
                        {Customer.map((item, i) => (
                            <div className='border border-[#D7D7D7] rounded-[20px] py-[30px] px-5' key={i}>
                                <div className='text-[#FDCE15] flex gap-x-[5px]'>
                                    <PiStarFill size={24} />
                                    <PiStarFill size={24} />
                                    <PiStarFill size={24} />
                                    <PiStarFill size={24} />
                                    <PiStarFill size={24} />
                                </div>
                                <p className='pt-[50px] text-base_40/6 text-[#4D4D4D] '>{item.content}</p>
                                <div className='flex items-center gap-x-[15px] pt-12'>
                                    <Image
                                        src={item.image}
                                        alt='Customer image'
                                        height={60}
                                        width={60}
                                        className='w-auto h-[50px] cursor-pointer object-cover'
                                    />
                                    <p className='font-bold text-lg_40/6 text-[#2B2A29] cursor-pointer SF_Pro'>{item.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Instagram block  */}
            <div className='pt-[113px]'>
                <div className='grid gap-y-[80px] relative'>
                    <div className='flex overflow-auto scrollbar-hidden'>
                        {insta_image.map((item, i) => (
                            <Image
                                src={item}
                                alt='Insta image'
                                height={300}
                                width={330}
                                className='w-auto h-[300px] cursor-pointer object-cover'
                                key={i}
                            />
                        ))}
                    </div>
                    <div className='flex overflow-auto scrollbar-hidden'>
                        {insta_image.map((item, i) => (
                            <Image
                                src={item}
                                alt='Insta image'
                                height={300}
                                width={330}
                                className='w-auto h-[300px] cursor-pointer object-cover'
                                key={i}
                            />
                        ))}
                    </div>

                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <div className='h-[400px] w-[688px] relative'>
                            <div className='h-[50%] pt-5 pl-7 pr-5 bg-white'>
                                <div className='flex justify-end items-center gap-x-[25px]'>
                                    <Image
                                        src="/assets/images/instagram.png"
                                        alt='social image'
                                        height={40}
                                        width={40}
                                        className='w-auto h-[40px] cursor-pointer object-cover'
                                    />
                                    <Image
                                        src="/assets/images/whatsapp.png"
                                        alt='social image'
                                        height={40}
                                        width={40}
                                        className='w-auto h-[40px] cursor-pointer object-cover'
                                    />
                                </div>
                                <div className='flex items-center gap-x-6'>
                                    <div className='h-[80px] w-[80px] flex justify-center items-center rounded-full border border-[#D7D7D7]'>
                                        <Image
                                            src="/assets/images/logo.png"
                                            alt='logo image'
                                            height={100}
                                            width={100}
                                            className='w-[auto] h-[20px] cursor-pointer object-cover'
                                        />
                                    </div>
                                    <div className='flex items-center gap-x-5'>
                                        <div className='text-sm_40/5 font-extrabold text-[#2B2A29] text-center tracking-[1px]'>
                                            <p>77</p>
                                            <p>posts</p>
                                        </div>
                                        <div className='text-sm_40/5 font-extrabold text-[#2B2A29] text-center tracking-[1px]'>
                                            <p>6,392</p>
                                            <p>followers</p>
                                        </div>
                                        <div className='text-sm_40/5 font-extrabold text-[#2B2A29] text-center tracking-[1px]'>
                                            <p>44</p>
                                            <p>following</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3 pl-4 pt-5'>
                                    <h3 className='gradient-text text-base_40/5 font-bold'>Ph No.</h3>
                                    <p className='text-[#2B2A29] text-base_40/5 font-medium SF_Pro'>+91 99798 53648</p>
                                </div>
                            </div>
                            <div className='bg-linear-gradient h-[50%] flex justify-center items-center'>
                                <Image
                                    src="/assets/images/white-logo.png"
                                    alt='logo image'
                                    height={300}
                                    width={300}
                                    className='w-[auto] h-[86px] cursor-pointer object-cover'
                                />
                            </div>
                            <Image
                                src="/assets/images/insta-bg.png"
                                alt='logo image'
                                height={300}
                                width={300}
                                className='w-[auto] h-[184px] right-8 absolute top-[108px]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout >
    )
}

export default Home
