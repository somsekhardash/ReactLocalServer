import config from "./../config";
import _ from 'lodash';

function fetchJson(url, options) {
    return window.fetch(url, options)
        .then ( response => {
            return response.json();
        })
}

export function fetchData(url) {
    return fetchJson(config[url]);
}

export function getNavData(url) {
    return function(dispatch) {
        fetchData(url).then ( products => {
            dispatch({
                type: "NAV_INIT",
                products
            });
        })
    }
}

export function getPortData(url) {
    return function(dispatch) {
        fetchData(url).then ( products => {
            dispatch({
                type: "PORT_INIT",
                products
            });
        })
    }
}

export function makeFilter(filData,grp){
    debugger;
    return function(dispatch) {
        // // let products = filData.map((item)=>{
        // //     if(item.grp == grp)
        // //         return item;
        // // });
        // // console.log(products);
        // let products = _.filter(filData.portfolio.items,(item)=>{
        //     return item.grp == grp
        // });
        // dispatch({
        //     type: "PORT_FILTER",
        //     products
        // });
    }
}

