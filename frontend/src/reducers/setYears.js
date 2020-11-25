const initState = [
    {
        "works":[],
        "events":[],
        "born":[],
        "died":[],
    }
]

const yearsReducer = (state = initState, action) => {
    switch(action.type){
        case 'YEARS':
            return action.value
        default:
            return state
    }
}
export default yearsReducer 