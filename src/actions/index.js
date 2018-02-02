import config from "./../config";
import database from "./database";

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
    return function(dispatch) {
        fetchNav().then ( products => {
            debugger;
            dispatch({
                type: "NAV_INIT",
                products
            });
        })
    }
}


