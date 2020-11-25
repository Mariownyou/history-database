const initState = [
    {
        "authors": [{
            'name': '1',
            'url': '/1'
        },
        {
            'name': '2',
            'url': '/2'
        }
    ]
    }
]

const itemsReducer = (state = initState, action) => {
    switch(action.type){
        case 'ITEMS':
            return action.value
        default:
            return state
    }
}
export default itemsReducer 