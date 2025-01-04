import React from 'react'
import WebLayout from '../../../Layout/WebLayout'
import Image from 'next/image';
import { PiStarFill } from 'react-icons/pi';

const ProductDetails = () => {
    const product_Details = [
        "/assets/images/product-details-1.png",
        "/assets/images/product-details-2.png",
        "/assets/images/product-details-3.png",
        "/assets/images/product-details-2.png",
    ]
    return (
        <WebLayout>
            <div className='pt-10'>
                <div className='w-full max-w-[1200px] mx-auto'>
                    <div className='grid grid-cols-2 gap-x-8'>
                        <div>
                            <div className='border border-[#CACACA] p-8'>
                                <Image
                                    src="/assets/images/best-saller.png"
                                    alt='product-details'
                                    height={700}
                                    width={800}
                                    className='w-auto h-[370px]'
                                />
                            </div>
                            <div className='grid grid-cols-4 gap-3 pt-7'>
                                {product_Details.map((item, i) => (
                                    <Image
                                        src={item}
                                        alt='product-details'
                                        height={200}
                                        width={200}
                                        className='w-auto h-[140px]'
                                        key={i}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <h1 className='text-5xl leading-[57px] font-extrabold SF_Pro'>ASUS Vivobook S 16 OLED S5606MA-MX951WS</h1>
                            <p className='pt-4 text-[#232323] text-base'>ASUS Vivobook S 16 OLED, AI Powered Laptop, Intel Evo Core Ultra 9 185H (16GB/1TB/Intel Arc Grph/40.64 cms (16) 3.2K/Win 11 Hm) S5606MA-MX951WS</p>
                            <div className='text-[#FDCE15] pt-5 flex gap-x-[5px]'>
                                <PiStarFill size={20} />
                                <PiStarFill size={20} />
                                <PiStarFill size={20} />
                                <PiStarFill size={20} />
                                <PiStarFill size={20} />
                            </div>
                            <h3 className='flex items-end gap-x-2.5 text-[40px] pt-2.5 leading-[47px] font-bold SF_Pro'>
                                ₹129,990.00
                                <p className='text-sm text-[#8B8B8B] font-normal SF_Pro'>(inc. of All taxes)</p>
                            </h3>
                            <div className='flex items-center gap-x-[15px] pt-2.5'>
                                <del className='text-xl text-[#8B8B8B] font-normal SF_Pro'>₹100,990.00</del>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebLayout>
    )
}

export default ProductDetails;
