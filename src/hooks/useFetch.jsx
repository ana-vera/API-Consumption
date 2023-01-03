import { useState, useEffect } from "react"

export const useFetch = (url)=> {
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)

  useEffect(()=>{

     /**promise */
    window.fetch(url)
    .then(request => request.json())
    .then(response=> setData(response))
    .catch(error=> console.log(error))
    .finally(()=>setLoading(false))
    
  },[])

  return {
    data,
    loading,
  }
}