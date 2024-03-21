'use client'

import React from 'react'
import Header from '../../components/Header';
import { GrLocation } from 'react-icons/gr';
import { IoSearch } from 'react-icons/io5';

const Page = () => {
    return (
        <div>
            <Header />
            <div>
                <div className='bg-[#12937C] flex flex-col justify-center items-center mt-10 py-6 text-white ' >
                    <h1 className='text-[1.8rem] font-[700] ' >Get Matched with Local Professtionals</h1>
                    <p className='text-[1.1rem] font-[300] '>Answer a few questions,and we&apos;ll put you in touch with pros who can help.</p>
                    <div className="flex mt-10 max-md:mt-6 max-md:justify-between max-md:w-[100%] ">
                        <div className="max-md:w-[60%]">
                            <input
                                type="search"
                                className="bg-[#F7F9FB] py-2 px-4 rounded-l-[20px] focus:outline-none pl-10 max-md:w-[100%]"
                                placeholder="Postal Code"
                            />
                            <GrLocation className="ml-2 mt-[-32px] text-gray-600" size={20} />
                        </div>
                        <div className="max-md:w-[40%]">
                            <p
                                className="bg-[#119DED] text-white py-2 text-center max-md:py-[10px] max-md:px-2 px-4 ml-[-17px] max-md:ml-[10px] rounded-[20px] cursor-pointer focus:outline-none max-md:text-[12px]"
                            >
                                GET QUOTES
                            </p>
                        </div>
                    </div>
                </div>
                <div className='p-10'>
                    <h5 className='text-[1.8rem] font-[500] ' >Basement Remodelers in Toronto</h5>
                    <p>Basement Remodelers in Toronto: Trusted professionals specializing in transforming underutilized basement spaces into functional and aesthetically pleasing areas. From creating cozy living spaces to installing home theaters, these experts excel in maximizing the potential of your basement.</p>
                    <div className='flex mt-10 w-full justify-between ' >
                        <div className='flex gap-5' >
                            <div className='flex gap-5 bg-[#12937C1A] border-[1px] border-[#12937C] p-2 rounded-lg '  >
                                <p>Toronto/50ml</p>
                                <span>X</span>
                            </div>
                            <div className='flex gap-5 bg-[#12937C1A] border-[1px] border-[#12937C] p-2 rounded-lg '  >
                                <p>Toronto/50ml</p>
                                <span>X</span>
                            </div>
                            <div className='flex gap-5 bg-[#12937C1A] border-[1px] border-[#12937C] p-2 rounded-lg '  >
                                <p>Toronto/50ml</p>
                                <span>X</span>
                            </div>
                        </div>
                        <div>
                            <div className="w-[100%] max-md:w-[100%]">
                                <input
                                    type="search"
                                    className="bg-[#F7F9FB] py-2 px-4 rounded-l-xl focus:outline-none w-full pl-10 max-md:rounded-r-xl"
                                    placeholder="Search by name or keyword?"
                                />
                                <IoSearch className="ml-2 mt-[-32px] text-gray-600" size={20} />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 mt-10 ' >
                        <div className='w-[30%]' >
                            <div className='bg-[#E8F5F2] p-4 rounded-lg ' >
                                <h5 className='text-[1.3rem] font-[600] '>Location (1)</h5>

                                <input
                                    type="search"
                                    className="bg-[#F7F9FB] border-[1px] border-[#12937C]  mt-4 py-2 px-4 rounded-xl focus:outline-none w-full pl-10 max-md:rounded-r-xl"
                                    placeholder="Search by name or keyword?"
                                />
                                <input
                                    type="search"
                                    className="bg-[#F7F9FB] border-[1px] border-[#12937C] mt-4 py-2 px-4 rounded-xl focus:outline-none w-full pl-10 max-md:rounded-r-xl"
                                    placeholder="Search by name or keyword?"
                                />
                            </div>
                            <div className='bg-[#E8F5F2] p-4 rounded-lg mt-5'>
                                <div>
                                    <h5>Suggested Filter</h5>
                                </div>
                            </div>
                        </div>
                        <div className='w-[70%]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page