import React, { Component } from "react";
import { Field } from "redux-form";
import field from './fieldRedux';


class StepFirst extends Component {
    render() {
        return (
            <div className="StepFirst">
                    <Field
                        name="email"
                        component={field}
                        label="Email"
                        type="email"
                        className="field"
                    />

                    <Field
                        name="password"
                        component={field}
                        label="Password"
                        type="password"
                        className="field"
                    />

            </div>
        );
    }
}
export default StepFirst;
