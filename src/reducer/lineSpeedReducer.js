
const initial={
    isLoading:false,
    error:null,
    entries:[]
}

 export const lineSpeedReducer=(state=initial,action)=>
{

    switch(action.type){

        case "FETCH_ENTRIES_REQUEST":
            return {...state, isLoading=true}

    case "FETCH_ENTRIES_SUCCESS":
        return {...state,isLoading=false,entries=[...action.payload]}  

        case "FETCH_ENTRIES_FAIL":
            return {...state, isLoading=false, error=action.payload}
        default:
        return state;
    }
}

