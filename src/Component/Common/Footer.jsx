import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-[603px] bg-white pt-[100px] pb-[62px] relative'>
      <div className='w-full max-w-[1300px] mx-auto '>
        <div className='flex gap-x-7'>
          <div className=''>
            <Image
              src="/assets/images/logo.png"
              alt='logo image'
              height={300}
              width={300}
              className='w-[auto] h-[50px] cursor-pointer object-cover'
            />
            <p className='text-[#4D4D4D] text-base_40/6 font-medium w-full max-w-[440px] pt-[30px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className='grid grid-cols-4'>
            <div>
              <h3 className='font-bold text-lg_40/6 text-[#2B2A29] SF_Pro'>Account</h3>
              <div className='pt-[25px] text-[#4D4D4D] text-base_40/6 space-y-3'>
                <p className='cursor-pointer'>My Account</p>
                <p className='cursor-pointer'>Order Status</p>
                <p className='cursor-pointer'>My Products</p>
              </div>
            </div>
            <div>
              <h3 className='font-bold text-lg_40/6 text-[#2B2A29] SF_Pro'>Support</h3>
              <div className='pt-[25px] text-[#4D4D4D] text-base_40/6 space-y-3'>
                <p className='cursor-pointer'>Support Home</p>
                <p className='cursor-pointer'>Technical Support</p>
                <p className='cursor-pointer'>Returns</p>
              </div>
            </div>
            <div className='mr-[30px]'>
              <h3 className='font-bold text-lg_40/6 text-[#2B2A29] SF_Pro'>Our Company</h3>
              <div className='pt-[25px] text-[#4D4D4D] text-base_40/6 space-y-3'>
                <p className='cursor-pointer'>Who We Are</p>
                <p className='cursor-pointer'>Careers</p>
                <p className='cursor-pointer'>Trial Software Downloads</p>
                <p className='cursor-pointer'>Customer Stories</p>
              </div>
            </div>
            <div>
              <h3 className='font-bold text-lg_40/6 text-[#2B2A29] SF_Pro'>Connect With Us</h3>
              <div className='pt-[25px] text-[#4D4D4D] text-base_40/6 space-y-3'>
                <p className='cursor-pointer'>Community</p>
                <p className='cursor-pointer'>Contact Us</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex absolute bottom-10 gap-x-10'>
          <p>Copyrights 2025 Icondigital.</p>
          <p>Terms Of Sale</p>
          <p>Privacy Statement</p>
          <p>Cookie, Ads & Emails</p>
          <p>Legal & Regulatory</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
