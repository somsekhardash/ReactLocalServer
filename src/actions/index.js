import config from "./../config";
import _ from 'lodash';

function fetchJson(url, options) {
    return window.fetch(url, options)
        .then(response => {
            return response.json();
        })
}

export function fetchData(url) {
    return fetchJson(config[url]);
}

export function getNavData(url) {
    console.log(url);
    return function (dispatch) {
        fetchData(url).then(products => {
            dispatch({
                type: "NAV_INIT",
                products
            });
        })
    }
}

export function getPortData(url) {
    console.log(url);
    return function (dispatch) {
        fetchData(url).then(products => {
            dispatch({
                type: "PORT_INIT",
                products
            });
        })
    }
}

