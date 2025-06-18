import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is the h1 tag"),
    React.createElement("h2", {}, "this is the 2nd tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is the h1 tag"),
    React.createElement("h2", {}, "this is the 2nd tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
