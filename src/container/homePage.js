import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Container from "./../component/ecosystem/homeContainer/index";
import * as actions from "./../actions/index";
        

function mapReduxStateToReactProps (state) {
    debugger;
    return {
        //propName [react props]: value [from state]   
        headerData: state.headerData,
        portData: state.portReducer
    }
}

function mapReduxDispatchToReactProps (dispatch) {
    debugger;
    return {
        //prop name
        //dispatch: dispatch,

        //aternative option 2

        //initProducts: (products) => dispatch(actions.initProducts(products)),
        //loading: (status) => dispatch(actions.loading(status))

        //alternative options 3

        //map all the actions with dispatch functionalities
        //create wrappers method for actions
        //automatically dispatch
        actions: bindActionCreators(actions, dispatch)
    }
}


//create container component
//get store from provider using context
//subscribe from store
//unsubscribe
let containerComponent 
        = connect(mapReduxStateToReactProps,
                  mapReduxDispatchToReactProps) (Container);


export default containerComponent;