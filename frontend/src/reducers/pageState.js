const pageReducer = (state = null, action) => {
    switch(action.type){
        case 'PAGE':
            return action.value
        default:
            return state
    }
}
export default pageReducer