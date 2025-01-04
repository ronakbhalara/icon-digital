
"use client"
import React, { useState } from 'react';
import WebLayout from '../../Layout/WebLayout';
import Image from 'next/image';

const Support = () => {
    const support_image = [
        "/assets/images/support-image.png",
        "/assets/images/support-image.png",
        "/assets/images/support-image.png",
    ];

    const [formData, setFormData] = useState({
        productModelNo: '',
        productSerialNo: '',
        billingName: '',
        billingDate: '',
        contactNo: '',
        problemDiscuss: '',
        issueType: [],
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        const { value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            issueType: prevState.issueType.includes(value)
                ? prevState.issueType.filter((issue) => issue !== value)
                : [...prevState.issueType, value],
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.productModelNo) newErrors.productModelNo = 'Product Model No is required';
        if (!formData.productSerialNo) newErrors.productSerialNo = 'Product Serial No is required';
        if (!formData.billingName) newErrors.billingName = 'Billing Name is required';
        if (!formData.billingDate) newErrors.billingDate = 'Billing Date is required';
        if (!formData.contactNo) newErrors.contactNo = 'Contact No is required';
        if (!formData.issueType.length) newErrors.issueType = 'Please select at least one issue type';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateForm();
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Form Data:', formData);
            alert('Form submitted successfully!');
        }
    };

    return (
        <WebLayout>
            <div className='w-full max-w-[1200px] mx-auto sm:px-0 px-4'>
                <div className='flex justify-center text-center pt-10'>
                    <h1 className='sm:w-full sm:max-w-[500px] w-auto sm:text-4xl text-2xl text-[#2B2A29] font-semibold'>
                        Welcome to Icon Digital Customer Support
                    </h1>
                </div>
                <div className='sm:grid grid-cols-3 sm:pt-12 pt-8 pb-8 border-b border-[#DCDCDC] sm:gap-x-14 gap-x-8 flex overflow-x-auto'>
                    {support_image.map((item, i) => (
                        <Image
                            src={item}
                            alt='support image'
                            height={270}
                            width={380}
                            className='sm:h-[262px] h-[200px] w-auto'
                            key={i}
                        />
                    ))}
                </div>

                <div className='pt-12'>
                    <div className='flex justify-center text-center'>
                        <div>
                            <h3 className='text-center text-[#232323] font-semibold text-xl'>Icon Digital Laptop Support</h3>
                            <p className='sm:w-full sm:max-w-[650px] sm:pt-5 pt-2 w-auto text-[#4D4D4D] text-base'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 pt-11'>
                        <div className='shadow-[0px_4px_10px_0px_#2323231A] p-5 h-auto bg-[#F9F9F9] border border-[#E9E9E9] rounded-2xl'>
                            <form onSubmit={handleSubmit} className="">
                                {/* Product Model No */}
                                <div className="mb-4">
                                    <label htmlFor="productModelNo" className="block text-gray-700 text-sm font-bold mb-2">
                                        Product Model No
                                    </label>
                                    <input
                                        name="productModelNo"
                                        type="text"
                                        value={formData.productModelNo}
                                        onChange={handleChange}
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                        placeholder="E4432EGTYH"
                                    />
                                    {errors.productModelNo && <p className="text-red-500 text-xs italic">{errors.productModelNo}</p>}
                                </div>

                                {/* Product Serial No */}
                                <div className="mb-4">
                                    <label htmlFor="productSerialNo" className="block text-gray-700 text-sm font-bold mb-2">
                                        Product Serial No
                                    </label>
                                    <input
                                        name="productSerialNo"
                                        type="text"
                                        value={formData.productSerialNo}
                                        onChange={handleChange}
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                        placeholder="156458-216574-232"
                                    />
                                    {errors.productSerialNo && <p className="text-red-500 text-xs italic">{errors.productSerialNo}</p>}
                                </div>

                                {/* Billing Name and Date */}
                                <div className="flex space-x-4 mb-4">
                                    <div className="w-1/2">
                                        <label htmlFor="billingName" className="block text-gray-700 text-sm font-bold mb-2">
                                            Billing Name
                                        </label>
                                        <input
                                            name="billingName"
                                            type="text"
                                            value={formData.billingName}
                                            onChange={handleChange}
                                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                            placeholder="Tushar Patel"
                                        />
                                        {errors.billingName && <p className="text-red-500 text-xs italic">{errors.billingName}</p>}
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="billingDate" className="block text-gray-700 text-sm font-bold mb-2">
                                            Billing Date
                                        </label>
                                        <input
                                            name="billingDate"
                                            type="date"
                                            value={formData.billingDate}
                                            onChange={handleChange}
                                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                        />
                                        {errors.billingDate && <p className="text-red-500 text-xs italic">{errors.billingDate}</p>}
                                    </div>
                                </div>

                                {/* Contact No */}
                                <div className="mb-4">
                                    <label htmlFor="contactNo" className="block text-gray-700 text-sm font-bold mb-2">
                                        Contact No
                                    </label>
                                    <input
                                        name="contactNo"
                                        type="text"
                                        value={formData.contactNo}
                                        onChange={handleChange}
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                        placeholder="+91 9853178531"
                                    />
                                    {errors.contactNo && <p className="text-red-500 text-xs italic">{errors.contactNo}</p>}
                                </div>

                                {/* Problem Discuss */}
                                <div className="mb-4">
                                    <label htmlFor="problemDiscuss" className="block text-gray-700 text-sm font-bold mb-2">
                                        Problem Discuss
                                    </label>
                                    <textarea
                                        name="problemDiscuss"
                                        value={formData.problemDiscuss}
                                        onChange={handleChange}
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                        placeholder="Message"
                                    />
                                </div>

                                {/* Issue Type */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Issue Type
                                    </label>
                                    <div className="flex flex-wrap gap-4">
                                        {['Power Off', 'Accessories Not Working', 'Speed Issue'].map((issue, index) => (
                                            <label key={index} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    value={issue}
                                                    checked={formData.issueType.includes(issue)}
                                                    onChange={handleCheckboxChange}
                                                    className="mr-2 leading-tight"
                                                />
                                                <span className="text-gray-700">{issue}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.issueType && <p className="text-red-500 text-xs italic">{errors.issueType}</p>}
                                </div>

                                {/* Submit Button */}
                                <div className="flex items-center justify-center">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </WebLayout>
    );
};

export default Support;
