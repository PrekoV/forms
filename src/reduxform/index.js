import React, { Component } from "react";
import { reduxForm } from "redux-form";
import "../App.css";
import StepFirst from "./StepFirst";
import StepSeond from "./StepSecond";
import StepThird from "./StepThird";
import { SubmissionError } from "redux-form";

export class ReduxForm extends Component {
    state = {
        step: 1
    };
    submit = values => {
        switch (this.state.step) {
            case 1:
                if (!values.email) {
                    throw new SubmissionError({
                        email: "You have to input your e-mail!",
                        _error: "Login failed!"
                    });
                } else if (!values.password) {
                    throw new SubmissionError({
                        password: "You have to input your password!",
                        _error: "Login failed!"
                    });
                } else if (values.password.length < 5) {
                    throw new SubmissionError({
                        password: "Password is too short!",
                        _error: "Login failed!"
                    });
                } else {
                    this.setState({ step: this.state.step + 1 });
                }
                break;
            case 2:
                if (!values.country) {
                    throw new SubmissionError({
                        country: "Field 'country' is empty!",
                        _error: "Login failed!"
                    });
                } else if (!values.company) {
                    throw new SubmissionError({
                        company: "company cannot be empty!",
                        _error: "Login failed!"
                    });
                } else if (!values.date) {
                    throw new SubmissionError({
                        date: "Field 'date' is empty!",
                        _error: "Login failed!"
                    });
                } else {
                    this.setState({ step: this.state.step + 1 });
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
        const {
            handleSubmit,
            pristine,
            reset,
            submitting,
            error,
            email
        } = this.props;
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
                                                ? this.state.step === 3
                                                    ? this.setState({
                                                          step: 1
                                                      })
                                                    : this.setState({
                                                          step:
                                                              this.state.step -
                                                              1
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
                </div>
            </div>
        );
    }
}
export default reduxForm({
    form: "simple" // a unique identifier for this form
})(ReduxForm);
