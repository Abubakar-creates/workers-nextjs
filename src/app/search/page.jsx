'use client'

import React, { useState } from 'react'
import Header from '../../components/Header';
import { GrLocation } from 'react-icons/gr';
import { IoSearch } from 'react-icons/io5';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";
import { FiBox } from "react-icons/fi";
import { MdStar } from "react-icons/md";
import { PiShieldCheckFill } from "react-icons/pi";
import Footer from '@/components/Footer';


const data = {
    suggestedFilters: ['Verified Licence', 'Hired On Helperzz'],
    professionalCategory: ['Architects & Buliding Designers', 'Design-Build Firms', 'General Contractors', 'Home Builders', 'Interior Designers & Decorators', 'Kitchen & Bathroom Designers'],
    credentials: ['Verified Licence', 'Hired On Helperzz'],
    businessHighlights: ['Provides 3D Visualization', 'Eco-friendly', 'Family owned', 'Locally owned', 'Free consultation', 'Online consultation', 'Free estimate', 'Evening consultations', 'Weekend consultations', 'Offers Custom Work'],
    languages: ['All Languages', 'Speaks Spanish', 'Speaks French'],
    rating: ['Any Rating',]
}

const postData = [
    { name: "one" },
    { name: "one" },
    { name: "one" },
    { name: "one" },
]

const reviewsData = [
    { name: "one" },
    { name: "one" },
    { name: "one" },
    { name: "one" },
]


const Page = () => {
    const [suggestedFilterOpen, setSuggestedFilterOpen] = useState(true);
    const [categoryOpen, setCategoryOpen] = useState(true);
    const [credentialsOpen, setCredentialsOpen] = useState(true);
    const [bussinessHighlightsOpen, setBussinessHighlightsOpen] = useState(true);
    const [languagesOpen, setLanguagesOpen] = useState(true);
    const [ratingOpen, setRatingOpen] = useState(true);

    const handleSuggestedFilterClick = () => {
        setSuggestedFilterOpen(!suggestedFilterOpen);
    };
    const handleCategoryClick = () => {
        setCategoryOpen(!categoryOpen);
    };
    const handleCredentialsClick = () => {
        setCredentialsOpen(!credentialsOpen);
    };
    const handleBussinessHighlightsClick = () => {
        setBussinessHighlightsOpen(!bussinessHighlightsOpen);
    };
    const handleLanguagesClick = () => {
        setLanguagesOpen(!languagesOpen);
    };
    const handleRatingClick = () => {
        setRatingOpen(!ratingOpen);
    };

    return (
        <div>
            <Header />
            <div>
                <div className='bg-[#12937C] flex flex-col justify-center items-center mt-10 py-6 max-md:px-5 text-white ' >
                    <h1 className='text-[1.8rem] max-sm:text-[1.5rem] font-[700]  ' >Get Matched with Local Professtionals</h1>
                    <p className='text-[1.1rem] max-sm:text-[.9rem] font-[300] '>Answer a few questions,and we&apos;ll put you in touch with pros who can help.</p>
                    <div className="flex mt-10 max-md:mt-6 max-md:justify-between max-md:w-[100%] ">
                        <div className="max-md:w-[60%]">
                            <input
                                type="search"
                                className="bg-[#F7F9FB] py-2 text-[.9rem]  px-4 rounded-l-[20px] focus:outline-none pl-10 max-md:w-[100%]"
                                placeholder="Postal Code"
                            />
                            <GrLocation className="ml-4 mt-[-30px] text-gray-600" size={20} />
                        </div>
                        <div className="max-md:w-[40%]">
                            <p
                                className="bg-[#119DED] text-white text-[.9rem] font-[500] py-2 text-center max-md:py-[10px] max-md:px-2 px-4 ml-[-17px] max-md:ml-[-20px] rounded-[20px] cursor-pointer focus:outline-none max-md:text-[12px]"
                            >
                                GET STARTED
                            </p>
                        </div>
                    </div>
                </div>
                <div className='py-10 px-[4rem] max-md:px-[2rem] '>
                    <h5 className='text-[1.8rem] font-[500] ' >Basement Remodelers in Toronto</h5>
                    <p>Basement Remodelers in Toronto: Trusted professionals specializing in transforming underutilized basement spaces into functional and aesthetically pleasing areas. From creating cozy living spaces to installing home theaters, these experts excel in maximizing the potential of your basement.</p>
                    <div className='flex max-sm:flex-col mt-10 w-full justify-between items-center ' >
                        <div className='flex flex-wrap gap-3 lg:gap-5 max-md:gap-2' >
                            <div className='flex items-center gap-5 bg-[#12937C1A] border-[1px] border-[#12937C] py-1 px-3 rounded-lg '  >
                                <p className='text-[.9rem]' >Toronto/50ml</p>
                                <span className='text-[.9rem]' >X</span>
                            </div>
                            <div className='flex items-center gap-5 bg-[#12937C1A] border-[1px] border-[#12937C] py-1 px-3 rounded-lg '  >
                                <p className='text-[.9rem]' >Toronto/50ml</p>
                                <span className='text-[.9rem]' >X</span>
                            </div>
                            <div className='flex items-center gap-5 bg-[#12937C1A] border-[1px] border-[#12937C] py-1 px-3 rounded-lg '  >
                                <p className='text-[.9rem]' >Toronto/50ml</p>
                                <span className='text-[.9rem]' >X</span>
                            </div>
                        </div>
                        <div className='max-sm:mt-10' >
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
                    <div className='flex max-md:flex-col gap-5 mt-10 ' >
                        <div className='w-[25%] max-md:hidden ' >
                            <div className='bg-[#E8F5F2] p-4 rounded-lg ' >
                                <h5 className='text-[1.3rem] font-[600] '>Location (1)</h5>

                                <input
                                    type="search"
                                    className="bg-[#F7F9FB] border-[1px] border-[#12937C]  mt-4 py-1 px-4 rounded-xl focus:outline-none w-full pl-10 max-md:rounded-r-xl placeholder:text-[.8rem] "
                                    placeholder="Toronto ||"
                                />
                                <GrLocation className="ml-3 mt-[-28px] text-gray-600" size={20} />
                                <input
                                    type="search"
                                    className="bg-[#F7F9FB] border-[1px] border-[#12937C] mt-4 py-1 px-4 rounded-xl focus:outline-none w-full pl-10 max-md:rounded-r-xl placeholder:text-[.8rem] "
                                    placeholder="Radius 50 mi"
                                />
                            </div>
                            <div className='bg-[#E8F5F2] p-4 rounded-lg mt-5'>
                                <div>
                                    <div class="w-full border-gray-300  py-5 rounded-t border-b">
                                        <div
                                            onClick={handleSuggestedFilterClick}
                                            class="mb-3 p-1 bg-transparent flex items-center  rounded transition-all ease-in-out duration-500 "
                                        >
                                            <div class="p-1 px-2 text-[1.2rem] font-[500] w-full text-gray-800">
                                                Suggested Filters
                                            </div>
                                            <div class="text-black w-8 py-1 pl-2 pr-1  flex items-center">
                                                {suggestedFilterOpen ? (
                                                    <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                        <FaAngleUp />
                                                    </button>
                                                ) : (
                                                    <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                        <FaAngleDown />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                        {suggestedFilterOpen && (
                                            <div class="w-full items-center flex mx-3 -mt-1">
                                                <form action="" className="flex flex-col gap-2">
                                                    {data?.suggestedFilters?.map((value, index) => (
                                                        <div key={index} className="flex items-center cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                id="categories"
                                                                // onChange={(e) => {
                                                                //     if (e.target.checked) {
                                                                //         setSelectedCategories((state) => [
                                                                //             ...state,
                                                                //             value.id,
                                                                //         ]);
                                                                //     } else {
                                                                //         removeSelectedCategory(value.id);
                                                                //     }
                                                                // }}
                                                                name="categories"
                                                                value="Category"
                                                                className="cursor-pointer form-checkbox w-[17px] h-[17px]  text-[#12937C] border-gray-500 rounded-lg bg-transparent checked:bg-[#12937C] checked:border-green-600"
                                                            />
                                                            <label
                                                                for="category"
                                                                className="ml-2 text-[.9rem] text-[#262626B2] font-[400] "
                                                            >
                                                                {value}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </form>
                                            </div>
                                        )}
                                    </div>
                                    <div class="w-full border-gray-300  py-5 rounded-t border-b">
                                        <div
                                            onClick={handleCategoryClick}
                                            class="mb-3 p-1 bg-transparent flex items-center  rounded transition-all ease-in-out duration-500 "
                                        >
                                            <div class="p-1 px-2 text-[1.2rem] font-[500] w-full text-gray-800">
                                                Professional Category
                                            </div>
                                            <div class="text-black w-8 py-1 pl-2 pr-1  flex items-center">
                                                {categoryOpen ? (
                                                    <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                        <FaAngleUp />
                                                    </button>
                                                ) : (
                                                    <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                        <FaAngleDown />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                        <div className="w-[100%] max-md:w-[100%] px-2">
                                            <input
                                                type="search"
                                                className="bg-transparent border-2 border-gray-400 py-1 px-4 rounded-xl focus:outline-none w-full pl-10 placeholder:text-[.9rem] max-md:rounded-xl"
                                                placeholder="Search Professional Category"
                                            />
                                            <IoSearch className="ml-2 mt-[-28px] text-gray-600" size={20} />
                                        </div>
                                        {categoryOpen && (
                                            <div class="w-full items-center flex mx-3 mt-6">
                                                <form action="" className="flex flex-col gap-2">
                                                    {data?.professionalCategory?.map((value , index) => (
                                                        <div key={index} className="flex items-center cursor-pointer">
                                                            <input
                                                                type="radio"
                                                                id="categories"
                                                                name="categories"
                                                                value="Category"
                                                                className="cursor-pointer form-checkbox w-[17px] h-[17px]  text-[#12937C] border-gray-500 rounded-lg bg-transparent checked:bg-[#12937C] checked:border-green-600"
                                                            />
                                                            <label
                                                                for="category"
                                                                className="ml-2 text-[.9rem] font-[400] "
                                                            >
                                                                {value}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </form>
                                            </div>
                                        )}
                                    </div>
                                    <div class="w-full border-gray-300  py-5 rounded-t border-b">
                                        <div
                                            onClick={handleCredentialsClick}
                                            class="mb-3 p-1 bg-transparent flex items-center  rounded transition-all ease-in-out duration-500 "
                                        >
                                            <div class="p-1 px-2 text-[1.2rem] font-[500] w-full text-gray-800">
                                                Credentials $ Awards
                                            </div>
                                            <div class="text-black w-8 py-1 pl-2 pr-1  flex items-center">
                                                {credentialsOpen ? (
                                                    <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                        <FaAngleUp />
                                                    </button>
                                                ) : (
                                                    <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                        <FaAngleDown />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                        {credentialsOpen && (
                                            <div class="w-full items-center flex mx-3 -mt-1">
                                                <form action="" className="flex flex-col gap-2">
                                                    {data?.credentials?.map((value,index) => (
                                                        <div key={index} className="flex items-center cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                id="categories"
                                                                name="categories"
                                                                value="Category"
                                                                className=" cursor-pointer form-checkbox w-[17px] h-[17px]  text-[#12937C] border-gray-500 rounded-lg bg-transparent checked:bg-[#12937C] checked:border-green-600"
                                                            />
                                                            <label
                                                                for="category"
                                                                className="ml-2 text-[.9rem] font-[400] "
                                                            >
                                                                {value}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </form>
                                            </div>
                                        )}
                                    </div>
                                    <div class="w-full border-gray-300  py-5 rounded-t border-b">
                                        <div
                                            onClick={handleBussinessHighlightsClick}
                                            class="mb-3 p-1 bg-transparent flex items-center  rounded transition-all ease-in-out duration-500 "
                                        >
                                            <div class="p-1 px-2 text-[1.2rem] font-[500] w-full text-gray-800">
                                                Business Highlights
                                            </div>
                                            <div class="text-black w-8 py-1 pl-2 pr-1  flex items-center">
                                                {bussinessHighlightsOpen ? (
                                                    <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                        <FaAngleUp />
                                                    </button>
                                                ) : (
                                                    <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                        <FaAngleDown />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                        {bussinessHighlightsOpen && (
                                            <div class="w-full items-center flex mx-3 -mt-1">
                                                <form action="" className="flex flex-col gap-2">
                                                    {data?.businessHighlights?.map((value,index) => (
                                                        <div  key={index} className="flex items-center cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                id="categories"
                                                                name="categories"
                                                                value="Category"
                                                                className=" cursor-pointer form-checkbox w-[17px] h-[17px]  text-[#12937C] border-gray-500 rounded-lg bg-transparent checked:bg-[#12937C] checked:border-green-600"
                                                            />
                                                            <label
                                                                for="category"
                                                                className="ml-2 text-[.9rem] font-[400] "
                                                            >
                                                                {value}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </form>
                                            </div>
                                        )}
                                    </div>
                                    <div class="w-full border-gray-300  py-5 rounded-t border-b">
                                        <div
                                            onClick={languagesOpen}
                                            class="mb-3 p-1 bg-transparent flex items-center  rounded transition-all ease-in-out duration-500 "
                                        >
                                            <div class="p-1 px-2 text-[1.2rem] font-[500] w-full text-gray-800">
                                                Languages
                                            </div>
                                            <div class="text-black w-8 py-1 pl-2 pr-1  flex items-center">
                                                {languagesOpen ? (
                                                    <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                        <FaAngleUp />
                                                    </button>
                                                ) : (
                                                    <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                        <FaAngleDown />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                        {languagesOpen && (
                                            <div class="w-full items-center flex mx-3 -mt-1">
                                                <form action="" className="flex flex-col gap-2">
                                                    {data?.languages?.map((value,index) => (
                                                        <div key={index} className="flex items-center cursor-pointer">
                                                            <input
                                                                type="radio"
                                                                id="categories"
                                                                name="categories"
                                                                value="Category"
                                                                className="cursor-pointer"
                                                            />
                                                            <label
                                                                for="category"
                                                                className="ml-2 text-[.9rem] font-[400] "
                                                            >
                                                                {value}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </form>
                                            </div>
                                        )}
                                    </div>
                                    <div class="w-full border-gray-300  py-5 rounded-t border-b">
                                        <div
                                            onClick={handleRatingClick}
                                            class="mb-3 p-1 bg-transparent flex items-center  rounded transition-all ease-in-out duration-500 "
                                        >
                                            <div class="p-1 px-2 text-[1.2rem] font-[500] w-full text-gray-800">
                                                Rating
                                            </div>
                                            <div class="text-black w-8 py-1 pl-2 pr-1  flex items-center">
                                                {ratingOpen ? (
                                                    <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                        <FaAngleUp />
                                                    </button>
                                                ) : (
                                                    <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                        <FaAngleDown />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                        {ratingOpen && (
                                            <div class="w-full items-center flex mx-3 -mt-1">
                                                <form action="" className="flex flex-col gap-2">
                                                    {data?.rating?.map((value,index) => (
                                                        <div key={index} className="flex items-center cursor-pointer">
                                                            <input
                                                                type="radio"
                                                                id="categories"
                                                                name="categories"
                                                                value="Category"
                                                                className="cursor-pointer"
                                                            />
                                                            <label
                                                                for="category"
                                                                className="ml-2 text-[.9rem] font-[400] "
                                                            >
                                                                {value}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </form>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-[75%] max-md:[100%] max-md:mt-5 gap-2 '>
                            {postData?.map((value ,index) => (
                                <div key={index} className='bg-[#F7F9FB] p-4 rounded-xl flex max-md:flex-col items-center gap-5 mb-5'>
                                    <div><img src="/assets/dream.png" alt="" className='h-[250px] w-[350px]' /></div>
                                    <div>
                                        <div className='flex max-sm:items-center gap-5' >
                                            <div className='bg-white p-3 rounded-full' >
                                                <img src="/assets/helperz-one.png" alt="" className='h-[50px] w-[50px] ' />
                                            </div>
                                            <div>
                                                <h4 className='text-[1.2rem] md:text-[1rem] max-sm:text-[.8rem] font-[500] '>Jc General construction, inc</h4>
                                                <div className='mt-2 flex max-sm:flex-col items-center ' >
                                                    <div className='flex items-center ' >
                                                        <PiShieldCheckFill className='text-[#F4B300] text-[3rem] max-sm:text-[2rem]  z-50 ' />
                                                        <span className='bg-[#F4B300]  h-[25px] max-sm:h-full ml-[-12px] border-[1px] border-black  px-5 text-[.9rem] max-sm:text-[.8rem] font-[500]' >Trust Seal</span>
                                                    </div>
                                                        <div className='ml-4 flex items-center gap-1 '>
                                                            <MdStar className='text-[#12937C] text-[1.8rem] ' />
                                                            <span className='font-[600]' >4.8/5</span>
                                                            <span className='ml-3' >(7Reviews)</span>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full grid grid-cols-2 max-sm:grid-cols-1 gap-2 mt-4'  >
                                            <div className='w-full flex items-center gap-3 bg-[#12937C1A] border-[1px] border-[#12937C] py-1 px-2 rounded-lg' >
                                                <span><FiBox /> </span>
                                                <p className='text-[.8rem] font-[500] w-full' >provides 3D visualization</p>
                                            </div>
                                        </div>
                                        <div className='mt-2'>
                                            <h4 className='text-[.8rem] font-[600]'>Unparalleled Design Solutions & Professional Installation in Chicago</h4>
                                            <h5 className='text-[.8rem] font-[500] mt-3 '>“Jose and his team did an amazing job installing a dry wall, door and painting in our house. He is well organized ...</h5>
                                        </div>
                                        <div className='flex justify-between w-full mt-2 ' >
                                            <h5 className='text-[.8rem] font-[500]'>David</h5>
                                            <p className='text-[.8rem] font-[600] text-[#12937C] '>Read More</p>
                                        </div>
                                        <h4 className='text-[.8rem] font-[600] mt-1'>4 projects in the  Toronto</h4>
                                        <button className='py-2 px-4 mt-4 bg-[#12937C] text-white text-[.8rem] rounded-[10px] cursor-pointer hover:bg-opacity-80 font-[500]'>Send Message</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='bg-[#F7F9FB] px-[4rem] max-md:px-[2rem] py-10  ' >
                    <h5 className='text-[1.8rem] font-[500] ' >Featured Reviews for Basement Remodelers in Chicago</h5>

                    <div className='grid lg:grid-cols-2 gap-5 mt-[3rem]' >
                        {reviewsData?.map((value , index) => (
                            <div key={index} className='bg-white px-5 py-8 rounded-xl  ' >
                                <div className='flex gap-5' >
                                    <div className='bg-white p-3 rounded-full' >
                                        <img src="/assets/helperz-one.png" alt="" className='h-[50px] w-[50px] ' />
                                    </div>
                                    <div>
                                        <h4 className='text-[1.1rem] font-[500] '>Eminent Living LLC
                                        </h4>
                                        <h4 className='text-[.9rem] font-[600] '>Basement Remodelers in Chicago</h4>
                                        <div className='flex items-center '>
                                            <MdStar className='text-[#12937C] text-[1.5rem] max-md:text-[1.2rem] ' />
                                            <MdStar className='text-[#12937C] text-[1.5rem] max-md:text-[1.2rem] ' />
                                            <MdStar className='text-[#12937C] text-[1.5rem] max-md:text-[1.2rem] ' />
                                            <MdStar className='text-[#12937C] text-[1.5rem] max-md:text-[1.2rem] ' />
                                            <MdStar className='text-[#12937C] text-[1.5rem] max-md:text-[1.2rem] ' />

                                            <p className='ml-5 text-[.8rem] max-md:text-[.7rem] text-gray-500 ' >Mar 5 2023</p>

                                        </div>
                                    </div>
                                </div>

                                <p className='mt-5 text-[.9rem] max-md:text-[.8rem] ' >&apos;Michael was extremely exceptional with his service from beginning to end. I wasn&apos;t really even sure what I was going for with my bathroom remodel and he was amazing with guiding me on ideas with what&apos;s modern, traditional or a mix of both. Execution was on point and I could not be happier. I get so many compliments on the design and quality of work. Definitely recommend him, and he will be who I call to do my kitchen remodel, as well.&apos;</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Page