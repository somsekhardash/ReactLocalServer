import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import store from "./../store";
import App from "./ecosystem/appContainer/index";
import Blogging from "./ecosystem/bloggingContainer/index";

render(<Provider store={store}>
  <App></App>
      </Provider>, document.getElementById('app'));

/*let componentChecker = {
  "App": App,
  "Blogging": Blogging
}
document.addEventListener("DOMContentLoaded", function(event){
   let components = [...document.querySelectorAll("[data-component]")];
   components.map((compo)=>{
      let Com = componentChecker[compo.getAttribute("data-component")];
render(<Provider store={store}>
  <Com></Com>
      </Provider>,compo);
   });
});*/