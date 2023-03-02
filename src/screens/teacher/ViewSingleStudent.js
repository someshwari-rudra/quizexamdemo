import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StudentProfile from "../../components/StudentProfile";
import { TEACHER } from "../../redux/actions/Constants";
import { ViewsingleStudentData } from "../../redux/actions/Teacher";
import ResuableModal from "../../reusableComponents/ResuableModal";
import Table from "../../reusableComponents/Table";
import { getRandomColor } from "../../utils/getRandomColor";

const ViewSingleStudent = () => {
  const color = getRandomColor();
  const { id } = useParams();
  const dispatch = useDispatch();
  const getSingleStudentData = useSelector(
    (state) => state.teacher.ViewSingleStudentData
  );
  const showModal = useSelector((state) => state.teacher.showModal);
  const [resultId, setResultId] = useState(null);
  const [studentAnswer, setStudentAnswer] = useState([]);

  useEffect(() => {
    dispatch(ViewsingleStudentData(id));
  }, [id, dispatch]);

  const handleClose = () => {
    dispatch({ type: TEACHER.SHOW_MODAL });
  };
  const handleShow = () => {
    dispatch({ type: TEACHER.SHOW_MODAL });
  };

  console.log("studentAnswer :>> ", studentAnswer);

  return getSingleStudentData && getSingleStudentData.length === 0 ? (
    <>
      <h1 className="ms-5">loading...</h1>
    </>
  ) : (
    getSingleStudentData.map((student) => {
      const { _id, name, email, Result } = student;
      console.log("Result[resultId] :>> ", Result[resultId]);
      const columns = ["subjectName", "score", "rank", "resultStatus"];
      const ViewStdBtnAttributes = [
        {
          value: "View Result",
          typeOf: "view_result",
          type: "button",
          id: _id,
          onClick: (id) => {
            setResultId(id);
            setStudentAnswer([Result[id].studentAnswer]);
            handleShow();
          },
        },
      ];
      return (
        <div className="container-fluid m-2" key={_id}>
          <div className="row">
            <StudentProfile color={color} name={name} email={email} />
            <div className="col-md-9">
              <div>
                <h3 className="">List of Given Exams</h3>
                <Table
                  columns={columns}
                  data={Result}
                  buttonAttributes={ViewStdBtnAttributes}
                />
              </div>
              <ResuableModal
                show={showModal}
                handleClose={handleClose}
                title="student Result"
                body={
                  <>
                    {studentAnswer.flat(1).map((ele, index) => {
                      console.log("ele", ele);
                      return (
                        <div key={index}>
                          <p>{ele.answer}</p>
                        </div>
                      );
                    })}
                  </>
                }
              />
            </div>
          </div>
        </div>
      );
    })
  );
};

export default ViewSingleStudent;
