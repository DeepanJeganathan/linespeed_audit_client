import axios from "axios";

// Api url
const url = "https://localhost:44312/api/LineSpeedAudit";

// GET ALL ENTRIES
export const fetch_entries_request = () => {
  return {
    type: "FETCH_ENTRIES_REQUEST",
  };
};

export const fetch_entries_success = (data) => {
  return {
    type: "FETCH_ENTRIES_SUCCESS",
    payload: data,
  };
};

export const fetch_entries_fail = (err) => {
  return {
    type: "FETCH_ENTRIES_FAIL",
    payload: err,
  };
};

export const fetch_form_values_workstations=(data)=>
{
return{  type:"FETCH_FORM_VALUES_WORKSTATIONS",
  payload:data}

}


export const fetch_selectForm_workstation_values=()=>{
  return(dispatch)=>{

    axios.get(url+'/workstations').then(res=> dispatch(fetch_form_values_workstations(res.data)))
  }

}
export const fetch_form_values_supervisors=(data)=>
{
return{  type:"FETCH_FORM_VALUES_SUPERVISORS",
  payload:data}

}


export const fetch_selectForm_superviors_values=()=>{
  return(dispatch)=>{

    axios.get(url+'/supervisors').then(res=> dispatch(fetch_form_values_supervisors(res.data)))
  }

}

export const fetch_entries = () => {
  //returns another function
  return (dispatch) => {
    console.log("fetch entries hit");
    //logic goes here
    dispatch(fetch_entries_request());
    axios
      .get(url)
      .then((res) => dispatch(fetch_entries_success(res.data)))
      .catch((err) => dispatch(fetch_entries_fail(true)));
  };
};
