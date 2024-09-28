import React from 'react'
import { useState, useEffect } from 'react'
import http from '../../api/http-common.js'
export default function useAxiosSample({url,method}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const axiosParams = {
        method: method,
        url: url    
    }
    const fetchData = async ()=>{
        try{

            const res = await http.request(axiosParams)
            setData(res.data)
            console.log('mddrrr ')

        }
        catch(err){
            setError(err)
            setLoading(false)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[url])
  return {data, error, loading, fetchData}
}
