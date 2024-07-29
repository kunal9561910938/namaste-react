const parent= React.createElement("div", { id:"parent"},
    [
        React.createElement("div",{id:"child"},
            [React.createElement("h1",{id:"heading"},"welcome to react course"),
             React.createElement("h2",{id:"heading2"}, "This is an heading2"
             )
            ] 
         
         ),
         React.createElement("div",{id:"child2"},
            [React.createElement("h1",{id:"heading"},"welcome to react course"),
             React.createElement("h2",{id:"heading2"}, "This is an heading2"
             )
            ] 
         
         )
    ]
);
    
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
