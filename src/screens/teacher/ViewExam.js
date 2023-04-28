import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TEACHER } from "../../redux/actions/Constants";
import {
  deleteSingleExam,
  StoreNotes,
  StoreSubjectName,
  ViewExamAction,
  ViewSingleExamAction,
} from "../../redux/actions/Teacher";
import ResuableModal from "../../reusableComponents/ResuableModal";
import Table from "../../reusableComponents/Table";

const ViewExam = () => {
  const dispatch = useDispatch();
  const [deleteExamId, setDeleteExamId] = useState(null);

  const { ViewAllExam } = useSelector((state) => state.teacher);
  const showModal = useSelector((state) => state.teacher.showModal);
  const columns = ["subjectName", "notes", "email"];
  useEffect(() => {
    dispatch(ViewExamAction());
  }, [dispatch]);

  const ViewStdBtnAttributes = [
    {
      value: "Edit Exam",
      typeOf: "edit_Exam",
      type: "button",
      onClick: (id) => {
        const singleExamData = ViewAllExam.filter((item) => item._id === id);
        const notes = singleExamData[0].notes;
        const subjectName = singleExamData[0].subjectName;
        dispatch(ViewSingleExamAction(id));
        dispatch(StoreSubjectName(subjectName));
        dispatch({ type: TEACHER.CHANGE_SUBJECT_NAME, payload: true });
        for (let i = 0; i < notes.length; i++) {
          dispatch(StoreNotes(notes[i]));
        }
      },
    },
    {
      value: "Delete Exam",
      typeOf: "delete_Exam",
      type: "button",
      onClick: (id) => {
        setDeleteExamId(id);
        dispatch({ type: TEACHER.SHOW_MODAL });
      },
    },
  ];
  const handleClose = () => {
    dispatch({ type: TEACHER.SHOW_MODAL });
  };
  const handleSaveChanges = () => {
    dispatch(deleteSingleExam(deleteExamId));
    console.log("delete the data :>> ", "delete the data");
    dispatch({ type: TEACHER.SHOW_MODAL });
  };
  return ViewAllExam && ViewAllExam.length === 0 ? (
    <>
      <h1 className="ms-5">loading...</h1>
    </>
  ) : (
    <div className="container-fluid m-2">
      <h1>View Exam</h1>
      <Table
        columns={columns}
        data={ViewAllExam}
        buttonAttributes={ViewStdBtnAttributes}
      />

      <ResuableModal
        show={showModal}
        handleClose={handleClose}
        handleSaveChanges={handleSaveChanges}
        title={"Change Question"}
        body={"Are you sure you want to Delete?"}
      />
    </div>
  );
};

export default ViewExam;
