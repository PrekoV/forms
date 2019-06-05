import React, { Component } from "react";
import { Field } from "formik";
import field from './fielsFormik';

export default class StepFirst extends Component {
    render() {
        return (
            <div className="StepFirst">
                    <Field className="field" type="email" component={field} name="email" />
                    <Field className="field"  type="password" component={field} name="password" />
            </div>
        );
    }
}
