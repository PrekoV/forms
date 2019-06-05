import React, { Component } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import "../App.css";
import StepFirst from "./StepFirst";
import StepSecond from "./StepSecond";
import StepThird from "./StepThird";

export default class FormikForm extends Component {
    state = {
        step: 1
    };
    submit = (values, actions) => {
        values && actions.setSubmitting(false);
        switch (this.state.step) {
            case 1:
                this.setState({
                    step: this.state.step + 1
                });
                break;
            case 2:
                this.setState({
                    step: this.state.step + 1
                });
                break;
            case 3:
                break;
            default:
                console.log("no one knows");
                break;
        }
    }
    render() {
        console.log(this.state);
        return (
            <div className="FormikForm">
                <div className="FormikForm-wrapper">
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
                        <Formik
                            onSubmit={(values, actions) => this.submit(values, actions)}
                            initialValues={{
                                email: "",
                                password: "",
                                company: "",
                                country: "",
                                date: ""
                            }}
                            validate={values => {
                                let errors = {};
                                switch (this.state.step) {
                                    case 1:
                                        if (!values.email) {
                                            errors.email =
                                                "You have to input your e-mail!";
                                        } else if (!values.password) {
                                            errors.password =
                                                "You have to input your password!";
                                        } else if (values.password.length < 5) {
                                            errors.password =
                                                "Password is too short!";
                                        }
                                        break;
                                    case 2:
                                        if (!values.country) {
                                            errors.country =
                                                "country cannot be empty!";
                                        } else if (!values.company) {
                                            errors.company =
                                                "company cannot be empty!";
                                        } else if (!values.date) {
                                            errors.date =
                                                "date cannot be empty!";
                                        }
                                        break;
                                    default:
                                        console.log("default");
                                }
                                return errors;
                            }}
                            render={({
                                errors,
                                status,
                                touched,
                                isSubmitting,
                                values,
                                handleSubmit
                            }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className="error">
                                        <ErrorMessage
                                            name="err"
                                            component="div"
                                        />
                                    </div>
                                    {this.state.step === 1 ? (
                                        <StepFirst />
                                    ) : this.state.step === 2 ? (
                                        <StepSecond />
                                    ) : (
                                        <StepThird values={values} />
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
                                                                      this.state
                                                                          .step -
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
                                        <button
                                            disabled={isSubmitting}
                                            type="submit"
                                        >
                                            {this.state.step === 3
                                                ? "submit"
                                                : "next ↪"}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
