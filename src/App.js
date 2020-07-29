import React from "react";
import cat from "./assets/cat.gif";
import "./App.css";

function App() {
  return (
       <div className="App">
           <h1>Welcome to Game-Now</h1>
               <div className="cat">
                  <img src={cat} alt="a cat" />
            </div>
    </div>
  );
}

export default App;
