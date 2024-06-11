import axios from 'axios'
import React, { useEffect } from 'react'

export default function Sort() {
    /*
        Tiến hành sắp xếp theo những điều kiện
        - tăng dần, giảm dần
    */
   useEffect(()=>{
    axios.get('http://localhost:8080/users?_sort=age&_order=asc')
    .then(a=>console.log('sau khi sắp xếp tăng dần', a.data))
    .catch(err=>console.log(err))
   })
  return (
    <div>
      
    </div>
  )
}
