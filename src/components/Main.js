import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_entries } from "../reducer/lineSpeedActions";

export default function Main() {
  const cone = {
    color: "orange",
    fontSize: 80,
  };

const dispatch = useDispatch()

useEffect(()=>dispatch(fetch_entries()),[])

const entries= useSelector(state=>state)

if(entries.isLoading==true){
  return<h1>Loading..............</h1>
}
else if(entries.error!=false){
  return(<div>
    <h1> ERROR in getting data</h1>
  </div>)
}

else{
  return (
    
    <>
      <div className=" h-100 row  ">
        <div className="col d-flex h-75 justify-content-center align-items-center">
          <h1> Under construction</h1>
          <i style={cone} className="bi bi-cone-striped"></i>
        </div>
      </div>
    </>)
  
}
}

