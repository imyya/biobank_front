import React from 'react'
import { FcBiotech } from 'react-icons/fc'
import { Link, useLocation } from 'react-router-dom'
import { IoIosArrowDropright } from 'react-icons/io'
import { DASHBOARD_SIDEBAR_ITEMS_BOTTOM, DASHBOARD_SIDEBAR_ITEMS_TOP, } from '../../lib/const/navigation'
import { useState } from 'react'
import logo from '../../assets/logo2.png'
//





export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={`flex bg-neutral-200   transition-all duration-500  ${isOpen ? 'w-72' : 'w-16'} flex-col justify-around relative shadow-lg`}>
        
        <div className={`absolute -right-4 translate-y-10 cursor-pointer ${isOpen && "rotate-180"}`}> 
        <IoIosArrowDropright  fontSize={30} onClick={()=>setIsOpen(!isOpen) }/>
        </div>

            <div className={`flex mt-4 ml-4 gap-4 items-center`}>
                <img src={logo} className={`rounded-full w-12`} alt="logo" />
                <span className={`text-sky-700 text-3xl font-bold ${!isOpen && 'scale-0'} duration-300`}>BioBank</span>
            </div>

                
            <div className={`h-2/4 flex flex-col ml-5`}>

                {DASHBOARD_SIDEBAR_ITEMS_TOP.map((item)=>{
                    return(
                        <SidebarLinks key={item.key} item={item} isOpen={isOpen}></SidebarLinks>
                    )
                })}
            </div>

            <div className="h-24 flex flex-col mt-4 ml-5 border-t border-neutral-300 pt-4">
                {DASHBOARD_SIDEBAR_ITEMS_BOTTOM.map((item)=>{
                    return(
                        <SidebarLinks key={item.key} item={item} isOpen={isOpen}></SidebarLinks>
                    )
                })}
            </div>
                
        </div>
    )
    }

    function SidebarLinks({item, isOpen}){
        const {pathname } = useLocation()
        const isActive = pathname === item.path
        return(
        
            <Link to={item.path} className={`h-2/4 flex gap-3 text-2l font-semibold ${isActive && 'text-sky-800'} text-neutral-600 hover:text-neutral-500 ${!isOpen ? 'w-9 overflow-hidden' : 'w-full'} duration-700`}>
                <span className='text-2xl '>{item.icon}</span>
                {item.label}
            </Link>
        )
    }
