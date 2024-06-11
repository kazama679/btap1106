import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import DeleteStudent from './DeleteStudent';

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios
      .get("http://localhost:8080/student")
      .then((response: AxiosResponse) => setStudents(response.data))
      .catch((err) => console.log(err));
  };

  const handleDeleteClick = (student: Student) => {
    setSelectedStudent(student);
    setShowDeleteModal(true); // Hiển thị modal khi người dùng nhấn vào nút xóa
  };

  const handleDelete = () => {
    if (selectedStudent) {
      axios
        .delete(`http://localhost:8080/student/${selectedStudent.id}`)
        .then(() => {
          setSelectedStudent(null);
          fetchStudents();
          setShowDeleteModal(false); // Đóng modal sau khi xóa thành công
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Quản lý <b>sinh viên</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <a
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i className="material-icons"></i>
                    <span>Thêm mới sinh viên</span>
                  </a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="selectAll" />
                      <label htmlFor="selectAll" />
                    </span>
                  </th>
                  <th>Tên sinh viên</th>
                  <th>Email</th>
                  <th>Địa chỉ</th>
                  <th>Số điện thoại</th>
                  <th>Lựa chọn</th>
                </tr>
              </thead>
              <tbody>
                {students.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <span className="custom-checkbox">
                        <input
                          type="checkbox"
                          id={`checkbox${item.id}`}
                          name="options[]"
                          defaultValue={1}
                        />
                        <label htmlFor={`checkbox${item.id}`} />
                      </span>
                    </td>
                    <td>{item.student_name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a
                        href="#editEmployeeModal"
                        className="edit"
                        data-toggle="modal"
                      >
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                        >
                          
                        </i>
                      </a>
                      <a
                        href="#deleteEmployeeModal"
                        className="delete"
                        data-toggle="modal"
                        onClick={() => handleDeleteClick(item)}
                      >
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                        >
                          
                        </i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">
                Hiển thị <b>5</b>/<b>10 </b>bản ghi
              </div>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a href="#">Trước</a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    Sau
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {showDeleteModal && selectedStudent && (
        <DeleteStudent
          studentName={selectedStudent.student_name}
          onDelete={handleDelete}
          onClose={() => setShowDeleteModal(false)} // Truyền hàm để đóng modal
        />
      )}
    </>
  );
}
