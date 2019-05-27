import React, { Component } from 'react'
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        store: state.form.simple.values
    };
};

class StepThird extends Component {
    render() {
        console.log(this.props.store)
        return (
            <div className="StepThird">
                <div className="values">Your email: {this.props.store.email}</div>
                <div className="values">Your company: {this.props.store.company}</div>
                <div className="values">Your country: {this.props.store.country}</div>
                <div className="values">Your birthday: {this.props.store.date}</div>
            </div>
        )
    }
}
export default connect(mapStateToProps)(StepThird)
