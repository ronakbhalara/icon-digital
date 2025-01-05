"use client"
import React, { useState } from 'react'
import WebLayout from '../../Layout/WebLayout'
import Image from 'next/image'
import { HiChevronRight } from "react-icons/hi2";
import { PiPencilSimpleLineLight } from 'react-icons/pi';
const page = () => {
    const [activeSection, setActiveSection] = useState("Profile Information");
    const [editableField, setEditableField] = useState(null);
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
    return (
        <WebLayout>
            <div className='w-full max-w-[1200px] pb-10 mx-auto pt-5 grid grid-cols-7 gap-x-5 sm:px-0 px-4 z-10'>
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
                            <div className='flex items-center gap-x-4'>
                                <Image
                                    src="/assets/images/shopping-cart-check.svg"
                                    alt="user image"
                                    className="h-5 w-auto"
                                    height={50}
                                    width={50}
                                />
                                <p className='text-[#5C5C5C] text-base font-medium'>My Order</p>
                            </div>
                            <HiChevronRight className='text-[#9A9A9A]' size={20} />
                        </div>
                        <div className='px-5 py-2.5 h-48 border-b border-[#e3e1e1]'>
                            <div className='flex items-center gap-x-4 py-2.5 cursor-pointer'
                                onClick={() => setActiveSection("Profile Information")}
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
                            <p className='py-2.5 pl-9 cursor-pointer text-[#9A9A9A] text-base font-medium'>My Coupon</p>
                            <p className='py-2.5 pl-9 text-[#9A9A9A] cursor-pointer text-base font-medium'>My Wallet</p>
                            <p className='py-2.5 pl-9 text-[#9A9A9A] cursor-pointer text-base font-medium'>Vouchers</p>
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
                <div className="col-span-5 border border-[#e3e1e1] p-5">
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
                            <div className='pt-5 flex gap-x-4'>
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
                                <div className="w-full">
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
                                <div className="flex     gap-4">
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

                            <div className='flex justify-end pt-10'>
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
                            <div className='pt-5 flex gap-x-4'>
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
                                <div className="w-full">
                                    <label htmlFor="lastName" className="block text-[#717171] text-sm mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        name="lastName"
                                        type="text"
                                        className="appearance-none border rounded w-full py-2 px-3 text-[#232323] leading-tight focus:outline-none"
                                        placeholder="Last Name"
                                        value={profile.lastName}
                                        disabled={editableField !== "lastName" && editableField !== "all"}
                                        onChange={handleInputChange}
                                        onClick={() => toggleEditableField("lastName")}
                                    />
                                </div>
                            </div>

                            <div className='pt-5'>
                                <label className="block text-[#717171] text-sm mb-2">
                                    Your Gender
                                </label>
                                <div className="flex     gap-4">
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
                                        name="email"
                                        type="text"
                                        className="appearance-none border rounded w-full py-2 px-3 text-[#232323] leading-tight focus:outline-none"
                                        placeholder="Enter Your Email"
                                        value={profile.email}
                                        disabled={editableField !== "email" && editableField !== "all"}
                                        onChange={handleInputChange}
                                        onClick={() => toggleEditableField("email")}
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

                            <div className='flex justify-end pt-10'>
                                <button
                                    type="submit"
                                    className="bg-[#00A0E3] w-full max-w-[400px] rounded-[10px] text-white font-medium py-3  px-4 focus:outline-none "
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </WebLayout>
    )
}

export default page
