'use client'

import React from 'react'
import { IoSearch } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";

import { PiBathtub } from "react-icons/pi";
import Footer from '../components/Footer';
import Header from '../components/Header';

const work = [{ name: "Bathroom Renovation", image: "./assets/need1.png" },
{ name: "Roofting", image: "./assets/need1.png" },
{ name: "Handyman services ", image: "./assets/need1.png" },
{ name: "Interior Design", image: "./assets/need1.png" },
{ name: "Painting", image: "./assets/need1.png" },
{ name: "Electronic Repairs", image: "./assets/need1.png" },
{ name: "Landscape Contractors", image: "./assets/need1.png" },
{ name: "Lighting", image: "./assets/need1.png" },
{ name: "Interior Design", image: "./assets/need1.png" },
{ name: "Home Staging", image: "./assets/need1.png" },]

const category = [{ name: "Bathroom Renovation", image: "./assets/need1.png", description: "Tiles, fixtures, plumbing" },
{ name: "Roofting", image: "./assets/need1.png", description: "Roofing materials and installation." },
{ name: "Painting ", image: "./assets/need1.png", description: "Brush, canvas, palette, easel." },
{ name: "Plumber", image: "./assets/need1.png", description: "Bathroom kitchen plumbing" },
{ name: "Electrical", image: "./assets/need1.png", description: "Electrical installation or testing" },
{ name: "Gas/ Heating Engineer", image: "./assets/need1.png", description: "Gas boiler - installation" },

]

const cost = [{ name: "Kitchen Remodel Cost", description: "Tiles, fixtures, plumbing" },
{ name: "Cost to buid a house", description: "Roofing materials and installation." },
{ name: "Roof replacement cost ", description: "Brush, canvas, palette, easel." },
{ name: "water heater replacement", description: "Bathroom kitchen plumbing" },
{ name: "bathrom remodel cost", description: "Electrical installation or testing" },
{ name: "solar panel cost", description: "Gas boiler - installation" },

]

const guid = [{ name: "Start a side business", image: "./assets/guid-one.png", description: "Starting a side business can be an exciting and rewarding venture." },
{ name: "Ecommerce business ideas", image: "./assets/guid-two.png", description: "Starting an ecommerce business can be an exciting and lucrative venture" },
{ name: "Start an online business a ", image: "./assets/guid-three.png", description: "Starting an online business can be an exciting and rewarding venture" },

]

const helperz = [
    { name: "Gitano", experties: "Roofting", image: "./assets/helperz-one.png", point: [{ name: "Roofting Repair" }, { name: "Roof Inspection" }, { name: "Roof Maintenance" }] },
    { name: "Remodel", experties: "Bathroom Renovation", image: "./assets/helperz-two.png", point: [{ name: "Bathroom Renovation" }, { name: "Plumbing" }, { name: "Cabinetry and Storage" }] },
    { name: "Erevan", experties: "Painting", image: "./assets/helperz-three.png", point: [{ name: "Surface Preparation" }, { name: "Protection" }, { name: "Paint Selection" }, { name: "Cleanup" },] },
]

const review = [
    { name: "Gitano", experties: "Roofting", image: "./assets/helperz-one.png", point: [{ name: "Roofting Repair" }, { name: "Roof Inspection" }, { name: "Roof Maintenance" }] },
    { name: "Remodel", experties: "Bathroom Renovation", image: "./assets/helperz-two.png", point: [{ name: "Bathroom Renovation" }, { name: "Plumbing" }, { name: "Cabinetry and Storage" }] },
    { name: "Erevan", experties: "Painting", image: "./assets/helperz-three.png", point: [{ name: "Surface Preparation" }, { name: "Protection" }, { name: "Paint Selection" }, { name: "Cleanup" },] },
]

const Home = () => {



    return (
        <div>
            <div className=" bg-[#F6F6F6]">
                <div
                    className="w-full h-[89vh] bg-cover bg-no-repeat max-md:bg-contain  max-md:!bg-none"
                    style={{
                        backgroundImage: `url('./assets/banner.png')`,
                    }}
                >
                    <Header />

                    <div className="flex flex-col justify-center px-5 text-black w-[73%] max-md:w-[100%] ml-auto pt-16">
                        <h1 className="font-[300] text-[35px] max-md:text-[20px]">
                            The Best Place
                        </h1>
                        <h1 className="font-[300] text-[35px] max-md:text-[20px]">
                            To Find Professionals
                        </h1>
                        <p className="mt-4 w-[56%] max-md:w-[90%] text-gray-600 text-[16px]">
                            Thousands of homeowners connect with the right pro every week for
                            their remodeling projects. Ready to find yours?
                        </p>
                        <div className="mt-8 flex max-md:flex-col ">
                            <div className="w-[28%] max-md:w-[100%]">
                                <input
                                    type="search"
                                    className="bg-[#F7F9FB] py-2 pl-8 rounded-l-2xl text-[16px] shadow-md focus:outline-none w-full pl-10 max-md:rounded-r-xl"
                                    placeholder="What service do you need?"
                                />
                                <IoSearch className="ml-2 mt-[-30px] text-gray-600" size={19} />
                            </div>
                            <div className="flex max-md:mt-6 max-md:justify-between max-md:w-[100%]">
                                <div className="max-md:w-[60%] w-[44%]">
                                    <input
                                        type="search"
                                        className="bg-[#F7F9FB] py-2 px-4 shadow-md text-[16px] max-md:rounded-2xl focus:outline-none pl-10 max-md:w-[100%]"
                                        placeholder="Postal Code"
                                    />
                                    <GrLocation className="ml-2 mt-[-30px] text-gray-600" size={19} />
                                </div>
                                <div className="max-md:w-[40%]">
                                    <p
                                        className="bg-[#119DED] text-white py-[10px] text-center text-[14px] font-[600] shadow-md max-md:py-[10px] max-md:px-2 px-4 ml-[-2px] max-md:ml-[10px] rounded-3xl cursor-pointer focus:outline-none max-md:text-[12px]"
                                    >
                                        GET QUOTES
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex max-md:flex-col gap-6">
                            <h1 className="font-[600] text-gray-800 text-[19px] max-md:text-lg max-md:text-center">
                                Hire a pro :
                            </h1>
                            <div className="flex max-md:gap-2 gap-4 max-md:justify-center ">
                                <button className="bg-transparent border max-md:px-[10px] mt-[-2px] text-[14px] max-md:text-[15px] border-gray-900 rounded-full px-5 py-[6px] font-[500] hover:bg-black hover:text-white focus:outline-none">
                                    Contractors
                                </button>
                                {/* <button className="bg-transparent border max-md:px-[10px] max-md:text-[15px] border-gray-900 rounded-full px-5 py-[6px] font-[500] hover:bg-black hover:text-white focus:outline-none">
                                    Architects
                                </button>
                                <button className="bg-transparent border max-md:px-[10px] max-md:text-[15px] border-gray-900 rounded-full px-5 py-[6px] font-[500] hover:bg-black hover:text-white focus:outline-none">
                                    See More
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="./assets/second-banner.png" className='md:hidden w-[100%] mt-[-20px]' alt="" />


            {/* 2nd section =========== */}
            <div className='py-10'>

                <h1 className='text-center text-[29px] font-[600] pb-10 max-md:text-[23px]'>You Need It, We&apos;ve Got It</h1>
                <div className="grid grid-cols-5 max-md:grid-cols-2 max-md:w-[95%] max-md:gap-2 w-[70%] m-auto gap-6" >

                    {work?.map((value) => (
                        <div className='flex flex-col justify-center items-center bg-[#F7F9FB] rounded-xl p-4 h-[150px] cursor-pointer border-r-2 border-b-2 border-white hover:border-[#119DED99] hover:shadow-sm hover:shadow-[#119DED99]  ' >
                            <img src={value?.image} className='w-[52px] h-[52px]' alt="Avatar" />
                            <h1 className='font-[600] text-[16px] mt-2 text-center max-md:text-[13px]' >{value?.name}</h1>
                        </div>

                    ))}

                </div>
            </div>

            {/* 3rd section =========== */}
            <div className='py-10 bg-[#F7F9FB] my-10'>

                <h1 className='text-center text-[29px] font-[600] pb-10 uppercase max-md:text-[23px]'><span className='max-md:hidden'>our</span> most popular category</h1>
                <div className="grid grid-cols-3 max-md:grid-cols-2 max-md:w-[95%] max-md:gap-2 w-[70%] m-auto gap-6" >

                    {category?.map((value , index) => (
                        <div key={index} className='flex flex-col justify-center items-center bg-[#119DED26] rounded-xl h-[195px] cursor-pointer border-r-2 border-b-2 border-white hover:border-[#119DED99] hover:shadow-sm hover:shadow-[#119DED99]  p-4' >
                            <img src={value?.image} className='w-[52px] h-[52px]' alt="Avatar" />
                            <h1 className='font-[600] text-[16px] mt-2 text-center max-md:'>{value?.name}</h1>
                            <h1 className='font-[400] text-[13px] mt-2 text-center'>{value?.description}</h1>

                        </div>

                    ))}

                </div>
            </div>

            {/* 4th section =========== */}
            <div className='py-10 w-[70%] max-md:w-[95%] m-auto'>

                <h1 className=' text-[29px] font-[600] pb-10 max-md:text-[23px] max-md:text-center'>Popular cost guides</h1>
                <div className="grid grid-cols-3 max-md:grid-cols-2 max-md:gap-2 m-auto gap-6" >

                    {cost?.map((value, index) => (
                        <div key={index} className='flex flex-col bg-[#F7F9FB] rounded-xl cursor-pointer border-r-2 p-4 py-6 border-b-2 border-white hover:border-[#55DCC4CC]' >
                            <button className="bg-[#55DCC4CC] mr-auto p-2 rounded-xl font-[400] text-[14px] max-md:text-[12px]">Helperzz Cost Guids</button>
                            <h1 className='font-[600] text-[19px] mt-4 capitalize max-md:text-[16px]'>{value?.name}</h1>
                        </div>

                    ))}

                </div>
            </div>

            {/* 5th section =========== */}
            <div className='py-10 w-[70%] max-md:w-[95%] mx-auto'>
                <div className="flex justify-between pb-6  max-md:flex-col">
                    <h1 className='text-2xl font-semibold'>Guides to help you grow</h1>
                    <h1 className='text-sm font-semibold text-[#276487] cursor-pointer mt-2 max-md:ml-auto '>See More</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {guid?.map((value, index) => (
                        <div key={index} className='max-md:mt-4 '>
                            <img src={value?.image} alt="image" className='w-full h-[320px] object-cover rounded-xl' />
                            <h1 className='mt-2 text-lg font-semibold'>{value?.name}</h1>
                            <p className='mt-2 text-sm font-normal text-gray-600'>{value?.description}</p>
                            <button className='border border-[#119DED] text-[#119DED] font-semibold text-sm p-2 rounded-xl mt-2'>Read More</button>
                        </div>
                    ))}
                </div>
            </div>


            {/* 6th section =========== */}
            <div className='py-10 bg-[#B7E2FA] max-md:bg-white my-10'>

                <h1 className=' text-[29px] font-[600] pb-10 text-center max-md:text-[23px] '>How Helperzz works</h1>

                <div className="flex justify-between max-md:flex-col max-md:w-[90%] m-auto gap-4 w-[70%]" >

                    <div className='flex gap-4'>
                        <h1 className='font-[700] text-[60px] max-md:text-[50px] mt-[-15px]'>1</h1>
                        <div>
                            <h1 className='font-[600] text-[20px] max-md:text-[18px]' >Create a job for free</h1>
                            <h1 className='font-[400] text-[13px] max-md:text-[12px]'>Tell us what you need</h1>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <h1 className='font-[700] text-[60px] mt-[-15px] max-md:text-[50px]'>2</h1>
                        <div>
                            <h1 className='font-[600] text-[20px] capitalize  max-md:text-[18px]' >get a quote</h1>
                            <h1 className='font-[400] text-[13px] capitalize max-md:text-[12px]'>tradespeople get in touch</h1>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <h1 className='font-[700] text-[60px] mt-[-15px] max-md:text-[50px]'>3</h1>
                        <div>
                            <h1 className='font-[600] text-[20px] capitalize max-md:text-[18px]' >rate and review</h1>
                            <h1 className='font-[400] text-[13px] capitalize max-md:text-[12px]'>job done - leave feedback</h1>
                        </div>
                    </div>
                </div>
                <center>
                    <button className='capitalize bg-white rounded-xl w-[250px] mt-4 py-[5px] font-[600] text-[15px] max-md:border-[1px] max-md:border-[#119DED] '>Create a job for free</button>
                </center>
            </div>


            {/* 7th section =========== */}
            <div className='py-10 w-[70%] m-auto max-md:w-[95%]'>

                <h1 className=' text-[29px] font-[600] max-md:text-[23px] max-md:text-center pb-10'>Top Helperzz</h1>

                <div className="grid grid-cols-4 max-md:grid-cols-2 justify-between gap-4 " >
                    <div className='bg-[#B7E2FA] p-4 rounded-xl '>
                        <div className='h-[13rem]'>

                            <h1 className='font-[600] text-[24px] w-[9rem]'>Find the <span className='text-[#0067A1]'>Top Rated</span></h1>
                            <h1 className='font-[600] text-[24px] w-[9rem] text-[#0067A1]'>Helperzz <span className='text-black'>for your project</span></h1>

                        </div>
                        <button className='font-[600] text-[15px] px-4 py-[6px] rounded-xl bg-white capitalize shadow-xl '>View <span className='max-md:hidden'>all</span> top helperzz</button>
                    </div>

                    {helperz?.map((value , index) => (
                        <div key={index} className='border-[1px] border-[#64B6E3] p-4 rounded-xl flex flex-col'>
                            <div className="flex gap-4">
                                <img src={value?.image} alt="image" className="w-12 h-12" />
                                <div className='mt-2'>
                                    <h1 className='font-semibold text-sm'>{value?.name}</h1>
                                    <h1 className='font-normal text-xs'>{value?.experties}</h1>
                                </div>
                            </div>
                            <div className='mt-4'>
                                {value?.point?.map((item, index) => (
                                    <h1 key={index} className='font-medium text-[15px] text-[#119DED]'>{item?.name}</h1>
                                ))}
                            </div>
                            <div className='flex-grow'></div>
                            <button className='font-semibold text-sm px-4 max-md:mt-2 py-2 rounded-xl bg-white capitalize shadow-sm relative border-[1px] border-[#119DED] hover:bg-[#B7E2FA] hover:border-[#B7E2FA] hover:text-white'>
                                Get a free quote
                            </button>
                        </div>


                    ))}

                </div>
            </div>

            {/* 8th section ============= */}


            <section class="bg-[#12937C]">
                <div class="px-4 mx-auto max-w-screen-xl lg:px-2">
                    <div class="mx-auto max-w-screen-md lg:flex md:flex lg:justify-between md:justify-between md:max-w-screen-md lg:max-w-screen-lg py-10">
                        <img className=" max-md:w-[80%] w-[40%] mx-auto rounded-xl" src='./assets/house.png' alt="nsf" />
                        <div className="flex flex-col lg:w-[60%] md:w-[40%] lg:items-center text-center lg:py-12 mt-10 lg:mt-0 md:mt-0">
                            <h2 className="mb-4 text-2xl font-bold text-white sm:text-2xl ">GOT A DREAM PROJECT ?</h2>
                            <h2 className="text-[17px] text-white  mt-[-10px] font-[300] uppercase">we can provide a quick estimate !</h2>
                            <button className="px-6 py-2 bg-white text-black sm:w-[100%] lg:w-[50%] lg:mt-4 rounded-lg font-bold border-black border-[1px] lg:border-none hover:text-[#2B937C] hover:shadow-sm hover:shadow-white">GET A FREE QUOTE</button>
                        </div>
                    </div>
                </div>
            </section>



            <div className="grid grid-cols-1 mt-8 lg:mx-56 max-md:mx-0 mx-10 mb-4 lg:grid-cols-2 md:grid-cols-2">
                <div className="flex flex-col bg-gray-100 rounded-xl m-6 py-8 px-8 ">
                    <h2 className="mt-6 font-[600] text-[22px]">Hire Verified And Reviewed Pros</h2>
                    <h5 className=" mt-3 font-[500] text-[18px] ">With reviews, ratings and verification, homestars give you the tools you need to hir with confidence </h5>
                    <div className="flex items-center mt-8">
                        <div className="w-[50px] h-[50px] rounded-full bg-[#43D9BE80]">
                            <PiBathtub className=" text-[50px] px-2 py-2" />
                        </div>
                        <h1 className="font-[400] text-[14px] ml-3">Get matched with 3 pros directly or research yourself fro a lis of verified and reviewed pros</h1>
                    </div>
                    <div className="flex items-center mt-8">
                        <div className="w-[50px] h-[50px] rounded-full bg-[#43D9BE80]">
                            <PiBathtub className=" text-[50px] px-2 py-2" />
                        </div>
                        <h1 className="font-[400] text-[14px] ml-3">Get matched with 3 pros directly or research yourself fro a lis of verified and reviewed pros</h1>
                    </div>
                    <div className="flex items-center mt-8">
                        <div className="w-[50px] h-[50px] rounded-full bg-[#43D9BE80]">
                            <PiBathtub className=" text-[50px] px-2 py-2" />
                        </div>
                        <h1 className="font-[400] text-[14px] ml-3">Get matched with 3 pros directly or research yourself fro a lis of verified and reviewed pros</h1>
                    </div>
                    <button className="border-[1px] border-[#43D9BE80] rounded-lg w-[180px] h-10 mx-auto mt-5 hover:bg-[#43D9BE80] hover:text-white">Get Started</button>
                </div>
                <div className="flex flex-col bg-gray-100 rounded-xl m-6 py-8 px-8 ">
                    <div>
                        <img width={"100%"} className="rounded-xl" src='./assets/success.png' alt="success story" />
                    </div>
                    <h1 className="mt-6">&apos;As an employee, I also use Helperzz because I trust the service&apos;.</h1>
                    <h1 className="mt-4 font-semibold">Ruth, major roofing project</h1>
                    <button className="border-[1px] border-[#43D9BE80] rounded-lg w-[180px] h-10 mx-auto mt-36 hover:bg-[#43D9BE80] hover:text-white">Success Stories</button>
                </div>
            </div>

            {/* Review */}
            <h1 className=" text-center text-[28px] font-[600]">HELPERZZ</h1>
            <h1 className=" text-center text-[18px] font-[400]">REVIEWS</h1>
            <div className="grid grid-cols-1 mt-8 w-[80%] m-auto mb-4 lg:grid-cols-3 md:grid-cols-2">
                {review?.map((value , index) => (
                    <div key={index} className="flex flex-col bg-[#F7F9FB] rounded-xl items-center m-6 py-4 px-4 ">
                        <h2 className="text-center mt-6 font-bold">HELPERZZ USER</h2>
                        <h2 className='text-[#119DED] text-[1.6rem]'>★ ★ ★ ★ ★</h2>
                        <h5 className="">28.02.2024</h5>
                        <h5 className=" mt-3 text-center font-[600]">&apos;We use them for most of our home needs.Very reliable and always get great results&apos;</h5>
                    </div>

                ))}

            </div>

            {/* Tu sab se bra Papu */}
            <section class="lg:bg-[#12937C]">
                <div class="px-4 mx-auto max-w-screen-xl lg:px-2">
                    <div class="mx-auto max-w-screen-md lg:flex lg:justify-between lg:max-w-screen-lg  ">
                        <div className="flex flex-col lg:w-[50%] lg:items-center text-center lg:py-12">
                            <h2 class="mb-2 text-2xl font-extrabold lg:text-white sm:text-2xl mt-4">SUDDENLY IT&apos;S ALL SO DOABLE</h2>
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
                          <button className="border-[1px] mt-2 px-6 py-[5px] rounded-xl border-[#43D9BE] max-md:mt-4"> Subscribe  </button>
                        </center>
                          </div>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    )
}

export default Home