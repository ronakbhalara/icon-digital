"use client"
import React, { useState } from 'react'
import WebLayout from '../Layout/WebLayout'
import Image from 'next/image'
import { HiChevronRight } from "react-icons/hi2";
import { PiPencilSimpleLineLight, PiStarFill } from 'react-icons/pi';
import Select from 'react-select';

const page = () => {
    const [activeSection, setActiveSection] = useState("MyOrder");
    const [editableField, setEditableField] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState(null);

    const [profile, setProfile] = useState({
        ProfilefirstName: "",
        ProfilelastName: "",
        Profileemail: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const toggleEditableField = (field) => {
        setEditableField(editableField === field ? null : field);
    };



    const countries = [
        { value: 'US', label: 'United States' },
        { value: 'IN', label: 'India' },
        { value: 'GB', label: 'United Kingdom' },
        { value: 'FR', label: 'France' },
        { value: 'JP', label: 'Japan' },
        // Add more countries here...
    ];

    const countryStateData = {
        US: [
            { value: 'CA', label: 'California' },
            { value: 'TX', label: 'Texas' },
            { value: 'NY', label: 'New York' },
        ],
        IN: [
            { value: 'MH', label: 'Maharashtra' },
            { value: 'KA', label: 'Karnataka' },
            { value: 'DL', label: 'Delhi' },
        ],
        GB: [
            { value: 'ENG', label: 'England' },
            { value: 'SCT', label: 'Scotland' },
            { value: 'WLS', label: 'Wales' },
        ],
    };

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        setStates(countryStateData[selectedOption.value] || []);
        setSelectedState(null);
    };

    const handleStateChange = (selectedOption) => {
        setSelectedState(selectedOption);
    };

    const giftCard = [
        {
            image: "/assets/images/gift.png",
            title: "Icon Digital Gift Card",
            price: 500
        },
        {
            image: "/assets/images/gift.png",
            title: "Icon Digital Gift Card",
            price: 500
        },
        {
            image: "/assets/images/gift.png",
            title: "Icon Digital Gift Card",
            price: 500
        },
        {
            image: "/assets/images/gift.png",
            title: "Icon Digital Gift Card",
            price: 500
        },
        {
            image: "/assets/images/gift.png",
            title: "Icon Digital Gift Card",
            price: 500
        },
    ]

    const CouponCard = [
        {
            image: "/assets/images/gift.png",
            title: "Icon Digital Gift Card",
            price: 500,
            ExpiredDate: "20 / 12 / 2024"
        },
        {
            image: "/assets/images/gift.png",
            title: "Icon Digital Gift Card",
            price: 500,
            ExpiredDate: "20 / 12 / 2024"
        },
        {
            image: "/assets/images/gift.png",
            title: "Icon Digital Gift Card",
            price: 500,
            ExpiredDate: "20 / 12 / 2024"
        },
    ]

    const data = [
        { transactionNo: "10911437628", productName: "Asus VivoBook s15", date: "25/11/2024", time: "10:57", price: "₹51,000" },
        { transactionNo: "10911437630", productName: "Asus VivoBook s15", date: "25/11/2024", time: "10:57", price: "₹51,000" },
        { transactionNo: "10911437850", productName: "Asus VivoBook s15", date: "25/11/2024", time: "10:57", price: "₹51,000" },
    ];

    return (
        <WebLayout>
            <div className='w-full max-w-[1200px] pb-10 mx-auto pt-5 sm:grid grid-cols-7 gap-x-5 sm:px-0 px-4 z-10'>
                <div className='col-span-2'>
                    <div className='border border-[#e3e1e1] px-5 py-2.5 gap-x-5 flex items-center'>
                        <Image
                            src="/assets/images/user-image.png"
                            alt="user image"
                            className="h-9 w-auto"
                            height={50}
                            width={50}
                        />
                        <div>
                            <p className='text-sm text-[#2B2A29]'>Hello,</p>
                            <p className='text-[#14519E] text-base font-medium '>Jigar Patel</p>
                        </div>
                    </div>
                    <div className='border mt-4 border-[#e3e1e1]'>
                        <div className='px-5 border-b border-[#e3e1e1] py-2.5 gap-x-5 justify-between flex items-center'>
                            <div className='flex items-center gap-x-4 w-full'>
                                <Image
                                    src="/assets/images/shopping-cart-check.svg"
                                    alt="user image"
                                    className="h-5 w-auto"
                                    height={50}
                                    width={50}
                                />
                                {/* <p className='text-[#5C5C5C] text-base font-medium'>My Order</p> */}
                                <p
                                    className={`py-2.5 pl-9 cursor-pointer text-base w-full font-medium ${activeSection === "MyOrder"
                                        ? "text-[#14519E] bg-[#00A0E31A]"
                                        : "text-[#9A9A9A]"
                                        }`}
                                    onClick={() => setActiveSection("MyOrder")}
                                >
                                    My Order
                                </p>
                            </div>
                            <HiChevronRight className='text-[#9A9A9A]' size={20} />
                        </div>
                        <div className='px-5 py-2.5 h-48 border-b border-[#e3e1e1]'>
                            <div className='flex items-center gap-x-4 py-2.5 cursor-pointer'
                            >
                                <Image
                                    src="/assets/images/user-1.svg"
                                    alt="user image"
                                    className="h-5 w-auto"
                                    height={50}
                                    width={50}
                                />
                                <p className='text-[#5C5C5C] text-base font-medium'>Account Setting</p>
                            </div>
                            <p
                                className={`py-2.5 pl-9 cursor-pointer text-base font-medium ${activeSection === "Profile Information"
                                    ? "text-[#14519E] bg-[#00A0E31A]"
                                    : "text-[#9A9A9A]"
                                    }`}
                                onClick={() => setActiveSection("Profile Information")}
                            >
                                Profile Information
                            </p>
                            <p
                                className={`py-2.5 pl-9 cursor-pointer text-base font-medium ${activeSection === "Manage Address"
                                    ? "text-[#14519E] bg-[#00A0E31A]"
                                    : "text-[#9A9A9A]"
                                    }`}
                                onClick={() => setActiveSection("Manage Address")}
                            >
                                Manage Address
                            </p>
                        </div>
                        <div className='px-5 py-2.5 border-b border-[#e3e1e1]'>
                            <div className='flex items-center gap-x-4 py-2.5 cursor-pointer'>
                                <Image
                                    src="/assets/images/Discount-Coupon.svg"
                                    alt="user image"
                                    className="h-5 w-auto"
                                    height={50}
                                    width={50}
                                />
                                <p className='text-[#5C5C5C] text-base font-medium'>My Stuff</p>
                            </div>
                            <p
                                className={`py-2.5 pl-9 cursor-pointer text-base font-medium ${activeSection === "MyCoupon"
                                    ? "text-[#14519E] bg-[#00A0E31A]"
                                    : "text-[#9A9A9A]"
                                    }`}
                                onClick={() => setActiveSection("MyCoupon")}
                            >
                                My Coupon
                            </p>

                            <p
                                className={`py-2.5 pl-9 cursor-pointer text-base font-medium ${activeSection === "MyWallet"
                                    ? "text-[#14519E] bg-[#00A0E31A]"
                                    : "text-[#9A9A9A]"
                                    }`}
                                onClick={() => setActiveSection("MyWallet")}
                            >
                                My Wallet
                            </p>

                            <p
                                className={`py-2.5 pl-9 cursor-pointer text-base font-medium ${activeSection === "Vouchers"
                                    ? "text-[#14519E] bg-[#00A0E31A]"
                                    : "text-[#9A9A9A]"
                                    }`}
                                onClick={() => setActiveSection("Vouchers")}
                            >
                                Vouchers
                            </p>
                        </div>
                        <div className='px-5 py-2.5'>
                            <div className='flex items-center gap-x-4 py-2.5 cursor-pointer'>
                                <Image
                                    src="/assets/images/logout.svg"
                                    alt="user image"
                                    className="h-5 w-auto"
                                    height={50}
                                    width={50}
                                />
                                <p className='text-[#5C5C5C] text-base font-medium'>Log Out</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Details Section */}
                <div className="col-span-5 border sm:mt-0 mt-5 border-[#e3e1e1] overflow-y-auto p-5">

                    {activeSection === "MyOrder" && (
                        <div className='w-full max-w-[600px] pt-3'>
                            <h3 className='text-base font-medium text-[#2B2A29]'>
                                MyOrder
                            </h3>
                        </div>
                    )}
                    {activeSection === "Profile Information" && (
                        <div className='w-full max-w-[600px] pt-3'>
                            <div className='flex justify-between'>
                                <h3 className='text-base font-medium text-[#2B2A29]'>
                                    Profile Information
                                </h3>
                                <PiPencilSimpleLineLight
                                    className="text-[#14519E] cursor-pointer"
                                    size={20}
                                    onClick={() =>
                                        setEditableField(editableField === "all" ? null : "all")
                                    }
                                />
                            </div>
                            <div className='pt-5 grid sm:grid-cols-2 grid-cols-1 gap-x-4'>
                                <div className="w-full">
                                    <label htmlFor="firstName" className="block text-[#717171] text-sm mb-2">
                                        First Name
                                    </label>
                                    <input
                                        name="ProfilefirstName"
                                        type="text"
                                        className="appearance-none border rounded w-full py-2 px-3 text-[#232323] leading-tight focus:outline-none"
                                        placeholder="First Name"
                                        value={profile.ProfilefirstName}
                                        disabled={editableField !== "ProfilefirstName" && editableField !== "all"}
                                        onChange={handleInputChange}
                                        onClick={() => toggleEditableField("ProfilefirstName")}
                                    />
                                </div>
                                <div className="w-full sm:pt-0 pt-4">
                                    <label htmlFor="lastName" className="block text-[#717171] text-sm mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        name="ProfilelastName"
                                        type="text"
                                        className="appearance-none border rounded w-full py-2 px-3 text-[#232323] leading-tight focus:outline-none"
                                        placeholder="Last Name"
                                        value={profile.ProfilelastName}
                                        disabled={editableField !== "ProfilelastName" && editableField !== "all"}
                                        onChange={handleInputChange}
                                        onClick={() => toggleEditableField("ProfilelastName")}
                                    />
                                </div>
                            </div>

                            <div className='pt-5'>
                                <label className="block text-[#717171] text-sm mb-2">
                                    Your Gender
                                </label>
                                <div className="flex gap-4">
                                    <label className="flex items-center text-[#C0C0C0] text-sm">
                                        <input
                                            type="radio"
                                            name="option"
                                            value="option1"
                                            className="mr-2 accent-[#14519E]"
                                        />
                                        Male
                                    </label>
                                    <label className="flex items-center text-[#C0C0C0] text-sm">
                                        <input
                                            type="radio"
                                            name="option"
                                            value="option2"
                                            className="mr-2 accent-[#14519E]"
                                        />
                                        Female
                                    </label>
                                </div>
                            </div>

                            <div className='flex justify-between pt-5'>
                                <h3 className='text-base font-medium text-[#2B2A29]'>
                                    Email Address
                                </h3>
                                <PiPencilSimpleLineLight
                                    className="text-[#14519E] cursor-pointer"
                                    size={20}
                                    onClick={() =>
                                        setEditableField(editableField === "all" ? null : "all")
                                    }
                                />
                            </div>
                            <div className='pt-5'>
                                <div className="max-w-[292px] w-full">
                                    <label htmlFor="email" className="block text-[#717171] text-sm mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        name="Profileemail"
                                        type="text"
                                        className="appearance-none border rounded w-full py-2 px-3 text-[#232323] leading-tight focus:outline-none"
                                        placeholder="Enter Your Email"
                                        value={profile.Profileemail}
                                        disabled={editableField !== "Profileemail" && editableField !== "all"}
                                        onChange={handleInputChange}
                                        onClick={() => toggleEditableField("Profileemail")}
                                    />
                                </div>
                            </div>


                            <div className='flex justify-between pt-5'>
                                <h3 className='text-base font-medium text-[#2B2A29]'>
                                    Mobile Number
                                </h3>
                                <PiPencilSimpleLineLight
                                    className="text-[#14519E] cursor-pointer"
                                    size={20}
                                    onClick={() =>
                                        setEditableField(editableField === "all" ? null : "all")
                                    }
                                />
                            </div>
                            <div className='pt-5'>
                                <div className="max-w-[292px] w-full">
                                    <label htmlFor="number" className="block text-[#717171] text-sm mb-2">
                                        Mobile Number
                                    </label>
                                    <input
                                        name="number"
                                        type="number"
                                        className="appearance-none border rounded w-full py-2 px-3 text-[#232323] leading-tight focus:outline-none"
                                        placeholder="Enter Your Number"
                                        value={profile.number}
                                        disabled={editableField !== "number" && editableField !== "all"}
                                        onChange={handleInputChange}
                                        onClick={() => toggleEditableField("number")}
                                    />
                                </div>
                            </div>

                            <div className='flex justify-end sm:pt-10 pt-5'>
                                <button
                                    type="submit"
                                    className="bg-[#00A0E3] w-full max-w-[400px] rounded-[10px] text-white font-medium py-3  px-4 focus:outline-none "
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    )}

                    {activeSection === "Manage Address" && (
                        <div className='w-full max-w-[600px] pt-3'>
                            <div className='flex justify-between'>
                                <h3 className='text-base font-medium text-[#2B2A29]'>
                                    Manage Address
                                </h3>
                                <PiPencilSimpleLineLight
                                    className="text-[#14519E] cursor-pointer"
                                    size={20}
                                    onClick={() =>
                                        setEditableField(editableField === "all" ? null : "all")
                                    }
                                />
                            </div>
                            <div className='pt-5 grid sm:grid-cols-2 grid-cols-1 gap-x-4'>
                                <div className="w-full">
                                    <label htmlFor="firstName" className="block text-[#717171] text-sm mb-2">
                                        First Name
                                    </label>
                                    <input
                                        name="firstName"
                                        type="text"
                                        className="appearance-none border rounded w-full py-2 px-3 text-[#232323] leading-tight focus:outline-none"
                                        placeholder="First Name"
                                        value={profile.firstName}
                                        disabled={editableField !== "firstName" && editableField !== "all"}
                                        onChange={handleInputChange}
                                        onClick={() => toggleEditableField("firstName")}
                                    />
                                </div>
                                <div className="w-full sm:pt-0 pt-4">
                                    <label htmlFor="lastName" className="block text-[#717171] text-sm mb-2">
                                        Mobile Number
                                    </label>
                                    <input
                                        name="number"
                                        type="number"
                                        className="appearance-none border rounded w-full py-2 px-3 text-[#232323] leading-tight focus:outline-none"
                                        placeholder="Enter Your Number"
                                        value={profile.number}
                                        disabled={editableField !== "number" && editableField !== "all"}
                                        onChange={handleInputChange}
                                        onClick={() => toggleEditableField("number")}
                                    />
                                </div>
                            </div>

                            <div className='flex justify-between pt-5'>
                                <label htmlFor="Address Line" className="block text-[#717171] text-sm mb-2">
                                    Address Line
                                </label>
                                <PiPencilSimpleLineLight
                                    className="text-[#14519E] cursor-pointer"
                                    size={20}
                                    onClick={() =>
                                        setEditableField(editableField === "all" ? null : "all")
                                    }
                                />
                            </div>
                            <div className="w-full">
                                <input
                                    name="Address"
                                    type="text"
                                    className="appearance-none border rounded w-full py-2 px-3 text-[#232323] leading-tight focus:outline-none"
                                    placeholder="Enter Your Address"
                                    value={profile.Address}
                                    disabled={editableField !== "Address" && editableField !== "all"}
                                    onChange={handleInputChange}
                                    onClick={() => toggleEditableField("Address")}
                                />
                            </div>

                            <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-4'>
                                <div className='pt-5'>
                                    <label htmlFor="Country" className="block text-[#717171] text-sm mb-2">
                                        Country
                                    </label>
                                    <Select
                                        options={countries}
                                        value={selectedCountry}
                                        onChange={handleCountryChange}
                                        placeholder="Select a country"
                                    />
                                </div>

                                <div className='pt-5'>
                                    <label htmlFor="Country" className="block text-[#717171] text-sm mb-2">
                                        State
                                    </label>
                                    <Select
                                        options={states}
                                        value={selectedState}
                                        onChange={handleStateChange}
                                        placeholder="Select a state"
                                    />
                                </div>
                            </div>

                            <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-4'>
                                <div className='pt-5'>
                                    <label htmlFor="Country" className="block text-[#717171] text-sm mb-2">
                                        City
                                    </label>
                                    <input
                                        name="city"
                                        type="text"
                                        className="appearance-none border rounded w-full py-2 px-3 text-[#232323] leading-tight focus:outline-none"
                                        placeholder="Enter Your City"
                                    />
                                </div>

                                <div className='pt-5'>
                                    <label htmlFor="Country" className="block text-[#717171] text-sm mb-2">
                                        Zip Code
                                    </label>
                                    <input
                                        name="zipcode"
                                        type="number"
                                        className="appearance-none border rounded w-full py-2 px-3 text-[#232323] leading-tight focus:outline-none"
                                        placeholder="Enter Your Zip Number"
                                    />
                                </div>

                            </div>


                            <div className='flex justify-end sm:pt-28 pt-8'>
                                <button
                                    type="submit"
                                    className="bg-[#00A0E3] w-full max-w-[400px] rounded-[10px] text-white font-medium py-3  px-4 focus:outline-none "
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    )}

                    {activeSection === "Vouchers" && (
                        <div className='sm:p-3 p-2 grid sm:grid-cols-3 grid-cols-1 gap-5'>
                            {giftCard.map((item, i) => (
                                <div key={i}>
                                    <Image
                                        src={item?.image}
                                        alt=''
                                        className=''
                                        height={250}
                                        width={330}
                                    />
                                    <p className='pt-1 text-[#2B2A29] font-medium SF_Pro'>{item?.title}</p>
                                    <div className='flex items-end gap-x-3'>
                                        <p className='bg-linear-gradient mt-1 px-1 inline-flex items-center  text-white gap-x-1 rounded'>
                                            4.5
                                            <PiStarFill className='text-white' size={14} />
                                        </p>
                                        <p className='text-base text-[#4D4D4D]'>(1,127)</p>
                                    </div>
                                    <p className='text-xl text-[#4D4D4D] pt-2'>₹ {item?.price}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeSection === "MyCoupon" && (
                        <div className='sm:p-3 p-2 grid sm:grid-cols-3 grid-cols-1 gap-5'>
                            {CouponCard.map((item, i) => (
                                <div key={i}>
                                    <Image
                                        src={item?.image}
                                        alt=''
                                        className=''
                                        height={250}
                                        width={330}
                                    />
                                    <p className='pt-1 text-[#2B2A29] font-medium text-lg SF_Pro'>{item?.title}</p>
                                    <p className='pt-1 text-[#4D4D4D] text-sm gap-x-1'>
                                        Expired Date : {item.ExpiredDate}
                                    </p>
                                    <p className='text-lg text-[#4D4D4D] pt-2'>₹ {item?.price}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeSection === "MyWallet" && (
                        <div className='sm:p-3'>
                            <div className='flex justify-between pb-4 border-b border-[#D9D9D9]'>
                                <p className='text-[#2B2A29] text-lg font-medium'>
                                    My Wallet
                                </p>
                                <p className='gradient-text text-lg font-bold'>
                                    ₹30,780
                                </p>
                            </div>
                            <div className="overflow-x-auto pt-5">
                                <table className="min-w-full border-collapse border border-gray-300">
                                    <thead className="bg-gray-100 border-b border-[#d7d7d7]">
                                        <tr>
                                            <th className="px-4 py-2 text-left font-medium text-[#2B2A29]">Sr.No</th>
                                            <th className="px-4 py-2 text-left font-medium text-[#2B2A29]">Transaction No</th>
                                            <th className="px-4 py-2 text-left font-medium text-[#2B2A29]">Product Name</th>
                                            <th className="px-4 py-2 text-left font-medium text-[#2B2A29]">Date</th>
                                            <th className="px-4 py-2 text-left font-medium text-[#2B2A29]">Time</th>
                                            <th className="px-4 py-2 text-left font-medium text-[#2B2A29]">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => (
                                            <tr key={item.transactionNo} className="hover:bg-gray-50 border-b border-[#d7d7d7]">
                                                <td className="px-4 py-2 text-[#7E7E7E] text-sm text-center">{index + 1}.</td>
                                                <td className="px-4 py-2 text-[#7E7E7E] text-sm ">{item.transactionNo}</td>
                                                <td className="px-4 py-2 text-[#7E7E7E] text-sm">{item.productName}</td>
                                                <td className="px-4 py-2 text-[#7E7E7E] text-sm">{item.date}</td>
                                                <td className="px-4 py-2 text-[#7E7E7E] text-sm">{item.time}</td>
                                                <td className="px-4 py-2 text-[#7E7E7E] text-sm">{item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </WebLayout>
    )
}

export default page
