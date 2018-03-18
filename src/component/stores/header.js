import {observer} from 'mobx-react';
import {observable, computed} from 'mobx';

class headerStore {
    @observable todos = [];
    
    constructor() {
      console.log(this.todos)
    }

    fetchJson(url, options) {
        return window.fetch(url, options)
            .then(response => {
                return response.json();
            })
    }

    // @computed get getNavData() {
    //     // fetchData(url).then(products => {
    //     //     this.todos = products;
    //     // })
    //     // return ["som"];
    //     this.todos = ["som"];
    // }

    @computed get getNavData() {
        return ["asd"];
    }
}

export let headerStoreObj = new headerStore();



// import {observable} from 'mobx';

// export var appState = observable({
//     timer: 0
// });

