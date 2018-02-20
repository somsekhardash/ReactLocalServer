import _ from 'lodash';

export default function reducer(state={}, action) {
    switch (action.type) {
        case "PORT_INIT": 
            return Object.assign({}, action.products)
            break;
    }
    return state;
}

