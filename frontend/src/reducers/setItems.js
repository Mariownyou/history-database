const itemsReducer = (state = [], action) => {
    switch(action.type){
        case 'ITEMS':
            return action.value
        default:
            return state
    }
}
export default itemsReducer 