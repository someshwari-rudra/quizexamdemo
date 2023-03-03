import React from 'react'
import { useSelector } from 'react-redux';

const Loading = () => {
     const loading = useSelector((state) => state.teacher.loading);
  return (
    <div className="d-flex position-absolute justify-content-center align-items-center">
      {loading && (
        <div className="spinner-border spinner-border me-1" role="status">
          <span className="sr-only"></span>
        </div>
      )}
    </div>
  );
}

export default Loading