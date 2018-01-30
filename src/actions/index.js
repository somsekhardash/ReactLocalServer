//import * as ProductService from "./ProductService";
import config from "./../config";
import database from "./database";

function fetchJson(url, options) {
    // return window.fetch(url, options)
    //        .then ( response => {
    //            return response.json();
    //        })

        return database.ref('/').once('value', snap => {
            return snap.val();
        });
}

export function fetchNav() {
    return fetchJson(config.headerApiUrl);
}

export function getNavData() {
    return function(dispatch) {
        fetchNav().then ( products => {
            dispatch({
                type: "NAV_INIT",
                products: products.val()
            });
        })
    }
}


