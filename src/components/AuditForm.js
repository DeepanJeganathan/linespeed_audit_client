import axios from "axios";
import React, { createElement, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { fetch_selectForm_workstation_values, fetch_selectForm_superviors_values, post_audit_form_to_db } from "../reducer/lineSpeedActions";

const initial = {
 SupervisorId: "",
  Date: "",
  OperatorNumber: "",
 WorkstationId: "",
  RatedSpeed: "",
  ActualLineSpeed: "",
  ScrewRPM: "",
  CompoundPartNumber: "",
  Comments: "",
};



export default function AuditForm() {
  useEffect(() => {
    dispatch(fetch_selectForm_superviors_values())
    dispatch(fetch_selectForm_workstation_values())
  }, []);


  const supervisors = useSelector(state => state.supervisors)
  const workstations = useSelector(state => state.workstations)
  const dispatch = useDispatch();

  console.log(workstations)

  const supervisorsOptions = () => {


    return supervisors.map((x,i) => (
      <option key={i} value={x.supervisorId}>
        {x.firstName}, {x.lastName}
      </option>
    ));
  };



  const workstationOptions = () => {
    return workstations.map((x,i) => (
      <option key={x,i} value={x.workstationId}>
       {x.workstationNumber}  {x.type}
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

    temp.SupervisorId = fieldValues.SupervisorId !== "" ? true : false;
    temp.Date = fieldValues.Date !== "" ? true : false;
    temp.WorkstationId =
      fieldValues.WorkstationId !== ""
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
      formdata.append("SupervisorId", fieldValues.SupervisorId);
      formdata.append("Date", fieldValues.Date);
      formdata.append("OperatorNumber", fieldValues.OperatorNumber);
      formdata.append("WorkstationId", fieldValues.WorkstationId);
      formdata.append("RatedSpeed", fieldValues.RatedSpeed);
      formdata.append("ActualLineSpeed", fieldValues.ActualLineSpeed);
      formdata.append("ScrewRPM", fieldValues.ScrewRPM);
      formdata.append("CompoundPartNumber", fieldValues.CompoundPartNumber);
      formdata.append("Comments", fieldValues.Comments);
   dispatch(post_audit_form_to_db(formdata));

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
              <div className=" col m-1">
                <label className="form-label " htmlFor="supervisor-name">
                  Supervisor Name
                </label>
                <select
                  name="SupervisorId"
                  id="supervisor-name"
                  className="form-select"
                  value={fieldValues.SupervisorId}
                  onChange={handleChange}
                  className={
                    `form-control ` + applyValidationError("SupervisorId")
                  }
                >
                  <option selected>Select Auditor </option>
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
                  name="WorkstationId"
                  id="workstation-number"
                  value={fieldValues.WorkstationId}
                  className={
                    "form-control " + applyValidationError("WorkstationId")
                  }
                  onChange={handleChange}
                >
                  <option selected>Select Workstation </option>

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
                  name="ActualLineSpeed"
                  type="text"
                  id="actual-speed"
                  className="form-control"
                  onChange={handleChange}
                  value={fieldValues.ActualLineSpeed}
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
                  name="CompoundPartNumber"
                  id="compound-number"
                  className="form-control"
                  onChange={handleChange}
                  value={fieldValues.CompoundPartNumber}
                />
              </div>
            </div>

            <div className="form-group row ">
              <div className=" col m-3">
                <label className="form-label " htmlFor="Comments">
                  Comments
                </label>
                <textarea
                  name="Comments"
                  type="text"
                  id="Comments"
                  className="form-control"
                  rows="3"
                  onChange={handleChange}
                  value={fieldValues.Comments}
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
