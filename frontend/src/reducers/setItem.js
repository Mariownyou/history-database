const initState = {
        "authors": [{
            'name': '1',
            'url': '/1'
        },
        {
            'name': '2',
            'url': '/2'
        },
    ]
}

const itemReducer = (state = initState, action) => {
    switch(action.type){
        case 'ITEM':
            return action.value
        default:
            return state
    }
}
export default itemReducer 