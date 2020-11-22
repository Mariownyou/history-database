const itemReducer = (state = [], action) => {
    switch(action.type){
        case 'ITEM':
            return action.value
        default:
            return state
    }
}
export default itemReducer 