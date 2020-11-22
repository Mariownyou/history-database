const laodingReducer = (state = true, action) => {
    switch(action.type){
        case 'LOADED':
            return false
        default:
            return true
    }
}
export default laodingReducer