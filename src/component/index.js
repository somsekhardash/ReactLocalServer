import React from 'react';
import {render} from 'react-dom';
import App from "./ecosystem/appContainer/index";


let componentChecker = {
  "App": App,
}

document.addEventListener("DOMContentLoaded", function(event){
  //  let components = [...document.querySelectorAll("[data-component]")];
  //  components.map((compo)=>{
  //     let Com = componentChecker[compo.getAttribute("data-component")];
  //     render(<Com></Com>,compo);
  //  });
  
  let compo = document.querySelector("[data-component='App']");
  render(<App></App>,compo);
});