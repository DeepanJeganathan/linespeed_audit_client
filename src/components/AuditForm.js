import React from 'react'

export default function AuditForm() {


    return (
        <>
            <header className="display-5 text-secondary p-1 m-3">
                Line Speed Audit Form
            </header>
            <form >
                <div className="form-group row">

                    <div className=" col-md-6 m-1">
                        <label htmlFor="supervisor-name"> Name</label>
                        <input type="text" id="supervisor-name" className="form-control" />
                    </div>
                    <div className=" col m-1">
                        <label htmlFor="date"> Date</label>
                        <input id="date" className="form-control" type="date"></input>
                    </div>
                </div>
                <div className="form-group row ">

                        <div className=" col m-1">
                            <label htmlFor="operator-number"> Operator No. </label>
                            <input type="number" id="operator-number" className="form-control" />
                        </div>
                       <div className=" col m-1">
                            <label htmlFor="workstation-number"> Workstation No. </label>
                            <input type="number" id="workstation-number" className="form-control" />
                        </div>

                </div>

                <div className="form-group row ">

                    <div className=" col m-1">
                        <label htmlFor="rated-speed"> Rated Speed (fpm) </label>
                        <input type="number" id="rated-speed" className="form-control" />
                    </div>
                    <div className=" col m-1">
                        <label htmlFor="actual-speed"> Actual Speed (fpm) </label>
                        <input type="number" id="actual-speed" className="form-control" />
                    </div>

                </div>

                <div className="form-group row ">

                    <div className=" col m-1">
                        <label htmlFor="screw-rpm"> Screw RPM </label>
                        <input type="number" id="screw-rpm" className="form-control" />
                    </div>
                    <div className=" col m-1">
                        <label htmlFor="compound-number"> Compound No. </label>
                        <input type="number" id="compound-number" className="form-control" />
                    </div>

                </div>

                <div className="form-group row ">

                    <div className=" col m-3">
                        <label htmlFor="comments"> Comments </label>
                        <textarea type="text" id="comments" className="form-control" rows="3" />
                    </div>
                    
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </>
    )
}
