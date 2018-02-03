export default function reducer(state={}, action) {
    switch (action.type) {
        case "NAV_INIT": 
            return Object.assign({}, action.products)
            break;
    }
    return state;
}

