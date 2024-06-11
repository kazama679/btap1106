import React, { useEffect, useState } from 'react'
import axios from 'axios'
interface Student{
    id:number,
    student_name:string,
    email:string,
    address:string,
    phone:string,
    status:boolean,
    created_at:string
}

export default function Client() {
    const [student,setStudent]=useState<Student[]>([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/student")
        .then(response=>{
            setStudent(response.data)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div>Client
      <p>danh sách students</p>
      <ul>
        {student.map((item)=>{
            return <li>Tên: {item.student_name}, Email: {item.email}, Địa chỉ: {item.address}, Số: {item.phone}</li>
        })}
      </ul>
    </div>
  )
}

// bài 3
function getStudentById() {
    axios.get("http://localhost:8080/student/1")
    .then(response=>{
        console.log(response.data);
    })
    .catch(()=>console.log("Không tìm thấy bản ghi"))
}
getStudentById();

// bài 4
function removeById(){
    axios.delete("http://localhost:8080/student/1") // xóa id 1
}
removeById()

// bài 5
function createStudent(){
    let newStudent={
        student_name:"Minh Anh",
        email:"menk@gmail.com",
        address:"Hải Phòng",
        phone:"12355",
        status:true,
        created_at:"11/06/2024"
    }
    axios.post("http://localhost:8080/student", newStudent);
}
// createStudent()

// bài 6
function updateStudentById(){
    axios.patch("http://localhost:8080/student/4", {student_name:"Quang ngơ", email:"tèo@gmail.com",});
}
// updateStudentById()