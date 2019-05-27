import React, { Component } from "react";
import { Field } from "redux-form";
import countries from "../countries";

class StepSecond extends Component {
    render() {
        return (
            <div className="StepSecond">
                <div className="input-wrapper">
                    <Field
                        name="company"
                        component="input"
                        label="Company"
                        type="text"
                        requaired="true"
                    />
                </div>
                <div className="input-wrapper">
                    <Field
                        name="country"
                        component="select"
                        label="Country"
                        type="select"
                        requaired="true"
                        // defaultValue={countries[0].name}
                    >
                        <option value="" selected disabled hidden>Choose country</option>
                        {countries.map(country => {
                            return (
                                <option  key={country.code}>
                                    {country.name}
                                </option>
                            );
                        })}
                    </Field>
                </div>

                <div className="input-wrapper">
                    <Field
                        name="date"
                        component="input"
                        label="date"
                        type="date"
                        requaired="true"
                        min="1900-01-01"
                        max="2019-01-31"
                    />
                </div>
            </div>
        );
    }
}
export default StepSecond;
