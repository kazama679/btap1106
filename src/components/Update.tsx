import React, { useEffect } from 'react'
import axios from 'axios'

export default function Update() {
  /*
    khi update dùng 2 phương thức PUT | PATCH
    PUT: update tất cả
    PATCH: update 1 vài thuộc tính, các thuộc tính còn lại vẫn giữ nguyên
  */
  useEffect(()=>{
    // khi update p bt đc id của thằng cần update
    // axios.patch("http://localhost:8080/users/4", {name:"Quang ngơ"});
    axios.put("http://localhost:8080/users/4", {name:"Quang ngơ"});
  },[])
  return (
    <div>Update
      
    </div>
  )
}