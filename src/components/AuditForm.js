import React, { createElement, useState, useEffect } from "react";

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
  useEffect(() => {
    console.log("yo it ran");
  }, []);

  const supervisors = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Bob", lastName: "Jones" },
    { id: 3, firstName: "Tom", lastName: "Horn" },
  ];

  const supervisorsOptions = () => {
    return supervisors.map((x) => (
      <option key={x.id} value={x.id}>
        {x.firstName}, {x.lastName}
      </option>
    ));
  };

  const workstations = [
    { id: 1, workstationNumber: 3101, type: "Jacket", flow: 2 },
    { id: 2, workstationNumber: 3102, type: "Jacket", flow: 2 },
    { id: 3, workstationNumber: 3701, type: "Jacket", flow: 2 },
  ];

  const workstationOptions = () => {
    return workstations.map((x) => (
      <option key={x.id} value={x.id}>
        {x.workstationNumber}, {x.type}
      </option>
    ));
  };

  const [fieldValues, setFieldValues] = useState(initial);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFieldValues({ ...fieldValues, [name]: value });
  };

  const validate = () => {
    const temp = {};

    temp.SupervisorName = fieldValues.SupervisorName !== "" ? true : false;
    temp.Date = fieldValues.Date !== "" ? true : false;
    temp.WorkstationNumber =
      fieldValues.WorkstationNumber !== "" &&
      /^-?\d+$/.test(fieldValues.WorkstationNumber)
        ? true
        : false;
    setError(temp);
    return Object.values(temp).every((x) => x == true);
  };
  const applyValidationError = (field) => {
    if (field in error) {
      return error[field] == true ? "" : "invalid-field";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(fieldValues);
      console.log("form submitted");
      document.querySelector(".form-submit-error").style.display = "none";

      const formdata = new FormData();
      formdata.append("SupervisorName", fieldValues.SupervisorName);
      formdata.append("Date", fieldValues.Date);
      formdata.append("OperatorNumber", fieldValues.OperatorNumber);
      formdata.append("WorkstationNumber", fieldValues.WorkstationNumber);
      formdata.append("RatedSpeed", fieldValues.RatedSpeed);
      formdata.append("ActualSpeed", fieldValues.ActualSpeed);
      formdata.append("ScrewRPM", fieldValues.ScrewRPM);
      formdata.append("CompoundNumber", fieldValues.CompoundNumber);
      formdata.append("Comment", fieldValues.Comment);
      console.log(fieldValues);

      // submit form here
      setFieldValues(initial);
      setError({});
    } else {
      document.querySelector(".form-submit-error").style.display = "block";
      console.log("error, something went wrong while submitting this form");
    }
  };

  return (
    <>
      <header className="display-6 text-secondary p-1 m-3 ">
        <span className="border-bottom border-primary">Speed Audit Form</span>
      </header>
      <div className="form-submit-error text-danger">
        oops, something went wrong while submitting form. Try again, if problems
        presist contact adminstrator
      </div>
      <div className="card audit-form">
        <div className="card-body m-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group row">
              <div className=" col-md-6 m-1">
                <label className="form-label " htmlFor="supervisor-name">
                  Supervisor Name
                </label>
                <select
                  name="SupervisorName"
                  id="supervisor-name"
                  className="form-select"
                  value={fieldValues.SupervisorName}
                  onChange={handleChange}
                  className={
                    `form-control ` + applyValidationError("SupervisorName")
                  }
                >
                  {supervisorsOptions()}
                </select>
                <div className={"d-none "}>
                  <p> name should be longer than 2 characters please!!</p>
                </div>
              </div>
              <div className=" col m-1">
                <label className="form-label " htmlFor="date">
                  Date
                </label>
                <input
                  name="Date"
                  value={fieldValues.Date}
                  onChange={handleChange}
                  id="date"
                  className={"form-control " + applyValidationError("Date")}
                  type="date"
                ></input>
              </div>
            </div>
            <div className="form-group row ">
              <div className=" col m-1">
                <label className="form-label " htmlFor="operator-number">
                  Operator No.
                </label>
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
                <label className="form-label" htmlFor="workstation-number">
                  Workstation No.
                </label>
                <select
                  name="WorkstationNumber"
                  id="workstation-number"
                  value={fieldValues.WorkstationNumber}
                  className={
                    "form-control " + applyValidationError("WorkstationNumber")
                  }
                  onChange={handleChange}
                >
                  {workstationOptions()}
                </select>
              </div>
            </div>

            <div className="form-group row ">
              <div className=" col m-1">
                <label className="form-label " htmlFor="rated-speed">
                  Rated Speed (fpm)
                </label>
                <input
                  name="RatedSpeed"
                  type="text"
                  id="rated-speed"
                  className="form-control"
                  onChange={handleChange}
                  value={fieldValues.RatedSpeed}
                />
              </div>
              <div className=" col m-1">
                <label className="form-label" htmlFor="actual-speed">
                  Actual Speed (fpm)
                </label>
                <input
                  name="ActualSpeed"
                  type="text"
                  id="actual-speed"
                  className="form-control"
                  onChange={handleChange}
                  value={fieldValues.ActualSpeed}
                />
              </div>
            </div>

            <div className="form-group row ">
              <div className=" col m-1">
                <label className="form-label " htmlFor="screw-rpm">
                  Screw RPM
                </label>
                <input
                  name="ScrewRPM"
                  type="text"
                  id="screw-rpm"
                  className="form-control"
                  onChange={handleChange}
                  value={fieldValues.ScrewRPM}
                />
              </div>
              <div className=" col m-1">
                <label className="form-label " htmlFor="compound-number">
                  Compound No.
                </label>
                <input
                  type="text"
                  name="CompoundNumber"
                  id="compound-number"
                  className="form-control"
                  onChange={handleChange}
                  value={fieldValues.CompoundNumber}
                />
              </div>
            </div>

            <div className="form-group row ">
              <div className=" col m-3">
                <label className="form-label " htmlFor="comments">
                  Comments
                </label>
                <textarea
                  name="Comment"
                  type="text"
                  id="comments"
                  className="form-control"
                  rows="3"
                  onChange={handleChange}
                  value={fieldValues.Comment}
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
