
const initial={
    isLoading:false,
    error:false,
    entries:[],
    supervisors:[],
    workstations:[]
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

         case "FETCH_FORM_VALUES_WORKSTATIONS":
             console.log("workstation fetch hit")
                return {...state,workstations:[...action.payload]}
                case "FETCH_FORM_VALUES_SUPERVISORS":
                    console.log("supervisors fetch hit")
                       return {...state,supervisors:[...action.payload]}
        default:
        return state;
    }
}

