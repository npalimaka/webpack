import {handleSubmit} from "../client/js/formHandler"

// A test suite may contain one or more related tests
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test("Testing the handleSubmit() function", () => {
        // Define the input for the function, if any, in the form of variables/array
        // Define the expected output, if any, in the form of variables/array
        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matche

        document.body.innerHTML ='<div id="text" >Hello</div>';
        const spy = jest.spyOn(document, 'getElementById');
        global.Client = {
            getKey: () => { return new Promise((resolve, reject) => {
                process.nextTick(() =>
                    resolve({res: 'test'})
                )})},
            validate: () => {}
        }
        window.alert = {}

        const event = {
            preventDefault() {
            }}
        handleSubmit(event);
        expect(spy).toHaveBeenCalled();
    })});

// My simple mock file
export default {
    getElementsByClassName: () => {
        return [{
            className: 'welcome'
        }]
    }
};
