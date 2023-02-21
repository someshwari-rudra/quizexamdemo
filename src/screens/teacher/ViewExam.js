import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { ViewExamAction } from '../../redux/actions/Teacher';

const ViewExam = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ViewExamAction());
  }, []);

  return (
    <div className='container'>
    </div>
  )
}

export default ViewExam