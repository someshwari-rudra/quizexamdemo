import React from "react";

const ExamForm = () => {
  return (
    <div>
      <div className="form">
        <form>
          <div className="row g-3 align-items-center mb-2">
            <div className="col-auto">
              <label htmlFor="subject" className="col-form-label">
                subject
              </label>
            </div>
            <div className="col">
              <input
                type="text"
                id="subject"
                className="form-control shadow-sm"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
          <div className="row g-3 align-items-center mb-2">
            <div className="col-auto">
              <label htmlFor="subject" className="col-form-label">
                Question
              </label>
            </div>
            <div className="col">
              <input
                type="text"
                id="subject"
                className="form-control shadow-sm"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-1 d-flex justify-content-center align-items-center">
              <input
                type="radio"
                className="form-check-input"
                name="option"
                value="option1"
                // checked={selectedOption === "option1"}
                // onChange={handleOptionChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                id="subject"
                className="form-control shadow-sm"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-1">
              <input
                type="radio"
                className="form-check-input"
                name="option"
                value="option1"
                // checked={selectedOption === "option1"}
                // onChange={handleOptionChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                id="subject"
                className="form-control shadow-sm"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-1">
              <input
                type="radio"
                className="form-check-input"
                name="option"
                value="option1"
                // checked={selectedOption === "option1"}
                // onChange={handleOptionChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                id="subject"
                className="form-control shadow-sm"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-1">
              <input
                type="radio"
                className="form-check-input"
                name="option"
                value="option1"
                // checked={selectedOption === "option1"}
                // onChange={handleOptionChange}
              />
            </div>
            <div className="col">
              <input
                type="text"
                id="subject"
                className="form-control shadow-sm"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>

          <div className=" d-flex justify-content-around">
            <button type="submit" className="btn btn-primary">
              Prev
            </button>
            <button type="submit" className="btn btn-primary">
              Skip
            </button>
            <button type="submit" className="btn btn-primary">
              Next
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExamForm;
