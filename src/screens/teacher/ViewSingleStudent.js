import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StudentProfile from "../../components/StudentProfile";
import { ViewsingleStudentData } from "../../redux/actions/Teacher";
import Table from "../../reusableComponents/Table";
import { getRandomColor } from "../../utils/getRandomColor";

const ViewSingleStudent = () => {
  const color = getRandomColor();
  const { id } = useParams();
  console.log("id :>> ", id);
  const dispatch = useDispatch();
  const getSingleStudentData = useSelector(
    (state) => state.teacher.ViewSingleStudentData
  );
  console.log("getSingleStudentData :>> ", getSingleStudentData);
  useEffect(() => {
    dispatch(ViewsingleStudentData(id));
  }, [id, dispatch]);

  let ShowResult = [];
  console.log('ShowResult :>> ', ShowResult);
  return getSingleStudentData && getSingleStudentData.length === 0 ? (
    <>
      <h1 className="ms-5">loading...</h1>
    </>
  ) : (
    getSingleStudentData.map((student) => {
      const { _id, name, email, Result } = student;
      const columns = ["subjectName", "score", "rank", "resultStatus"];
      const ViewStdBtnAttributes = [
        {
          value: "View Result",
          typeOf: "view_result",
          type: "button",
          id: _id,
          onClick: (id) => {
            ShowResult.push(Result);
            console.log('ShowResult :>> ', ShowResult);
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
              {ShowResult.length >= 0 ? <h1>ss</h1> : ""}
            </div>
          </div>
        </div>
      );
    })
  );
};

export default ViewSingleStudent;
