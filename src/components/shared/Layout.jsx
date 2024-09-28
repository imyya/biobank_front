import React from 'react'
import SampleList from '../sample/SampleList'
import Sidebar from './Sidebar'
import { FcNext } from 'react-icons/fc'
import { Outlet } from 'react-router-dom'
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import Header from './Header'

export default function Layout() {

  return (
<div className="flex flex-row h-screen w-screen bg-stone-300 overflow-hidden ">

      <Sidebar></Sidebar>
      <div className="flex-1">
        <Header></Header>
        <div className="h-full"> {<Outlet/> }</div>
      </div>
             

        
</div>
  )
}
