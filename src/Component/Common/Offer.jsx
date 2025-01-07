import React from 'react'
import { PiPhone } from 'react-icons/pi'

const Offer = () => {
    return (
        <div className='bg-[#14519E] py-2.5 text-center text-white sm:text-sm text-[10px] sm:flex items-center justify-center sm:gap-x-2.5'>
            <span>  Welcome Offer</span> <p>Up to ₹ 45,000 Cashback, Bonus on Laptop Exchange.</p>
            <div className="flex items-center justify-end pt-2 sm:hidden gap-2">
                <PiPhone size={15} />
                <span className="text-[10px] pr-3">+91 85954 23549</span>
            </div>
        </div>
    )
}

export default Offer
