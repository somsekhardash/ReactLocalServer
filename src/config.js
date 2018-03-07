let headerApiUrl,apiBaseUrl,headerSec,portfolioUrl;
const path = require("path");
import * as pathName from "pathName";

// if(process.env.NODE_ENV=='dev'){
    apiBaseUrl=pathName.apiBaseUrl;
    headerApiUrl=`${apiBaseUrl}/assects/json/header.json`;
    headerSec=`${apiBaseUrl}/assects/json/header_section.json`;
    portfolioUrl = `${apiBaseUrl}/assects/json/portfolio.json`;
// }

// if(process.env.NODE_ENV=='production'){
//     headerApiUrl= pathName.headerApiUrl;
//     headerSec= pathName.headerSec;
//     portfolioUrl = pathName.portfolioUrl;
// }


module.exports = {"headerApiUrl": headerApiUrl,
                    "apiBaseUrl" : apiBaseUrl,
                    "portfolioUrl": portfolioUrl  }