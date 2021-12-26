import {getKey} from "../client/js/getKey";

describe("Testing the getKey functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test("Testing the getKey() function", () => {

        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ }),
            })
        );
        expect(getKey()).toBeDefined();
    })});
