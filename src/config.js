let headerApiUrl,apiBaseUrl,headerSec;
const path = require("path");

console.log(process.env.NODE_ENV);


if(process.env.NODE_ENV=='dev'){
    apiBaseUrl=`http://localhost:5001`;
    headerApiUrl=`${apiBaseUrl}/json/header.json`;
    headerSec=`${apiBaseUrl}/json/header_section.json`;

}

if(process.env.NODE_ENV=='production'){
    headerApiUrl=`https://api.myjson.com/bins/w05rh`;
    headerSec="https://api.myjson.com/bins/otwp1"
}

module.exports = {"headerApiUrl": headerApiUrl,
                    "apiBaseUrl" : apiBaseUrl }