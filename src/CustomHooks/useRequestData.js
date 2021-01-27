import React from 'react'
import {useEffect, useState} from "react"
import axios from 'axios'

export default function useRequestData(url, initialState) {
   const [data, setData] = useState(initialState)
    const header = {headers: {"auth": localStorage.getItem('token')}}
   useEffect(()=> {
       axios.get(url,header).then((response) => {
           setData(response.data)
       }).catch((error) => {
           console.log(error.message)
       })
   }, [url])
  
    return data
}
