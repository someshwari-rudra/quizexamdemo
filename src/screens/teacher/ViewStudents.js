import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ViewStdBtnAttributes } from "../../Data/ViewStdBtnAttribute";
import { ViewStudentData } from "../../redux/actions/Teacher";
import Table from "../../reusableComponents/Table";

const ViewStudents = () => {
  const dispatch = useDispatch();
  const getStudentData = useSelector((state) => state.teacher.ViewStudent);
  let properties;
  if (getStudentData && getStudentData.length > 0) {
    properties = Object.keys(getStudentData[0]);
  }
  console.log("properties :>> ", properties);
  useEffect(() => {
    dispatch(ViewStudentData());
  }, [dispatch]);
  return (
    <div className="container-fluid ">
      <h2>View Student Details</h2>
      {getStudentData && getStudentData.length > 0 ? (
        <Table
          columns={properties}
          data={getStudentData}
          buttonAttributes={ViewStdBtnAttributes}
        />
      ) : (
        <>
          <h6>Loading...</h6>
        </>
      )}
    </div>
  );
};

export default ViewStudents;
