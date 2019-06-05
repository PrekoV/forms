import React, { Component } from 'react'
import { Field } from "formik";
import countries from "../countries";
import CostomField from './fielsFormik';

export default class StepSecond extends Component {
    render() {
        return (
            <div className="StepSecond">

                <Field
                    name="company"
                    component={CostomField}
                    label="Company"
                    type="text"
                    requaired="true"
                />
                <Field
                    name="country"
                    component={(props) => <CostomField {...props} counties={countries}/>}
                    label="Country"
                    type="select"
                    requaired="true"
                ></Field>
                <Field
                    name="date"
                    component={CostomField}
                    label="date"
                    type="date"
                    requaired="true"
                    min="1900-01-01"
                    max="2019-01-31"
                />
        </div>
        )
    }
}
