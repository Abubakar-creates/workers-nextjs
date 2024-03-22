"use client";
import Header from "@/components/Header";
import React, { useState } from "react";
import { FiBox } from "react-icons/fi";
import { MdStars } from "react-icons/md";
import { PiShieldCheckFill } from "react-icons/pi";
import { BiSolidStar } from "react-icons/bi";
import { RiPhoneLine } from "react-icons/ri";
import { GiEarthAfricaEurope } from "react-icons/gi";
import Footer from "@/components/Footer";

const points = [
    { name: "Overview" },
    { name: "Profile" },
    { name: "Photos" },
    { name: "Reviews" },
];
const projects = [
    { name: "Bathroom" },
    { name: "Kitchen" },
    { name: "Kitchen Planning" },
    { name: "Living Room" },
    { name: "Exterior" },
    { name: "Entry" },
];

const Page = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div>
            <Header />

            <div className="flex mt-8 ml-[9%]">
                <h1 className="cursor-pointer">Helperz / </h1>
                <h1 className="cursor-pointer ml-2"> Basement Renovation/ </h1>
                <h1 className="cursor-pointer font-[600] ml-2"> Home Imporvement People </h1>
            </div>
            <div className="bg-[#12937C1A]">
                <div className="grid grid-cols-4 max-md:grid-cols-2 w-[80%] m-auto mt-6 p-4 gap-10">
                    {points?.map((value, index) => (
                        <h1 key={index}
                            className={` font-[500] text-[1rem] text-center p-[4px] rounded-xl cursor-pointer ${index === selected ? "bg-white text-[#12937C]" : ""
                                }  `}
                            onClick={() => setSelected(index)}
                        >
                            {value?.name}
                        </h1>
                    ))}
                </div>
            </div>

            <div className="px-[4rem] max-sm:px-[1rem] py-5 flex max-md:flex-col gap-3 ">
                <div className="w-[60%] max-md:w-full">
                    <div className="p-4 rounded-xl flex max-sm:flex-col gap-5 mb-5">
                        <div>
                            <img
                                src="/assets/Rectangle 132.png"
                                alt=""
                                className="h-[150px] w-[300px]"
                            />
                        </div>
                        <div className="mt-2">
                            <h4 className="text-[1.4rem] md:text-[1.2rem] max-sm:text-[1rem] font-[600] ">
                                Home Improvement People{" "}
                            </h4>
                            <h4 className="text-[1.2rem] md:text-[1rem] max-sm:text-[.8rem] font-[500] ">
                                Basement Renovation <span>/ Toronto</span>{" "}
                            </h4>
                            <div className="flex items-center gap-1">
                                <MdStars className="text-[#12937C] text-[1.8rem] " />
                                <span className="font-[600]">4.8/5</span>
                                <span className="ml-3">(7Reviews)</span>
                            </div>
                            <div className="flex items-center ">
                                <PiShieldCheckFill className="text-[#F4B300] text-[3rem] max-sm:text-[2rem]  z-50 " />
                                <span className="bg-[#F4B300]  h-[25px] max-sm:h-full ml-[-12px] border-[1px] border-black  px-5 text-[.9rem] max-sm:text-[.8rem] font-[500]">
                                    Trust Seal
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="ml-5">
                        <h4 className="text-[1.4rem] md:text-[1.2rem] max-sm:text-[1rem] font-[600] ">
                            About Company
                        </h4>
                        <p className="mt-1">
                            The Home Improvement People have completed literally thousands of
                            renovations since our inception. We are a unique award winning
                            contracting company, consulted by various media as industry
                            experts.
                        </p>
                        <h4 className="text-[1rem] font-[600] mt-7 ">Website:</h4>
                        <p className="mt-1">www.Homeimprovementpeople.com</p>
                        <div className="flex flex-wrap gap-4 bg-[#F7F9FB] px-5 py-7 rounded-xl ">
                            <div>
                                <h4 className="text-[1.4rem] md:text-[1.2rem] max-sm:text-[1rem] font-[600] ">
                                    Star Score
                                </h4>
                                <div className="flex items-center gap-1 mt-2 ">
                                    <MdStars className="text-[#12937C] text-[1.8rem] " />
                                    <span className="font-[600]">4.8/5</span>
                                </div>
                                <span className="text-gray-600">(437Reviews)</span>
                            </div>
                            <div className="">
                                <div className="flex items-center gap-2 ">
                                    <p className="mt-1 text-[.8rem] ">Average Rating</p>
                                    <input type="range" value={2} max={5} min={0} className="h-[1rem] w-[150px] rounded-xl bg-green-700 " />
                                </div>
                                <div className="flex items-center gap-2 ">
                                    <p className="mt-1 text-[.8rem] ">Average Rating</p>
                                    <p className="h-3 w-[150px] rounded-xl bg-green-700 "></p>
                                </div>
                                <div className="flex items-center gap-2 ">
                                    <p className="mt-1 text-[.8rem] ">Average Rating</p>
                                    <p className="h-3 w-[150px] rounded-xl bg-green-700 "></p>
                                </div>
                                <div className="flex items-center gap-2 ">
                                    <p className="mt-1 text-[.8rem] ">Average Rating</p>
                                    <p className="h-3 w-[150px] rounded-xl bg-green-700 "></p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 ">
                                    <p className="mt-1 text-[.8rem] font-[600]">
                                        Reviews by trating
                                    </p>
                                    <p className="text-gray-600 ml-1 text-[.8rem]">
                                        (past 12 months)
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 ">
                                    <p className="mt-1 text-[.8rem] ">Great</p>
                                    <p className="h-3 w-[150px] rounded-xl bg-green-700 "></p>
                                </div>
                                <div className="flex items-center gap-2 ">
                                    <p className="mt-1 text-[.8rem]">Average</p>
                                    <p className="h-3 w-[150px] rounded-xl bg-gray-300 "></p>
                                </div>
                                <div className="flex items-center gap-2 ">
                                    <p className="mt-1 text-[.8rem]">Poor</p>
                                    <p className="h-3 w-[150px] rounded-xl bg-gray-300 "></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[40%] max-md:w-full bg-[#12937C1A] py-5 px-6 m-auto mt-4 rounded-xl ">
                    <h4 className="text-[1.4rem] md:text-[1.2rem] max-sm:text-[1rem] font-[600] ">
                        Free In home consultation
                    </h4>
                    <form className="mt-10">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Your Email Address"
                                className="
                         bg-white transition-all ease-in-out duration-150 border border-[#43D9BE] text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                        "
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="
                         bg-white transition-all ease-in-out duration-150 border border-[#43D9BE] text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                        "
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="number"
                                // onChange={(e) => setSubject(e.target.value)}
                                placeholder="Phone Number"
                                className="
                         bg-white transition-all ease-in-out duration-150 border border-[#43D9BE] text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                        "
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="number"
                                // onChange={(e) => setSubject(e.target.value)}
                                placeholder="Zip Code"
                                className="
                         bg-white transition-all ease-in-out duration-150 border border-[#43D9BE] text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                        "
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                // onChange={(e) => setMessage(e.target.value)}
                                rows="3"
                                placeholder="Message"
                                className="mb-7 bg-white transition-all ease-in-out duration-150 border border-[#43D9BE] text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            ></textarea>
                        </div>
                        <div className="w-full mb-4">
                            <button
                                className="w-full text-white bg-[#12937C] rounded-xl border  border-[#43D9BE] py-3 px-6 transition hover:bg-opacity-80 cursor-pointer ">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="bg-[#F7F9FB] px-[4rem] max-sm:px-[1rem] py-10 " >
                <h4 className="text-[1.6rem]  font-[600] ">Credentials</h4>
                <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-10 mt-3" >
                    <div>
                        <h4 className="md:text-[1.2rem] sm:text-[1rem] xs:text-[.8rem] font-[600] ">3 Helperzz Award</h4>
                        <div className="grid md:grid-cols-3 max-sm:grid-cols-1 gap-4 mt-3 " >
                            <div className="bg-[#12937C33] border-2 border-[#12937C] text-center rounded-lg py-2 px-2 ">
                                <h4 className="text-[1.2rem] md:text-[1rem] font-[600] text-[#12937C] ">2024</h4>
                                <h4 className="text-[1rem] md:text-[.9rem] font-[600] ">Best Of Helperzz Service</h4>
                            </div>
                            <div className="bg-[#12937C33] border-2 border-[#12937C] text-center rounded-lg py-2 px-2 ">
                                <h4 className="text-[1.2rem] md:text-[1rem] font-[600] text-[#12937C] ">2023</h4>
                                <h4 className="text-[1rem] md:text-[.9rem] font-[600] ">Best Of Helperzz Service</h4>
                            </div>
                            <div className="bg-[#12937C33] border-2 border-[#12937C] text-center rounded-lg py-2 px-2 ">
                                <h4 className="text-[1.2rem] md:text-[1rem] font-[600] text-[#12937C]">2023</h4>
                                <h4 className="text-[1rem] md:text-[.9rem] font-[600] ">Best Of Helperzz Service</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="md:text-[1.2rem] sm:text-[1rem] xs:text-[.8rem] font-[600] ">3 Helperzz Award</h4>
                        <div className="grid md:grid-cols-3 max-sm:grid-cols-1 gap-4 mt-3 " >
                            <div className="bg-[#fff] border-2 border-[#12937C] text-center rounded-lg py-2 px-2 ">
                                <h4 className="text-[1rem] md:text-[.9rem] font-[600] ">I use a pro software</h4>
                                <h4 className="text-[1.2rem] md:text-[1rem] font-[600] text-[#12937C] mt-2 ">2024</h4>
                            </div>
                            <div className="bg-[#fff] border-2 border-[#12937C] text-center rounded-lg py-2 px-2 ">
                                <BiSolidStar className="h-full w-full text-[#12937C]" />
                            </div>
                            <div className="bg-[#fff] border-2 border-[#12937C] text-center rounded-lg py-2 px-2 ">
                                <BiSolidStar className="h-full w-full text-[#12937C]" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="md:text-[1.2rem] sm:text-[1rem] xs:text-[.8rem] font-[600] ">3 Helperzz Award</h4>
                        <div className="grid md:grid-cols-3 max-sm:grid-cols-1 gap-4 mt-3 " >
                            <div className="bg-[#fff] border-2 border-[#12937C] text-center rounded-lg py-2 px-2 ">
                                <h4 className="text-[1.2rem] md:text-[1rem] font-[600] text-[#12937C] ">2024</h4>
                                <h4 className="text-[1rem] md:text-[.9rem] font-[600] ">Best Of Helperzz Service</h4>
                            </div>
                            <div className="bg-[#fff] border-2 border-[#12937C] text-center rounded-lg py-2 px-2 ">
                                <h4 className="text-[1.2rem] md:text-[1rem] font-[600] text-[#12937C] ">2023</h4>
                                <h4 className="text-[1rem] md:text-[.9rem] font-[600] ">Best Of Helperzz Service</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-[4rem] max-sm:px-[1rem] py-10 " >
                <h4 className="text-[1.6rem]  font-[600] ">Projects</h4>
                <div className="">
                    <div className="flex flex-wrap mt-6 gap-4">
                        {projects?.map((value, index) => (
                            <h1 key={index}
                                className={` font-[500] text-[.9rem] text-center py-[4px]  px-5 rounded-xl cursor-pointer bg-[#12937C1A] border-[1px] border-[#12937C] ${index === selected ? "bg-[#12937C] text-[#fff]" : ""
                                    }  `}
                                onClick={() => setSelected(index)}
                            >
                                {value?.name}
                            </h1>
                        ))}
                    </div>
                    <h4 className="text-[1.3rem]  font-[600] mt-5 ">10 Photos</h4>
                    <p className="text-[1rem]  font-[500] ">Filtered results  based on the selected room categories</p>
                    <div className="mt-5 flex flex-wrap gap-4 " >
                        <div>
                            <img src="/assets/renovation.png" alt="" className='h-[250px] w-[350px]' />
                            <h4 className="text-[1.1rem]  font-[600] mt-5 ml-3 ">Bathroom Renovation</h4>
                        </div>
                        <div>
                            <img src="/assets/renovation2.png" alt="" className='h-[250px] w-[350px]' />
                            <h4 className="text-[1.1rem]  font-[600] mt-5 ml-3 ">Bathroom Renovation</h4>
                        </div>
                        <div>
                            <img src="/assets/renovation3.png" alt="" className='h-[250px] w-[350px]' />
                            <h4 className="text-[1.1rem]  font-[600] mt-5 ml-3 ">Interior Renovation</h4>
                        </div>
                    </div>
                    <center className="mt-6" >
                        <button
                            className="w-[25%] max-sm:w-full max-sm:w-full m-auto text-black font-[600] bg-white rounded-xl border  border-[#43D9BE] py-3 px-6 transition hover:bg-opacity-40 cursor-pointer ">
                            SEE ALL REVIEWS
                        </button>
                    </center>
                </div>
            </div>
            <div className="bg-[#F7F9FB] px-[4rem] max-sm:px-[1rem] py-10 " >
                <div className="flex items-center gap-1">
                    <h4 className="text-[1.6rem]  font-[600] ">REVIEWS</h4>
                    <BiSolidStar className="text-[#12937C] text-[1.8rem] ml-3 " />
                    <span className="font-[600]">4.8/5</span>
                    <span className="ml-3">(7Reviews)</span>
                </div>
                <div className="">
                    <div className="flex justify-between " >
                        <h4 className="text-[1.3rem] text-[#12937C] font-[600] mt-5 ">Photos</h4>
                        <h4 className="text-[1.3rem] text-[#12937C] font-[600] mt-5 ">See More</h4>

                    </div>
                    <div className="mt-5 flex flex-wrap gap-3 max-md:grid " >
                        <img src="/assets/renovation.png" alt="" className='h-[150px] w-[250px] max-sm:w-full ' />
                        <img src="/assets/renovation2.png" alt="" className='h-[150px] w-[250px] max-sm:w-full ' />
                        <img src="/assets/renovation3.png" alt="" className='h-[150px] w-[250px] max-sm:w-full ' />
                        <img src="/assets/renovation.png" alt="" className='h-[150px] w-[250px] max-sm:w-full ' />
                        <img src="/assets/renovation2.png" alt="" className='h-[150px] w-[250px] max-sm:w-full ' />
                        <img src="/assets/renovation3.png" alt="" className='h-[150px] w-[250px] max-sm:w-full ' />
                    </div>
                    <div className="flex flex-wrap gap-10 mt-5 ">
                        <h4 className="text-[1.3rem]  font-[600]">Sort by:</h4>
                        <h4 className="text-[1.3rem]  font-[600]">Newst </h4>
                        <h4 className="text-[1.3rem]  font-[600]">By Star</h4>
                        <h4 className="text-[1.3rem]  font-[600]">Reviews with photos</h4>
                    </div>
                </div>

                <div className="mt-5 flex max-md:flex-col gap-5 " >
                    <div className="w-[70%] max-md:w-full">
                        <div className="p-4 rounded-xl bg-white mb-5">
                            <div className="flex gap-5 " >
                                <img
                                    src="/assets/person.png"
                                    alt=""
                                    className="h-[100px] w-[100px]"
                                />
                                <div className="w-full ">
                                    <div className="flex flex-wrap justify-between items-center w-[80%]" >
                                        <h4 className="text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] font-[600] ">
                                            BELINA
                                        </h4>
                                        <h4 className="text-[1.2rem] max-md:text-[1rem] max-sm:text-[.9rem] font-[600] ">
                                            28.02.2024
                                        </h4>
                                        <h5 className="text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] font-[600] ">
                                            <span className="text-gray-700" >Job price:</span> $50,000.00
                                        </h5>

                                    </div>
                                    <h4 className="text-[1.2rem] md:text-[1rem] max-sm:text-[.8rem] font-[500] ">
                                        Bathroom Renovation  new Bathroom
                                    </h4>
                                    <div className="flex items-center gap-1">
                                        <BiSolidStar className="text-[#12937C] text-[1.5rem] " />
                                        <BiSolidStar className="text-[#12937C] text-[1.5rem] " />
                                        <BiSolidStar className="text-[#12937C] text-[1.5rem] " />
                                        <BiSolidStar className="text-[#12937C] text-[1.5rem] " />
                                        <BiSolidStar className="text-[#12937C] text-[1.5rem] " />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex max-xl:flex-col gap-3 " >
                                <p className="w-[65%] max-xl:w-full" >Happy to have found HIP to do my bathrooms!
                                    Did my kitchen, basement renos and all were a nightmare! Answered prayer Id say because Slava, Rafael were just amazing! The whole project were done with professionalism and care. Most importantly, they were pleasant to deal with. Im glad to have found them! I just wished I knew them sooner! Oh and Gerhard was great as well! Thank you guys!!!</p>
                                <div className="flex gap-5 w-[35%]" >
                                    <img src="/assets/renovation2.png" alt="" className='h-[100px] w-[130px] rounded-xl ' />
                                    <img src="/assets/renovation3.png" alt="" className='h-[100px] w-[130px] rounded-xl ' />
                                </div>
                            </div>
                            <h4 className="mt-5 text-[1.4rem] md:text-[1.2rem] max-sm:text-[1rem] font-[600] ">
                                Company response
                            </h4>
                            <p className="" >
                                hello Belina</p>
                            <p className="w-[50%]" >
                                We&lsquo;re thrilled to hear about your positive experience! Thank you for choosing our company.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white mb-5">
                            <div className="flex gap-5 " >
                                <img
                                    src="/assets/person2.png"
                                    alt=""
                                    className="h-[100px] w-[100px]"
                                />
                                <div className="w-full ">
                                    <div className="flex flex-wrap justify-between items-center w-[80%]" >
                                        <h4 className="text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] font-[600] ">
                                            BELINA
                                        </h4>
                                        <h4 className="text-[1.2rem] max-md:text-[1rem] max-sm:text-[.9rem] font-[600] ">
                                            28.02.2024
                                        </h4>
                                        <h5 className="text-[1.4rem] max-md:text-[1.2rem] max-sm:text-[1rem] font-[600] ">
                                            <span className="text-gray-700" >Job price:</span> $50,000.00
                                        </h5>

                                    </div>
                                    <h4 className="text-[1.2rem] md:text-[1rem] max-sm:text-[.8rem] font-[500] ">
                                        Bathroom Renovation  new Bathroom
                                    </h4>
                                    <div className="flex items-center gap-1">
                                        <BiSolidStar className="text-[#12937C] text-[1.5rem] " />
                                        <BiSolidStar className="text-[#12937C] text-[1.5rem] " />
                                        <BiSolidStar className="text-[#12937C] text-[1.5rem] " />
                                        <BiSolidStar className="text-[#12937C] text-[1.5rem] " />
                                        <BiSolidStar className="text-[#12937C] text-[1.5rem] " />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex max-xl:flex-col gap-3 " >
                                <p className="w-[65%] max-xl:w-full" >Happy to have found HIP to do my bathrooms!
                                    Did my kitchen, basement renos and all were a nightmare! Answered prayer Id say because Slava, Rafael were just amazing! The whole project were done with professionalism and care. Most importantly, they were pleasant to deal with. Im glad to have found them! I just wished I knew them sooner! Oh and Gerhard was great as well! Thank you guys!!!</p>
                                <div className="flex gap-5 w-[35%]" >
                                    <img src="/assets/renovation2.png" alt="" className='h-[100px] w-[130px] rounded-xl ' />
                                    <img src="/assets/renovation3.png" alt="" className='h-[100px] w-[130px] rounded-xl ' />
                                </div>
                            </div>
                            <h4 className="mt-5 text-[1.4rem] md:text-[1.2rem] max-sm:text-[1rem] font-[600] ">
                                Company response
                            </h4>
                            <p className="" >
                                hello Belina</p>
                            <p className="w-[50%]" >
                                We&lsquo;re thrilled to hear about your positive experience! Thank you for choosing our company.</p>
                        </div>
                    </div>
                    <div className="w-[30%] max-md:w-full">
                        <div className="bg-white rounded-xl p-5" >
                            <h4 className="w-[70%] mt-5 text-[1.4rem] md:text-[1.2rem] max-sm:text-[1rem] font-[600] ">
                                Home improvement people Inc.
                            </h4>
                            <p className="mt-2 text-[1.2rem] text-gray-700 md:text-[1rem] max-sm:text-[.9rem] font-[500] ">
                                Basement Renovation
                            </p>
                            <p className="text-[1.2rem] text-gray-700 md:text-[1rem] max-sm:text-[.9rem] font-[500] ">
                                Toronto
                            </p>
                            <div className="flex items-center gap-1 mt-3">
                                <BiSolidStar className="text-[#12937C] text-[1.8rem]" />
                                <span className="font-[600]">4.8/5</span>
                                <span className="ml-3">(7Reviews)</span>
                            </div>
                            <button
                                className="mt-4 w-full text-white bg-[#12937C] rounded-xl border  border-[#43D9BE] py-3 px-6 transition hover:bg-opacity-80 cursor-pointer ">
                                GET A QUOTE
                            </button>
                            <button
                                className="mt-4 w-full text-black font-[600] bg-white rounded-xl border  border-[#43D9BE] py-3 px-6 transition hover:bg-opacity-40 cursor-pointer ">
                                WRITE A REVIEW
                            </button>
                        </div>

                        <div className="mt-20 bg-white rounded-xl p-5" >
                            <div className="flex items-center gap-3 border-b-2 border-black pb-5" >
                                <RiPhoneLine className="text-[1.5rem]" />
                                <span>(416) 770 7805</span>
                            </div>
                            <div className="mt-3 flex items-center gap-3 text-wrap break-all ">
                                <GiEarthAfricaEurope className="text-[1.5rem]" />
                                <p className="">www.himprovementpeople.com</p>
                            </div>
                        </div>
                        <div className="mt-5 bg-white rounded-xl p-7" >
                            <iframe className="w-[300px] h-[150px] max-xl:w-[100%] max-xl:h-[90%] rounded-xl " src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13599.048811429266!2d74.3939224!3d31.5581401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1711119371779!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <button
                                className="mt-6 w-full text-black font-[600] bg-white rounded-xl border  border-[#43D9BE] py-3 px-6 transition hover:bg-opacity-40 cursor-pointer ">
                                View service area
                            </button>
                        </div>
                    </div>
                </div>
                <center className="mt-6" >
                    <button
                        className="w-[25%] max-sm:w-full m-auto text-black font-[600] bg-white rounded-xl border  border-[#43D9BE] py-3 px-6 transition hover:bg-opacity-40 cursor-pointer ">
                        SEE ALL REVIEWS
                    </button>
                </center>
            </div>
            {/* Tu sab se bra Papu */}

            <div className="bg-[#12937C] max-md:block hidden">
<img  src='./assets/anti.png' className="w-[230px] ml-auto " />
    </div>

            <section class="lg:bg-[#12937C] ">
                <div class="px-4 mx-auto max-w-screen-xl lg:px-2">
                    <div class="mx-auto max-w-screen-md lg:flex lg:justify-between lg:max-w-screen-lg  ">
                        <div className="flex flex-col lg:w-[50%] lg:items-center text-center lg:py-12">
                            <h2 class="mb-2 text-2xl font-extrabold lg:text-white sm:text-2xl mt-4">SUDDENLY IT&lsquo;S ALL SO DOABLE</h2>
                            <button className="px-6 py-2 bg-white text-black sm:w-[100%] lg:w-[50%] lg:mt-4 rounded-lg font-bold border-black border-[1px] lg:border-none hover:text-[#2B937C] hover:shadow-sm hover:shadow-white" >Post your project</button>
                        </div>
                        <img className=" lg:w-[30%] w-0 " src='./assets/anti.png'
                            alt="nsf"
                        />
                    </div>
                </div>
            </section>

            {/* NewsLetter */}
            <section class="bg-[#F7F9FB]">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-2">
                    <div class="mx-auto max-w-screen-md sm:text-center lg:flex lg:justify-between lg:max-w-screen-lg lg:items-center">
                        <div className="w-[50%] max-md:w-[90%] max-md:m-auto">
                            <h2 class="mb-4 text-2xl font-extrabold text-gray-900 sm:text-2xl w-[18rem] max-md:w-[90%] text-left">Get<span class="mb-4 text-2xl tracking-tight font-extrabold text-[#43D9BE] sm:text-2xl"> free project cost information</span> delivered to your inbox</h2>
                        </div>
                        <div className="w-[50%] max-md:w-[90%] max-md:m-auto">
                            <input class="block p-3 pl-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 outline-none" placeholder="Enter your email" type="email" />
                            <center>
                                <button className="border-[1px] mt-2 px-6 py-[5px] rounded-xl border-[#43D9BE] max-md:mt-4 transition hover:bg-opacity-40 cursor-pointer"> Subscribe  </button>
                            </center>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Page;