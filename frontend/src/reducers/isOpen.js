const openReducer = (state = false, action) => {
    switch(action.type){
        case 'OPENED':
            return action.value
        default:
            return false
    }
}
export default openReducer