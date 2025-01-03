import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { PiHeart, PiPhone, PiShoppingCart, PiUserCircle } from "react-icons/pi";
const Header = () => {

  const header = [
    {
      title: "Laptop",
      url: "/laptop"
    },
    {
      title: "Desktop",
      url: ""
    },
    {
      title: "All In One",
      url: ""
    },
    {
      title: "Monitors",
      url: ""
    },
    {
      title: "Printer",
      url: ""
    },
    {
      title: "Pre-Build PC",
      url: ""
    },
    {
      title: "Accessories & Software",
      url: ""
    },
    {
      title: "Customize Product",
      url: ""
    },
    {
      title: "Support",
      url: ""
    },
  ]
  return (
    <div className='py-[45px] border-b border-[#CECECE] bg-white'>
      <div className='w-full max-w-[1200px] mx-auto'>
        <div className='flex justify-between'>
          <div className='flex gap-2.5 text-[#2B2A29] cursor-pointer'>
            <PiPhone size={20} />
            +91 85954 23549
          </div>
          <Image
            src="https://i.ibb.co/WkgqKCx/logo.png"
            alt="logo image"
            height={70}
            width={150}
            className='cursor-pointer'
          />
          <div className='flex gap-[15px] pt-3 text-[#2B2A29]'>
            <PiHeart size={24} className='cursor-pointer' />
            <PiShoppingCart size={24} className='cursor-pointer' />
            <PiUserCircle size={24} className='cursor-pointer' />
          </div>
        </div>
        <div className='pt-10 flex justify-center'>
          <div className='flex gap-10 text-[#909090] hover:'>
            {header.map((item, i) => (
              <Link
                href={item?.url}
                className='text-base_40'
              >
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
