import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";

// const reactHeading = React.createElement("h1", {id: "heading", abc: "xyz"}, "Hello World! (created through React.js)")
// console.log("React.createElement() returns :=>", reactHeading);

// /*
// <div id="parent">
//     <div id="child1">
//         <h1 id="heading1">I'm h1 tag in child1</h1>
//         <h2 id="heading2">I'm h2 tag in child1</h2>
//     </div>

//     <div id="child2">
//         <h1 id="heading1">I'm h1 tag in child2</h1>
//         <h2 id="heading2">I'm h2 tag in child2</h2>
//     </div>
// </div>
// */ 
// const nestedReactElements = React.createElement("div", {id: "parent"}, [
//     React.createElement("div", {id: "child1"},[
//         React.createElement("h1", {id: "heading1"},"I'm h1 tag in child1"),
//         React.createElement("h2", {id: "heading2"},"I'm h2 tag in child1")
//     ]),
//     React.createElement("div", {id: "child2"},[
//         React.createElement("h1", {id: "heading1"},"I'm h1 tag in child2"),
//         React.createElement("h2", {id: "heading2"},"I'm h2 tag in child2")
//     ])
// ])

// const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"))
// const nestedReactRoot = ReactDOM.createRoot(document.getElementById("nested-react-root"))

// reactRoot.render(reactHeading)
// nestedReactRoot.render(nestedReactElements)


// **********| React.createElement() => React Element (Object) => render() method => HTML Element |*********
// const heading = React.createElement("h1", { id: "heading" }, "Welcome to React.js using React🚀")
// console.log("Heading ---->", heading);

// **********| JSX - is not HTML in JS, it is HTML-like / XML-like syntax |*************
// **********| JSX => Babel transpiles it to React.createElement() => React Element (Object) => render() method => HTML Element |*********
// const heading = (
//     <h1 id="heading">
//         Welcome to React.js using JSX🚀
//     </h1>
// );




// // React Functional Component
// const Title = () => {
//     return <h1 className="head" tabIndex="5">Welcome to React🚀</h1>
// }
// //   OR
// const HeadingComponent = () => (
//     <div id="container">
//         <Title />
//         <h1 className="heading">This component composition in React Functional Component!</h1>
//     </div>
// )



const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)