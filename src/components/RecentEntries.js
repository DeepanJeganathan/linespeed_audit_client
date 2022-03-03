import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_entries } from "../reducer/lineSpeedActions";

export default function RecentEntries() {
  const cone = {
    color: "orange",
    fontSize: 80,
  };
  const dispatch = useDispatch()
  
  useEffect(()=>{
   loadEntries()
  },[])
  
 const loadEntries=()=>{
  dispatch(fetch_entries())
 }

 const entries=useSelector(state=>state.entries)

  const getDate = (date) => {
    let d = new Date();
    let y = `${d.getMonth(date)}/${d.getDay(date)}/${d.getFullYear(date)}`;
    return date.substring(0, 10)
  }

  const data = () => {
    return entries.map((x,i) => <tr key={i}> <th scope="row">{getDate(x.date)}</th>
      <td >{`${x.firstName} ${x.lastName}`}</td>
      <td>{x.workstationNumber}</td>
      <td>{x.type}</td>
      <td>{x.actualLineSpeed}</td>
      <td className={ `${x.actualLineSpeed>=x.ratedSpeed? 'text-success':'text-danger' } fw-bold`}>{x.ratedSpeed}</td>
      <td>{x.screwRPM}</td>
      <td>{x.compoundPartNumber}</td>
      <td>{x.comments}</td>
      <td>{x.operatorNumber}</td>
    </tr>)
  }

  return (<>
    <div className="row mt-4">
      <div className="col-8 offset-2">
        <div className="card">
          <div className="card-body">
            <i style={{ fontSize: 120 }} className="bi bi-bar-chart-line text-danger"></i>
            <div className="mononspace"><h3>COMING SOON!</h3></div>
          </div>
        </div>
      </div>
    </div>
    <div className="row  mt-4">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-sm ">
                <thead>
                  <tr className="table-primary">
                    <th scope="col">Date</th>
                    <th scope="col">Auditor</th>
                    <th scope="col">Workstation</th>
                    <th scope="col">Type</th>
                    <th scope="col">Actual Speed</th>
                    <th scope="col">RatedSpeed Speed</th>
                    <th scope="col">Screw RPM</th>
                    <th scope="col">Compound</th>
                    <th scope="col">Comment</th>
                    <th scope="col">Operator Number</th>
                  </tr>
                </thead>
                <tbody>

                  {data()}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
