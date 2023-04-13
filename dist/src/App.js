import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Counter } from "./Counter.js";
var App = function(param) {
    var _param_name = param.name, name = _param_name === void 0 ? "Anonymous" : _param_name;
    return /*#__PURE__*/ _jsxs("div", {
        style: {
            border: "3px red dashed",
            margin: "1em",
            padding: "1em"
        },
        children: [
            /*#__PURE__*/ _jsxs("h1", {
                children: [
                    "Hello ",
                    name,
                    "!!"
                ]
            }),
            /*#__PURE__*/ _jsx("h3", {
                children: "This is a server component."
            }),
            /*#__PURE__*/ _jsx(Counter, {})
        ]
    });
};
export default App;
