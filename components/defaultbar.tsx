'use client';
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { useEffect ,useState } from "react";
import {useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter ,redirect } from 'next/navigation';
import Sidebar from "./sidebar";
import { Underdog } from "next/font/google";
export default function DefaultSidebar() {
    const router = useRouter();
    const { data: session , status} = useSession();
    // if (session) {
    //     if(session.user.role == 'student'){
    //       router.push('/student');
    //     }else if(session.user.role == 'staff') {
    //       router.push('/staff');
    //     }
    // }
    const handleClickToAnnouncemantPage = async () => {
      router.push('/entrance/announcement');
        
    };
    const handleClickToCoursePage = async () => {
        router.push("/entrance/course");
    };
    const handleClickToLoginPage = async () => {
        router.push("/entrance/login");
    };

    useEffect(() => {
      // 確保 session 資料可用且不為 null

    }, [session,status]);

    if (session !== undefined && session ) {
      return <Sidebar></Sidebar>
    }
    
      return (
          <Disclosure as="nav">
            <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
              <GiHamburgerMenu
                className="block md:hidden h-6 w-6"
                aria-hidden="true"
              />
            </Disclosure.Button>
            <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
              <div className="flex flex-col justify-start item-center">
                <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
                  fcu
                </h1>
                <div className=" my-4 border-b border-gray-100 pb-4">
                  <div onClick={handleClickToAnnouncemantPage} className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    <Link href="/announcement">公告</Link>
                    </h3>
                  </div>
                  <div onClick={handleClickToCoursePage} className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    檢索課程
                    </h3>
                  </div>
                  
                </div>
                <div className=" my-4 border-b border-gray-100 pb-4">
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                      Settings
                    </h3>
                  </div>
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                      More
                    </h3>
                  </div>
                </div>
          
                <div onClick={handleClickToLoginPage} className=" my-4">
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                      登入
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Disclosure>
    )
    
}

