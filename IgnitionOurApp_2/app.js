const heading = React.createElement("h1", {id: "head"}, "Hello world from react! ");  // {} means you give attributes to tag
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
console.log(heading);

const parent= React.createElement("div", {id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"Iam a heading tag"),React.createElement("h3",{},"Iam a heading tag")]));
//JSX for easy 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);