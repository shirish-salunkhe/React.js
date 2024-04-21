import React from "react";
import ReactDOM from "react-dom/client"

const reactHeading = React.createElement("h1", {id: "heading", abc: "xyz"}, "Hello World! (created through React.js)")
console.log("React.createElement() returns :=>", reactHeading);

/*
<div id="parent">
    <div id="child1">
        <h1 id="heading1">I'm h1 tag in child1</h1>
        <h2 id="heading2">I'm h2 tag in child1</h2>
    </div>
    
    <div id="child2">
        <h1 id="heading1">I'm h1 tag in child2</h1>
        <h2 id="heading2">I'm h2 tag in child2</h2>
    </div>
</div>
*/ 
const nestedReactElements = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"},[
        React.createElement("h1", {id: "heading1"},"I'm h1 tag in child1"),
        React.createElement("h2", {id: "heading2"},"I'm h2 tag in child1")
    ]),
    React.createElement("div", {id: "child2"},[
        React.createElement("h1", {id: "heading1"},"I'm h1 tag in child2"),
        React.createElement("h2", {id: "heading2"},"I'm h2 tag in child2")
    ])
])

const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"))
const nestedReactRoot = ReactDOM.createRoot(document.getElementById("nested-react-root"))

reactRoot.render(reactHeading)
nestedReactRoot.render(nestedReactElements)