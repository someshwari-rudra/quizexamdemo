import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VerifiedStudentForExam } from "../../redux/actions/Teacher";
import Table from "../../reusableComponents/Table";

const VerifyExam = () => {
  const dispatch = useDispatch();

  const { VerifiedStudents } = useSelector((state) => state.teacher);
  useEffect(() => {
    dispatch(VerifiedStudentForExam());
  }, [dispatch]);

  let properties;
  if (VerifiedStudents && VerifiedStudents.length > 0) {
    properties = Object.keys(VerifiedStudents[0]);
  }
  console.log("properties :>> ", properties);

  const ViewStdBtnAttributes = [
    {
      value: "View",
      typeOf: "view",
      type: "button",
    },
  ];

  return VerifiedStudents && VerifiedStudents.length === 0 ? (
    <>
      <h1 className="ms-5">loading...</h1>
    </>
  ) : (
    <div className="container-fluid m-2">
      <h1>View Exam</h1>
      <Table
        columns={properties}
        data={VerifiedStudents}
        buttonAttributes={ViewStdBtnAttributes}
      />
    </div>
  );
};

export default VerifyExam;
