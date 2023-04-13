import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { serve } from "wakuwork/client";
var root = createRoot(document.getElementById("root"));
var App = serve("App");
root.render(/*#__PURE__*/ _jsx(StrictMode, {
    children: /*#__PURE__*/ _jsx(App, {
        name: "Wakuwork"
    })
}));
