import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='sm:h-[503px] h-full bg-white sm:pt-[100px] pt-9 pb-[62px] relative'>
      <div className='w-full max-w-[1300px] h-full mx-auto px-5'>
        {/* Top Section */}
        <div className='flex flex-col md:flex-row sm:gap-10 gap-5 md:gap-x-7'>
          {/* Logo and Description */}
          <div>
            <Image
              src="/assets/images/logo.png"
              alt='logo image'
              height={300}
              width={300}
              className='w-auto sm:h-[50px] h-8 cursor-pointer object-cover'
            />
            <p className='text-[#4D4D4D] text-base font-medium max-w-[440px] sm:pt-[30px] pt-2.5'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          {/* Footer Links */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7'>
            {/* Account Section */}
            <div>
              <h3 className='font-bold sm:text-lg text-md text-[#2B2A29]'>Account</h3>
              <div className='sm:pt-[25px] pt-3 text-[#4D4D4D] text-base space-y-3'>
                <p className='cursor-pointer'>My Account</p>
                <p className='cursor-pointer'>Order Status</p>
                <p className='cursor-pointer'>My Products</p>
              </div>
            </div>

            {/* Support Section */}
            <div>
              <h3 className='font-bold sm:text-lg text-md text-[#2B2A29]'>Support</h3>
              <div className='sm:pt-[25px] pt-3 text-[#4D4D4D] text-base space-y-3'>
                <p className='cursor-pointer'>Support Home</p>
                <p className='cursor-pointer'>Technical Support</p>
                <p className='cursor-pointer'>Returns</p>
              </div>
            </div>

            {/* Our Company Section */}
            <div>
              <h3 className='font-bold sm:text-lg text-md text-[#2B2A29]'>Our Company</h3>
              <div className='sm:pt-[25px] pt-3 text-[#4D4D4D] text-base space-y-3'>
                <p className='cursor-pointer'>Who We Are</p>
                <p className='cursor-pointer'>Careers</p>
                <p className='cursor-pointer'>Trial Software Downloads</p>
                <p className='cursor-pointer'>Customer Stories</p>
              </div>
            </div>

            {/* Connect With Us Section */}
            <div>
              <h3 className='font-bold sm:text-lg text-md text-[#2B2A29]'>Connect With Us</h3>
              <div className='sm:pt-[25px] pt-3 text-[#4D4D4D] text-base space-y-3'>
                <p className='cursor-pointer'>Community</p>
                <p className='cursor-pointer'>Contact Us</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='flex flex-wrap sm:justify-center sm:pt-0 pt-8 md:justify-start text-[14px] sm:absolute bottom-10 gap-x-10 text-center md:text-left'>
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
