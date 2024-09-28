import React from 'react'

export default function ({options,onFilterChange}) {
    
  return (
    <div className='h-full w-full flex'>
      <div className='w-2/5'>
        <label>Filter by:</label>
        <select name="" id="" >
        {
            options.map((op,index)=>{
                return <option key={index} value={op}>{op}</option>
            })
        }
        </select>
      </div>
      <div>
        <select name="" id=""></select>
      </div>
    </div>
  )
}
