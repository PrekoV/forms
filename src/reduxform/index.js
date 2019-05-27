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
import { Field, reduxForm } from "redux-form";
import "../App.css";
import StepFirst from "./StepFirst";
import StepSeond from "./StepSecond";
import StepThird from "./StepThird";

class ReduxForm extends Component {
    state = {
        step: 1,
        error: ""
    };
    submit = (values) => {
        switch (this.state.step) {
            case 1:
                if (!this.state.done && values.email && values.password) {
                    if (values.password.length < 5) {
                        this.setState({
                            error: "Password is too short!"
                        });
                    } else {
                        console.log("submit first", values);
                        this.setState({ step: this.state.step + 1, error: "" });
                    }
                } else {
                    this.setState({
                        error: "You have to fill email and password!"
                    });
                }
                break;
            case 2:
                if (!this.state.done && values.country && values.company && values.date) {
                    console.log("submit second", values);
                    this.setState({ step: this.state.step + 1, error: "" });
                } else {
                    this.setState({
                        error: "You have to fill country, company and password!"
                    });
                }
                break;
            case 3:
                console.log("submit all!", values);
                break;
            default:
                console.log("no one knows");
                break;
        }
    };
    render() {
        console.log(this.props);
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div className="ReduxForm">
                <div className="ReduxForm-wrapper">
                    <div className="modal">
                        <div className="intro">
                            <div className="circle">
                                {this.state.step === 1
                                    ? "✧"
                                    : this.state.step === 2
                                    ? "✩"
                                    : "✬"}
                            </div>
                            <div className="title">authentication</div>
                            <div className="error">{this.state.error}</div>
                        </div>
                        <form onSubmit={handleSubmit(this.submit)}>
                            {this.state.step === 1 ? (
                                <StepFirst />
                            ) : this.state.step === 2 ? (
                                <StepSeond />
                            ) : (
                                <StepThird />
                            )}
                            <div className="buttons">
                                {this.state.step !== 1 ? (
                                    <button
                                        onClick={() =>
                                            this.state.step !== 1
                                                ? this.setState({
                                                      step: this.state.step - 1
                                                  })
                                                : {}
                                        }
                                    >
                                        ↩ back
                                    </button>
                                ) : (
                                    <div />
                                )}
                                <button type="submit">
                                    {this.state.step === 3
                                        ? "submit"
                                        : "next ↪"}
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* <form onSubmit={handleSubmit(this.submit)}>
                        <div>
                            <label>First Name</label>
                            <div>
                                <Field
                                    name="firstName"
                                    component="input"
                                    type="text"
                                    placeholder="First Name"
                                />
                            </div>
                        </div>
                    </form> */}
                </div>
            </div>
        );
    }
}
export default reduxForm({
    form: "simple" // a unique identifier for this form
})(ReduxForm);
