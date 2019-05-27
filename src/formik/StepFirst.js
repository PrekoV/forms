import React, { Component } from "react";
import { Field } from "formik";

export default class StepFirst extends Component {
    
    render() {
        return (
            <div className="StepFirst">
                <div className="input-wrapper">
                    <Field type="email" name="email" />
                </div>
                <div className="input-wrapper">
                    <Field type="password" name="password" />
                </div>
            </div>
        );
    }
}
