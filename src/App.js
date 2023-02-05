 import "./App.css";
import Header from "./Components/Header";
import React, { useState, useEffect} from "react";

function App() {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);
 
  useEffect( () => {
    window.alert("useEffect Called");
  }, [state, state2])

  console.log("Function body");
  return(
    <div>
      <Header /> 
      <button onClick={() => setState(state+1)}>Click Me {state}</button>
      <button onClick={() => setState2(state2+1)}>Clickeeeee{state2}</button>
    </div>
  );
}
export default App;
