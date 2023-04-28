import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OnChange } from "../../redux/actions/OnChange";
import { getAllExamData } from "../../redux/actions/Student";
import { StoreNotes, StoreSubjectName } from "../../redux/actions/Teacher";
import Table from "../../reusableComponents/Table";

const ListExam = () => {
  const dispatch = useDispatch();
  const { allExamData } = useSelector((state) => state.student);
  let properties;
  if (allExamData && allExamData.length > 0) {
    properties = Object.keys(allExamData[0]);
  }
  console.log("properties :>> ", properties);
  useEffect(() => {
    dispatch(getAllExamData());
  }, [dispatch]);

  const ViewStudentExamAttribute = [
    {
      value: "Give Exam",
      typeOf: "giveExam",
      type: "button",
      onClick: (id) => {
        const singleExamData = allExamData.filter((item) => item._id === id);
        const notes = singleExamData[0].notes;
        const subjectName = singleExamData[0].subjectName;
        dispatch(StoreSubjectName(subjectName));
        dispatch(OnChange("subject", subjectName));
        for (let i = 0; i < notes.length; i++) {
          dispatch(StoreNotes(notes[i]));
        }
      },
    },
  ];

  console.log("allExamData :>> ", allExamData);
  return (
    <div className="container">
      <h1>list of Exam</h1>
      {allExamData && allExamData.length > 0 ? (
        <Table
          columns={properties}
          data={allExamData}
          buttonAttributes={ViewStudentExamAttribute}
        />
      ) : (
        <>
          <h6>Loading...</h6>
        </>
      )}
    </div>
  );
};

export default ListExam;
