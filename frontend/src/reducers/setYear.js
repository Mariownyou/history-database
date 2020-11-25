const initState = {
    "works":[],
    "events":[],
    "born":[],
    "died":[],
}

const yearReducer = (state = initState, action) => {
    switch(action.type){
        case 'YEAR':
            return action.value
        default:
            return state
    }
}
export default yearReducer 