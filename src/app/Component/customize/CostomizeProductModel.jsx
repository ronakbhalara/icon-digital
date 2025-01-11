"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CostomizeProductModel({ isModalOpen, setIsModalOpen }) {
    const [isAnimating, setIsAnimating] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        setTimeout(() => setIsAnimating(true), 10); // Delay animation after modal is open
    };

    const closeModal = () => {
        setIsAnimating(false);
        setTimeout(() => setIsModalOpen(false), 300); // Delay modal close to let animation finish
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener("keydown", handleKeyDown);
        } else {
            document.removeEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isModalOpen]);

    const Brand = [
        {
            name: "Acer",
            number: 3
        },
        {
            name: "Acer",
            number: 3
        },
        {
            name: "Acer",
            number: 3
        },
        {
            name: "Acer",
            number: 3
        },
        {
            name: "Acer",
            number: 3
        },
        {
            name: "Acer",
            number: 3
        },
        {
            name: "Acer",
            number: 3
        },
        {
            name: "Acer",
            number: 3
        },
        {
            name: "Acer",
            number: 3
        },
        {
            name: "Acer",
            number: 3
        },
        {
            name: "Acer",
            number: 3
        },
    ]


    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-out ${isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
            <div
                className={`bg-white p-6 z-50 h-[500px] scrollbar-hidden overflow-auto w-[700px] rounded-lg shadow-lg relative transform transition-all duration-300 ease-out ${isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-100"}`}
            >
                {/* Close button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-gray-800"
                >
                    ✖
                </button>

                <div className="flex">
                    <div className="overflow-auto w-[300px] pr-3 border-r border-[#c9c9c9]">
                        <p className="text-base font-semibold text-gray-900">Brand</p>
                        <div className="pt-1">
                            {Brand.map((item, i) => (
                                <div className="py-2.5 border-b border-[#c9c9c9] flex items-center justify-between" key={i}>
                                    <div className="flex items-center gap-x-3">
                                        <div className="h-1 w-1 bg-black rounded-full"></div>
                                        <p className="text-lg text-[#848484]">{item.name}</p>
                                    </div>
                                    <p>{`(${item.number})`}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sm:pt-10 pl-3">
                        <div className="flex items-end gap-x-3 pb-3 mt-3 border-b border-[#e0e0e0]">
                            <Image
                                src="/assets/images/ram.png"
                                alt=""
                                height={100}
                                width={100}
                                className="h-16 w-auto"
                            />
                            <div>
                                <p className="text-[#848484] text-lg">ACER PREDATOR GM7 512GB M.2 NVME GEN4 INTYERNAL SSD (BL-9BWWR - 117) </p>
                                <div className="pt-2 flex justify-between">
                                    <div className="space-x-2">
                                        <input type="number"
                                            className="border outline-none text-center border-[#848484] py-1.5 rounded-md w-20 mt"
                                        />
                                        <button className="bg-orange-500 px-4 py-2 rounded-md text-white">Select</button>
                                    </div>
                                    <div className="flex space-x-1">
                                        <del className="font-semibold text-black text-lg-">₹14,499</del>
                                        <p className="text-orange-500 font-semibold underline"> ₹4,876</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end gap-x-3 pb-3 border-b border-[#e0e0e0]">
                            <Image
                                src="/assets/images/ram.png"
                                alt=""
                                height={100}
                                width={100}
                                className="h-16 w-auto"
                            />
                            <div>
                                <p className="text-[#848484] text-lg">ACER PREDATOR GM7 512GB M.2 NVME GEN4 INTYERNAL SSD (BL-9BWWR - 117) </p>
                                <div className="pt-2 flex justify-between">
                                    <div className="space-x-2">
                                        <input type="number"
                                            className="border outline-none text-center border-[#848484] py-1.5 rounded-md w-20 mt"
                                        />
                                        <button className="bg-orange-500 px-4 py-2 rounded-md text-white">Select</button>
                                    </div>
                                    <div className="flex space-x-1">
                                        <del className="font-semibold text-black text-lg-">₹14,499</del>
                                        <p className="text-orange-500 font-semibold underline"> ₹4,876</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
