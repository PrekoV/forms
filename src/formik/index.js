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
                            //   initialValues={user /** { email, social } */}
                            onSubmit={(values, actions) => {
                                values && actions.setSubmitting(false);
                                //this.props.dispatch(addProduct(values));
                                // MyImaginaryRestApiCall(user.id, values).then(
                                //   updatedUser => {
                                // 	actions.setSubmitting(false);
                                // 	updateUser(updatedUser);
                                // 	onClose();
                                //   },
                                //   error => {
                                // 	actions.setSubmitting(false);
                                // 	actions.setErrors(transformMyRestApiErrorsToAnObject(error));
                                // 	actions.setStatus({ msg: 'Set some arbitrary status or data' });
                                //   }
                                // );
                                console.log(values, actions);
                                switch (this.state.step) {
                                    case 1:
                                        // if (values.email && values.password) {
                                        //     if (values.password.length < 5) {
                                        //         this.setState({
                                        //             error:
                                        //                 "Password is too short!"
                                        //         });
                                        //     } else {
                                                console.log(
                                                    "submit first",
                                                    values
                                                );
                                                this.setState({
                                                    step: this.state.step + 1,
                                                    
                                                });
                                        //     }
                                        // } else {
                                        //     this.setState({
                                        //         error:
                                        //             "You have to fill email and password!"
                                        //     });
                                        // }
                                        break;
                                    case 2:
                                        // if (
                                        //     values.country &&
                                        //     values.company &&
                                        //     values.date
                                        // ) {
                                            console.log(
                                                "submit second",
                                                values
                                            );
                                            this.setState({
                                                step: this.state.step + 1,
                                               
                                            });
                                        // } else {
                                        //     this.setState({
                                        //         error:
                                        //             "You have to fill country, company and password!"
                                        //     });
                                        // }
                                        break;
                                    case 3:
                                        console.log("submit all!", values);
                                        break;
                                    default:
                                        console.log("no one knows");
                                        break;
                                }
                            }}
                            initialValues={{
                                email: "",
                                password: "",
                                company: "",
                                country: "Choose country",
								date: "",
								err: ""
                            }}
                            validate={values => {
								let errors = {};
								console.log(!values.email || !values.password)
                                if (!values.email || !values.password) {
									console.log("hhhhhhhhhhhh")
                                    errors.err = "You have to fill email and password!";
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                        values.email
                                    )
                                ) {
                                    errors.err = "Invalid email address";
                                } else if (values.password.length < 5) {
                                    errors.err = "Password is too short!";
                                } else if (
                                    this.state.step === 2 &&
                                    (!values.country ||
                                        !values.company ||
                                        !values.date)
                                ) {
                                    errors.err =
                                        "You have to fill country, company and password!";
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
                                                // disabled={isSubmitting}
                                                onClick={() =>
                                                    this.state.step !== 1
                                                        ? this.setState({
                                                              step:
                                                                  this.state
                                                                      .step - 1
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
