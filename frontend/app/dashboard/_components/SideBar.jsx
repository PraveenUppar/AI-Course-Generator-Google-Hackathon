"use client"

import React from 'react'
import { HiHome } from "react-icons/hi";
import { HiOutlinePuzzle } from "react-icons/hi";
import { HiChevronDoubleUp } from "react-icons/hi";
import { HiLogout } from "react-icons/hi";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from "@/components/ui/progress"


function SideBar() {
    const Menu = [
        {
            id:1,
            name:"Home", 
            icon:<HiHome />,
            path:"/dashboard"
        },
        {
            id:2,
            name:"Explore", 
            icon:<HiOutlinePuzzle />,
            path:"/dashboard/explore"
        },
        {
            id:3,
            name:"Upgrade", 
            icon:<HiChevronDoubleUp />,
            path:"/dashboard/upgrade"
        },
        {
            id:4,
            name:"Logout", 
            icon:<HiLogout />,
            path:"/dashboard/logout"
        },
        
    ]
    const path = usePathname()
    
  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
        <h1 className='text-2xl'>Neo Course</h1>
      <hr className='my-5'></hr>

      <ul>
        {Menu.map(item=>(
            <div>
                <Link href={item.path}><div className={`flex items-center gap-2 text-2xl p-3 text-gray-900 cursor-pointer mb-2 hover:bg-gray-100 hover:text-black rounded-lg ${item.path == path&& 'bg-gray-100 text-black'}`}>
                        {item.icon}
                        <span className='ml-3 text-lg'>{item.name}</span>
                    </div> </Link>
                    

            </div>
        ))}
      </ul>
      <div className='absolute bottom-10 w-[80%]'><Progress value={33} /><h2>3 out of 5 course created</h2><h3>Upgrade your plan for unlimited course</h3></div>
    </div>
  )
}

export default SideBar
