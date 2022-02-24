// Api url
const url = "http://localhost:50793/api/art";

const fetch_entries_request = () => {
  return {
    type: "FETCH_ENTRIES_REUEST",
  };
};

const fetch_entries_success = (data) => {
  return {
    type: "FETCH_ENTRIES_SUCCESS",
    payload: data,
  };
};

const fetch_entries_fail = (err) => {
  return {
    type: "FETCH_ENTRIES_FAIL",
    payload: err,
  };
};

const fetch_entries = () => {
  //returns another function
  return (dispatch) => {
    //logic goes here
  };
};
