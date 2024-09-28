import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { TiMessageTyping } from "react-icons/ti";
import { IoNotificationsOutline } from "react-icons/io5";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
export default function Header() {
  return (
    <div className='bg-neutral-100 px-4 py-2 h-18 flex justify-between border-b border-gray-300'>
      <div className='relative'>
        <IoSearchOutline  className='absolute top-3 left-3 text-gray-400 '/>
        <input type="text" placeholder='search ...' className='w-[24rem] text-sm border border-gray-300 h-10 focus:outline-none active:outline-none rounded-md pl-10' />
      </div>
      <div className="flex gap-2 mr-2">
      <Popover>
      {({ open }) => (
        <>
          <PopoverButton className={`${open && "bg-gray-200"} rounded-md inline-flex items-center text-gray-500  hover:text-opacity-100 focus:outline-none active:bg-gray-200`}>

          <TiMessageTyping fontSize={30} className='cursor-pointer'/>
          </PopoverButton>
          <PopoverPanel className="flex flex-col bg-white mr-8 w-80 ring-1 shadow-md ring-opacity-5 px-2 py-2.5 absolute right-10 rounded-sm ">
            <strong className='text-gray-700 text-sm font-medium'>Messages</strong>
            <div className='py-2'>
                No messages yet
            </div>
          </PopoverPanel>

        </>
      )}
    </Popover>
        <IoNotificationsOutline className='text-2xl cursor-pointer'/>

      </div>
    </div>
  )
}
