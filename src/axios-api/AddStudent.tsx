import React from 'react'

export default function AddStudent() {
  return (
    <div id="addEmployeeModal" className="modal fade">  
            <div className="modal-dialog">
            <div className="modal-content">
                <form>
                <div className="modal-header">
                    <h4 className="modal-title">Thêm mới sinh viên</h4>
                    <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                    >
                    ×
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                    <label>Tên sinh viên</label>
                    <input type="text" className="form-control" required />
                    </div>
                    <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" required />
                    </div>
                    <div className="form-group">
                    <label>Địa chỉ</label>
                    <textarea
                        className="form-control"
                        required
                        defaultValue={""}
                    />
                    </div>
                    <div className="form-group">
                    <label>Số điện thoại</label>
                    <input type="text" className="form-control" required />
                    </div>
                </div>
                <div className="modal-footer">
                    <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                    />
                    <input
                    type="submit"
                    className="btn btn-success"
                    defaultValue="Add"
                    />
                </div>
                </form>
            </div>
            </div>
    </div>
  )
}
