import React, { Component } from "react";
import { Field } from "redux-form";
import countries from "../countries";
import CostomField from './fieldRedux';

class StepSecond extends Component {
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
                        component={(props) => <CostomField counties={countries} {...props}/>}
                        label="Country"
                        type="select"
                        requaired="true"
                        // defaultValue={countries[0].name}
                    >
                        {/* <option value="" selected disabled hidden>Choose country</option>
                        {countries.map(country => {
                            return (
                                <option key={country.code}>
                                    {country.name}
                                </option>
                            );
                        })} */}
                    </Field>

                    <Field
                        name="date"
                        component={CostomField}
                        label="date"
                        type="date"
                        requaired="true"
                        min="1900-01-01"
                        max="2019-01-31"
                        defaultValue=""
                    />
            </div>
        );
    }
}
export default StepSecond;
