import React, { useState } from "react";

const initial = {
  SupervisorName: "",
  Date: "",
  OperatorNumber: "",
  WorkstationNumber: "",
  RatedSpeed: "",
  ActualSpeed: "",
  ScrewRPM: "",
  CompoundNumber: "",
  Comment: "",
};

export default function AuditForm() {
  const [fieldValues, setFieldValues] = useState(initial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldValues({ ...fieldValues, [name]: value });
  };

  const validate = () => {
    const errObj = {};
    if (fieldValues.SupervisorName.trim().length > 2) {
      errObj.SupervisorName = true;
    } else {
      errObj.SupervisorName = false;
    }

    console.log(errObj);

    return Object.values(errObj).every((x) => x == true);
  };
  const handleSubmit = () => {
    if (validate()) {
      console.log("form submitted");
      setFieldValues(initial);
    } else {
      console.log(
        "error, something went wrong while submitting dis app bredrin"
      );
    }
  };

  return (
    <>
      <header className="display-5 text-secondary p-1 m-3 ">
        <span className="border-bottom border-primary">
          Line Speed Audit Form
        </span>
      </header>
      <div className="card audit-form">
        <div className="card-body m-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group row">
              <div className=" col-md-6 m-1">
                <label htmlFor="supervisor-name"> Name</label>
                <input
                  name="SupervisorName"
                  type="text"
                  id="supervisor-name"
                  className="form-control"
                  value={fieldValues.SupervisorName}
                  onChange={handleChange}
                />
              </div>
              <div className=" col m-1">
                <label htmlFor="date"> Date</label>
                <input
                  name="Date"
                  value={fieldValues.Date}
                  onChange={handleChange}
                  id="date"
                  className="form-control"
                  type="date"
                ></input>
              </div>
            </div>
            <div className="form-group row ">
              <div className=" col m-1">
                <label htmlFor="operator-number"> Operator No. </label>
                <input
                  name="OperatorNumber"
                  type="text"
                  id="operator-number"
                  className="form-control"
                  value={fieldValues.OperatorNumber}
                  onChange={handleChange}
                />
              </div>
              <div className=" col m-1">
                <label htmlFor="workstation-number"> Workstation No. </label>
                <input
                  name="WorkstationNumber"
                  type="text"
                  id="workstation-number"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group row ">
              <div className=" col m-1">
                <label htmlFor="rated-speed"> Rated Speed (fpm) </label>
                <input
                  name="RatedSpeed"
                  type="text"
                  id="rated-speed"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className=" col m-1">
                <label htmlFor="actual-speed"> Actual Speed (fpm) </label>
                <input
                  name="ActualSpeed"
                  type="text"
                  id="actual-speed"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group row ">
              <div className=" col m-1">
                <label htmlFor="screw-rpm"> Screw RPM </label>
                <input
                  name="ScrewRPM"
                  type="text"
                  id="screw-rpm"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className=" col m-1">
                <label htmlFor="compound-number"> Compound No. </label>
                <input
                  type="text"
                  name="CompoundNumber"
                  id="compound-number"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group row ">
              <div className=" col m-3">
                <label htmlFor="comments"> Comments </label>
                <textarea
                  name="Comment"
                  type="text"
                  id="comments"
                  className="form-control"
                  rows="3"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
