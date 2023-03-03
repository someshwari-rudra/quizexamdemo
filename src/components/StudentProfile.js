import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const StudentProfile = ({ color, name, email, isEdit, onClick }) => {
  return (
    <div className="col-md-3">
      <div className="div">
        <div className="card shadow">
          <div className="d-flex justify-content-center align-items-center my-2">
            <Avatar name="name" color={color} round={true} />
          </div>
          <div className="card-body d-flex justify-content-center flex-column align-items-start">
            <div className=" d-flex justify-content-start align-content-center">
              <h5 className="me-2">Name:</h5>
              <span>{name}</span>
            </div>
            <div className=" d-flex justify-content-start align-content-center">
              <h5 className="me-2">Email:</h5>
              <span>{email}</span>
            </div>
            {isEdit ? (
              <div className=" d-flex justify-content-between align-items-center">
                <Link to={"/updateProfile"} onClick={onClick}>
                  <button className="btn btn-primary w-100">
                    Update Profile
                  </button>
                </Link>
                <Link
                  to={"/resetPassword"}
                  className="mx-4 my-2"
                  onClick={onClick}
                >
                  <button className="btn btn-warning w-100">
                    reset Password
                  </button>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
