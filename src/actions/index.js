//import * as ProductService from "./ProductService";
import config from "./../config";

function fetchJson(url, options) {
    return window.fetch(url, options)
           .then ( response => {
               return response.json();
           })
}

export function fetchNav() {
    return fetchJson(config.headerApiUrl);
}

export function getNavData() {
    debugger;
    return function(dispatch) {
        fetchNav().then ( products => {
            dispatch({
                type: "NAV_INIT",
                products
            });
        })
    }
}


