
const initial={
    isLoading:false,
    error:false,
    entries:[]
}

 export const lineSpeedReducer=(state=initial,action)=>
{

    switch(action.type){

        case "FETCH_ENTRIES_REQUEST":
            console.log('loading hit')
            return {...state, isLoading:true , error:false}

    case "FETCH_ENTRIES_SUCCESS":
        console.log('success hit')
        console.log(state)
        return {...state,isLoading:false,error:false,entries:[...action.payload]}  

        case "FETCH_ENTRIES_FAIL":
            console.log('error hit')
            console.log(action.payload)
            return {...state, isLoading:false, error:action.payload}
        default:
        return state;
    }
}

