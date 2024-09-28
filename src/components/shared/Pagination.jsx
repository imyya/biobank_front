import React from 'react'

export default function Pagination({currentP,totalP,onPageChange,totalItems,itemsPerPage, onItemsPerPageChange}) {
  const totalPages = Math.ceil(totalItems/itemsPerPage)
  // const handlePageClick = (page)=>{
  //   onPageChange(page)
  // }
  return (
    <>
    <div className='w-full h-8 flex justify-between mt-2 p-4'>
    <div className=''>


<label>Items per page:</label>
<select
  id="itemsPerPage"
  value={itemsPerPage}
  onChange={(e) => onItemsPerPageChange(parseInt(e.target.value))}
  className='bg-stone-200 w-16 text-center ml-2 h-8 rounded-md text-stone-700 focus:outline-none hover:bg-stone-300 pointer-cursor'
>
    <option value={5} className='hover:bg-stone-300 pointer-cursor'>5</option>
    <option value={10} className='hover:bg-stone-300 pointer-cursor'>10</option>
    <option value={20} className='hover:bg-stone-300 pointer-cursor'>20</option>
  </select>
  </div>
      <div className='flex w-2/5 justify-around '>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
          className={`text-stone-100 bg-stone-400 ${ i===currentP && 'bg-stone-500'} rounded-full w-8 h-8 pointer-cursor`}
            key={i}
            onClick={() => onPageChange(i)}
            disabled={i === currentP} >
          { i + 1 } 
      </button>
      ))}
      </div>

  
        {/* <button className='rounded-full bg-stone-400' onClick={onPageChange(currentP-1)} 
        disabled={currentP===0}>previous</button>
        <button className='rounded-full bg-stone-400' onClick={onPageChange(currentP+1)}>
            next
        </button> */}


      
    </div>
    </>
  )
}
