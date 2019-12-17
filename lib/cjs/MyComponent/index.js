"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
/** MyComponent description. See [Docs](https://github.com/jonamat/react-library-boilerplate). */
var MyComponent = function (_a) {
    var _b = _a.myProp, myProp = _b === void 0 ? 'world' : _b;
    return react_1.default.createElement(react_1.default.Fragment, null,
        "Hello ",
        myProp,
        "!");
};
MyComponent.propTypes = {
    myProp: prop_types_1.default.element,
};
exports.default = MyComponent;
