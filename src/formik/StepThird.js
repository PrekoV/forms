import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        store: state
    };
};

class StepThird extends Component {
    render() {
        console.log(this.props.values)
        console.log(this.props)
        return (
            <div className="StepThird">
                <div className="values">
                    Your email: {this.props.values.email}
                </div>
                <div className="values">
                    Your company: {this.props.values.company}
                </div>
                <div className="values">
                    Your country: {this.props.values.country}
                </div>
                <div className="values">
                    Your birthday: {this.props.values.date}
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps)(StepThird)