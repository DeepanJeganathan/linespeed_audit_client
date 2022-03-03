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


// get workstation info for audit form 
export const fetch_form_values_workstations = (data) => {
  return {
    type: "FETCH_FORM_VALUES_WORKSTATIONS",
    payload: data
  }

}


export const fetch_selectForm_workstation_values = () => {
  return (dispatch) => {

    axios.get(url + '/workstations').then(res => dispatch(fetch_form_values_workstations(res.data)))
  }

}

// get supervisor info for audit form 
export const fetch_form_values_supervisors = (data) => {
  return {
    type: "FETCH_FORM_VALUES_SUPERVISORS",
    payload: data
  }

}


export const fetch_selectForm_superviors_values = () => {
  return (dispatch) => {

    axios.get(url + '/supervisors').then(res => dispatch(fetch_form_values_supervisors(res.data)))
  }

}

// Post form

export const post_audit_form=(data)=>{
return {
type:'POST_AUDIT_FORM',
payload:data
}}

export const post_audit_form_success=()=>{
  console.log('post form dispatch success')
  return{
    type:'POST_AUDIT_FORM_SUCCESS'
  }
}
export const post_audit_form_fail=()=>{
  console.log('post form dispatch fail')
  return{
    type:'POST_AUDIT_FORM_FAIL'
  }
}

export const post_audit_form_to_db=(data)=>{
console.log('post form dispatch')
console.log(data)
  return (dispatch)=>{
    axios.post(url,data).then(x=>dispatch(post_audit_form_success()).catch(x=>dispatch(post_audit_form_fail())))
  }
}