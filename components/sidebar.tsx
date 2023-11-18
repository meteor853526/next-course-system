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
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Defaulebar from './defaultbar'
import { useRouter ,usePathname, useSearchParams} from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const { data: session } = useSession();


  const handleSignOut = async () => {
    await signOut({redirect: true, callbackUrl: '/entrance/announcement' });
  };
  const handleClickToAnnouncemantPage = async () => {
    router.push("/entrance/announcement");
  };
  const handleClickToCoursePage = async () => {
    router.push("/entrance/course");
  };
  const handleClickToAllCoursePage = async () => {
    router.push("/entrance/allcourse");
  };
  const handleClickToUserPage = async () => {
    router.push(`/${session?.user?.role}/user/?user=${session?.user?.account}`);
  };
  const handleClickToTablePage = async () => {
    router.push(`/${session?.user?.role}/table/?user=${session?.user?.account}`);
  };
  const handleClickToSelectCoursePage = async () => {
    router.push(`/${session?.user?.role}/selectCourse/?user=${session?.user?.account}`);
  };


  if(session){

  
    return (
      <div>
        <Disclosure as="nav">
          <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
            <GiHamburgerMenu
              className="block md:hidden h-6 w-6"
              aria-hidden="true"
            />
          </Disclosure.Button>
          <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
            <div className="flex flex-col justify-start item-center">
              <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-10 w-full">
                fcu
              </h1>
              <h1 className="text-base text-center cursor-pointer font-bold text-gray-800 pb-4 w-full">
                <div>
                  {session ? ( 
                    <>
                      <h1>姓名: {session?.user?.account}</h1>
                    </>
                  ) : (
                    <>
                      <h1>You are not logged in</h1>
                    </>
                  )}
                  </div>
              </h1>
              <div className=" my-4 border-b border-gray-100 pb-4">
              <div onClick={handleClickToAnnouncemantPage} className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    公告
                  </h3>
                </div>
                <div onClick={handleClickToUserPage} className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                      個人資料
                  </h3>
                </div>
                <div onClick={handleClickToCoursePage} className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                      檢索課程
                    </h3>
                </div>
                <div onClick={handleClickToAllCoursePage} className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                      所有課程
                    </h3>
                </div>
                {session?.user?.role === 'student'? (  // student function
                    <>
                      <div onClick={handleClickToTablePage} className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <FaRegComments className="text-2xl text-gray-600 group-hover:text-white " />
                        <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                          課表
                        </h3>
                      </div>
                      <div onClick={handleClickToSelectCoursePage} className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white " />
                        <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                          加退選
                        </h3>
                      </div>

                    </>
                ) : session?.user?.role === 'staff' ? (  // staff function
                    <>
                      <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <FaRegComments className="text-2xl text-gray-600 group-hover:text-white " />
                        <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                          修改課程
                        </h3>
                      </div>
                      <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white " />
                        <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                          pass
                        </h3>
                      </div>
                      <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                        <MdOutlineIntegrationInstructions className="text-2xl text-gray-600 group-hover:text-white " />
                        <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                          行事曆
                        </h3>
                      </div>
                    </>
                ) : (
                  <>
                    <h1>You are not logged in</h1>
                  </>
                )}
      
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
              <div className=" my-4">
                <div onClick={handleSignOut} className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                  <h3  className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    登出
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Disclosure>
      </div>
    );
  }
}
  

