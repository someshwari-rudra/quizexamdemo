import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ViewExamAction } from '../../redux/actions/Teacher';
import Table from '../../reusableComponents/Table';

const ViewExam = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ViewExamAction());
  }, []);

  const viewExamData = useSelector((state) => state.teacher.ViewExam);
  console.log('viewExamData :>> ', viewExamData);
 let properties;
 if (viewExamData && viewExamData.length > 0) {
   properties = Object.keys(viewExamData[0]);
 }
  console.log("properties :>> ", properties);
  const columns = ["subjectName", "subjectName", "email"];
   const ViewStdBtnAttributes = [
     {
       value: "View Details",
       typeOf: "view_Details",
       type: "button",
       id: "_id",
       //    onClick: (id) => dispatch(deleteUserListByIdAction(id)),
     },
   ];

  return viewExamData && viewExamData.length === 0 ? (
    <>
      <h1 className="ms-5">loading...</h1>
    </>
  ) : (
    // <h1>table</h1>
    <div className="container-fluid m-2">
      <Table
        columns={columns}
        data={viewExamData}
        buttonAttributes={ViewStdBtnAttributes}
      />
    </div>
  );
}

export default ViewExam