export default function reducer(state={}, action) {
    switch (action.type) {
        case "SERV_INIT": 
            return Object.assign({}, action.services)
            break;
    }
    return state;
}

