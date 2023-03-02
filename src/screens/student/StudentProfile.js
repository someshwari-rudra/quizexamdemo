import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentProfile from "../../components/StudentProfile";
import { OnChange } from "../../redux/actions/OnChange";
import { GetStudentProfile } from "../../redux/actions/Student";
import { getRandomColor } from "../../utils/getRandomColor";

const Profile = () => {
  const dispatch = useDispatch();
  const { studentProfile } = useSelector((state) => state.student);
  const color = getRandomColor();

  useEffect(() => {
    dispatch(GetStudentProfile());
  }, [dispatch]);

  const handleOnclick = () => {
    dispatch(OnChange("name", studentProfile?.name));
  };

  return (
    <div className="container-fluid mt-3 d-flex justify-content-center flex-column align-items-center">
      <h1 className="m-2">Your Profile</h1>
      <StudentProfile
        color={color}
        name={studentProfile?.name}
        email={studentProfile?.email}
        isEdit={true}
        onClick={handleOnclick}
      />
    </div>
  );
};

export default Profile;
