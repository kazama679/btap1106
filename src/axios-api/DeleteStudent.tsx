import React from 'react';

interface DeleteStudentProps {
  studentName: string;
  onDelete: () => void;
  onClose: () => void;
}

export default function DeleteStudent({ studentName, onDelete, onClose }: DeleteStudentProps) {
  return (
    <>
      <div id="deleteEmployeeModal" className="modal fade show" style={{ display: 'block' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Xóa sinh viên</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={onClose} 
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>Bạn chắc chắn muốn xóa sinh viên {studentName}?</p>
            </div>
            <div className="modal-footer">
              <input
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                defaultValue="Hủy"
                onClick={onClose} 
              />
              <input
                type="button"
                className="btn btn-danger"
                defaultValue="Xóa"
                onClick={onDelete}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
}