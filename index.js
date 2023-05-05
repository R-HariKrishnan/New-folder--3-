/*Java Script*/

// const heading = document.createElement("h2");
// heading.textContent = "Hello World";
// heading.className = "header";
// document.getElementById("root").append(heading);
// console.log("Javascript Element: ", heading);

/* React */
// const reactHeading = React.createElement("h1",{className : "head"},"Hello React!");

/* React with JSX */



const App = () => ( 
        <>
            <h1>
                Hello JSX
            </h1>
            <p>
                This is a JSX paragraph
            </p>
        </>
    )   


ReactDOM.createRoot(document.getElementById("root")).render(<App/>);  

// console.log("React Element: ", reactHeading);
