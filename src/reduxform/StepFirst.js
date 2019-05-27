import React, { Component } from "react";
import { Field } from "redux-form";


class StepFirst extends Component {
    render() {
        return (
            <div className="StepFirst">
                <div className="input-wrapper">
                    <Field
                        name="email"
                        component="input"
                        label="Email"
                        type="email"
                        requaired="true"
                    />
                </div>
                <div className="input-wrapper">
                    <Field
                        name="password"
                        component="input"
                        label="Password"
                        type="password"
                        requaired="true"
                    />
                </div>
            </div>
        );
    }
}
export default StepFirst;
