import React from "react";
import ReactDOM from "react-dom/client";

const Spam = <span>This is Not a heading 3</span>;
const data = api.getData();
const Heading = () => {
  return (
    <h1 id="h1" key="h1">
      "this is the 1st Heading"
      {Spam}
    </h1>
  );
};

const heading2 = 10;
//JSX

const Parent = () => (
  <div id="parent" key="parent">
    {Heading()}
    {heading2}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Parent />);
