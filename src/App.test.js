import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FormikForm from "./formik";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import Field from "./reduxform/fieldRedux.js";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Reduxform, { ReduxFormClass } from "./reduxform";
import { Provider } from "react-redux";
import store from "./store";

Enzyme.configure({ adapter: new Adapter() });
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("equals", () => {
    expect(2 + 2).toBe(4);
    expect(2 + 2).toEqual(4);
    expect(2 + 2).toBeGreaterThan(1);
    expect(2 + 2).toBeLessThan(5);
    expect(2 + 2).toBeTruthy();
    expect(2 + 2).not.toBeFalsy();
});

test("Checking the ReduxForm Component", () => {
    expect(FormikForm).toBeDefined();
    const component = renderer.create(<FormikForm />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree.props.className).toEqual("FormikForm");
});

test("app test", () => {
    const component = shallow(<App />);
    expect(component.state("render")).toEqual(0);
    component.find("button#a").simulate("click");
    expect(component.state("render")).toEqual(1);
    expect(component.find("ReduxForm").props().form).toEqual("simple");
});
