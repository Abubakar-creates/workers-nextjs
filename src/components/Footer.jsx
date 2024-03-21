'use client'

import React from "react";

const Footer = () => {
  return (
    <footer class="bg-[#E8E8E8]">
      <div class=" w-[70%] max-md:w-[90%] m-auto">
        <div class="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-10  py-8 pt-20">
          <div>
            <h2 class="mb-6 font-bold text-[18px] text-gray-900 uppercase">
              HOMEOWNERS
            </h2>
            <ul class="text-gray-600 text-[14px]">
              <li class="mb-2">
                <a href="#" class=" hover:underline">
                  BROWSE CATEGORIES
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:underline">
                  BROWSE TASKS
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:underline">
                  WRITE A REVIEW
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:underline">
                  BLOG
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class=" hover:underline">
                  HOMEOWNER FAQ
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class=" hover:underline">
                  REVIEW GUIDELINES
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class=" hover:underline">
                  HOMEOWNER
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class=" hover:underline">
                  TRUST
                </a>
              </li>
            </ul>
          </div>
          <div>
          <h2 class="mb-6 font-bold text-[18px] text-gray-900 uppercase">
          CONTRACTORS
            </h2>
            <ul class="text-gray-600 text-[14px]">
              <li class="mb-2">
                <a href="#" class="hover:underline">
                  JOIN HELPERZZ
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:underline">
                  HOME PROFESSIONAL FAQ
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:underline">
                  BUILDING TRUST
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:underline">
                  HOME PROFESSIONAL TERMS
                </a>
              </li>
            </ul>
          </div>
          <div>
          <h2 class="mb-6 font-bold text-[18px] text-gray-900 uppercase">
          HELPERZZ
            </h2>
            <ul class="text-gray-600 text-[14px]">
              <li class="mb-2">
                <a href="#" class="hover:underline">
                  ABOUT
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:underline">
                  CAREERS AT HELPERZZ
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:underline">
                  CONTACT US
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class=" hover:underline">
                  TERM OF USE
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class=" hover:underline">
                  PRIVACY
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pb-4">
        <h1 className="font-bold text-[20px]">HELPERZZ.COM</h1>
        <h1>2024</h1>
      </div>
    </footer>
  );
};

export default Footer;
