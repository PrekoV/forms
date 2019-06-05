// import React from "react";
// import { Field, reduxForm } from "redux-form";

// const App = props => {
//     console.log(props);
//     return (
//         <form onSubmit={handleSubmit}>

//         </form>
//     );
// };

// export default reduxForm({
//     form: "simple" // a unique identifier for this form
// })(App);

import React, { Component } from "react";
import "./App.css";
import ReduxForm from "./reduxform";
import FormikForm from "./formik";
import  store from './store'
import { Provider } from 'react-redux'

class App extends Component {
    state = {
        render: 0
    };

    render() {
        return (
            <div className="App">
                {!this.state.render && (
                    <>
                        {" "}
                        <button id="a" onClick={() => this.setState({ render: 1 })}>
                            ReduxForm
                        </button>
                        <button id="b" onClick={() => this.setState({ render: 2 })}>
                            Formik
                        </button>{" "}
                    </>
                )}
                {this.state.render === 1 &&  <Provider  store={store}><ReduxForm /></Provider>}
                {this.state.render === 2 && <FormikForm />}
            </div>
        );
    }
}
export default App;
