import React, { useEffect } from 'react'
import axios from 'axios'
export default function Find() {
    /*
        Các chức năng tìm kiếm user, tìm kiếm sản phẩm
        tìm kiếm những user có chữ cái 
    */
//    let value:string="q";
//    useEffect(()=>{
//         axios.get(`http://localhost:8080/users?name_like=${value}`)
//         .then(res=>{
//             console.log('giá trị trả về là ',res.data);
//         })
//         .catch(err=>console.log(err))
//    })


    /*
        tìm kiếm bắt đầu bằng chữ cái   
    */
   useEffect(()=>{
        axios.get('http://localhost:8080/users?name_like=^x')
        .then(res=>{
            console.log('giá trị trả về là ',res.data);
        })
        .catch(err=>console.log(err));
   })
  return (
    <div>Find
      
    </div>
  )
}
