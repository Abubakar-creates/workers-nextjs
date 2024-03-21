import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer } from '@mui/material';
import Link from 'next/link';
import { MdOutlineCancel } from "react-icons/md";



const Header = () => {

    const [open, setOpen] = useState(false);

    const toggleDrawer = () => () => {
      setOpen(!open);
    };
    return (
        <>
            <div className='flex md:hidden justify-between px-4 pt-4'>
                <h1 className='uppercase text-[1.6rem] font-[600]'>Helperzz</h1>
                <GiHamburgerMenu onClick={toggleDrawer()} />

            </div>
            <div className="flex justify-between bg-transparent	 max-md:hidden w-[90%] m-auto pt-6">

                <div className="flex items-center h-12">
                    <h1 className="font-bold text-[40px] ml-2">H</h1>
                    <button className="text-[15px] pl-12 font-bold">
                        Browse Categories
                    </button>
                    <button className=" pl-8 text-[13.4px] font-[500] text-gray-600">Blog</button>
                    <button className=" pl-8 text-[13.4px] font-[500] text-gray-600">Write a review</button>
                </div>
                <div className="flex items-center h-12">
                    <div className="flex">

                        <input
                            type="search"
                            name="search"
                            placeholder="Search for Category "
                            className="pl-2 py-2 rounded-l-xl  text-[15px] border-gray-400 text-[12px]  border-[1px] outline-none  flex-1 bg-transparent"
                        />
                        <input
                            type="search"
                            name="search"
                            placeholder="Oshawa"
                            className=" py-2 pl-2 text-[15px] border-gray-400 text-[12px]  border-t-[1px] border-b-[1px] border-r-[1px] outline-none bg-transparent  w-[5.5rem] "
                        />
                        <IoSearch className="border-t-[1px] border-b-[1px] border-r-[1px] border-gray-400 text-[12px]  rounded-r-xl text-gray-600 py-2 bg-transparent" size={40} />

                    </div>

                   <Link href='/login'>
                   <button className="text-[13.4px] font-[500] text-gray-600 pl-8">Log In</button>
                   </Link> 
                   <Link href="/register"> 
                    <button className="text-[13.4px] font-[500] text-gray-600 pl-8 pr-8">Sign Up</button>
                   </Link> 
                    <button
                        className="text-[13.4px] px-5 bg-[#119DED] rounded-xl py-2 text-center font-semibold text-white">
                        Are You A Home Pro ?
                    </button>
                </div>

            </div>

            <div>
                <Drawer                  
                  variant="persistent"
                  anchor="top"
                  open={open}
                  >
                    <div className='!bg-[#43D9BE] px-5 py-5 flex justify-between items-center'>
                    <div className='flex gap-4'>
                      <p className='py-2 px-4 border-[2px] border-green-900 bg-[#12937C] text-white text-[.8rem] rounded-[5px] cursor-pointer hover:bg-purple-700 font-[600]  '>Sign Up</p>
                      <p className='py-2 border-[2px] border-white px-4 rounded-[5px] text-[.8rem] text-white cursor-pointer hover:bg-purple-200 font-[600] '>Log in</p>
                    </div>
                    <div onClick={toggleDrawer()} className='text-white'>
                      <MdOutlineCancel className="cursor-pointer" size={22} />
                    </div>

                  </div>
                  <div className='flex flex-col bg-[#12937C] min-h-full'>
                    <Link href='/' className={`border-b-[1px] border-green-200 pl-6 h-[3.5rem] bg-[#12937C] text-white flex items-center`}>
                      <p className='text-[0.9rem]'>Home</p>
                    </Link>
                    <Link href='/' className={`border-b-[1px] border-green-200 pl-6 h-[3.5rem] bg-[#12937C] text-white flex items-center`}>
                      <p className='text-[0.9rem]'>Browse Categories</p>
                    </Link>
                    <Link href='/blog' className={`border-b-[1px] border-green-200 pl-6 h-[3.5rem] bg-[#12937C] text-white flex items-center`}>
                      <p className='text-[0.9rem]'>Blog</p>
                    </Link>
                    <Link href='/' className={`border-b-[1px] border-green-200 pl-6 h-[3.5rem] bg-[#12937C] text-white flex items-center`}>
                      <p className='text-[0.9rem]'>Write a Review</p>
                    </Link>
                  </div>
                </Drawer>
            </div>
        </>
    );
};

export default Header;