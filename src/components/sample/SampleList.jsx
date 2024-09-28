import React, { useEffect, useState } from 'react'
import useAxiosSample from './useAxiosSample'
import Loading from '../shared/Loading'
import Pagination from '../shared/Pagination'
export default function SampleList() {
    const [samples, setSamples] = useState([])
    const [currentPage,setCurrentPage]=useState(0)
    const [itemsPerPage, setItemsPerPage]=useState(10)
    const [totalItems, setTotalItems]=useState(0)
    const {data, error, loading, fetchData} = useAxiosSample({
        url:`/samples?pageSize=${itemsPerPage}&pageNo=${currentPage}`,
        method:'get'
    })

    const formatDate = (date)=>{
      return new Date(date).toISOString().split('T')[0]
    }
    const handlePageChange = (page)=>{
      console.log('page change',page)
      setCurrentPage(page)
    }
    const handleItemsPerPageChange = (i)=>{
      console.log('items per page change',i)
      setItemsPerPage(i)
      setCurrentPage(0)
    }

    useEffect(()=>{
        if(data && data.samples){
            setSamples(data.samples)
            setTotalItems(data.totalItems)

            console.log('voila les samples',data.samples)
        }
        else{
          setSamples([])  
        }

        if (error) {
          console.log(error);
        }
        if (loading) {
          console.log("retrieving tutorials...");
        }
    },
    [data, error, loading, itemsPerPage, currentPage])
  return (
    
    <div className='border-8 h-full overflow-x-hidden	'>
      {
        loading ? (
          <div className='w-20 h-20 '>
            <Loading/>
          </div>
        ):
        (
          <>
     
      <table className='bg-stone-200 border-spacing-2 border-collapse w-full table-fixed text-center'>
        <thead className='bg-stone-300'>
          <tr className=''>
          <th className=''>
            Code
          </th>
          <th className=''>
            Date-collect
          </th>
          <th className=''>
            Resultat
          </th>
          <th className=''>
            Type
          </th>
          <th className=''>
            Donneur
          </th>
          </tr>
        </thead>
        <tbody className=''>
          {samples.map((sample)=>{
            return (
              <tr key={sample.id} className='hover:bg-slate-300 hover:cursor-pointer'>
                <td className=''>
                  {sample.code}
                </td>
                <td className=''>
                  {formatDate(sample.dateCollect)}
                </td>
                <td className=''>
                  {sample.resultat}
                </td>
                <td className=''>
                  {sample.typeEchantillon.libelle}
                </td>
                <td  className=''>
                  {sample.donneur.firstname}
                </td>
              </tr>
            )
          })}
        </tbody>

      </table>
          </>

        )
      }
      <Pagination
      currentP={currentPage}
      onPageChange={handlePageChange}
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      onItemsPerPageChange={handleItemsPerPageChange}

      />
    </div>
    
  )
}
