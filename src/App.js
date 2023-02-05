 import "./App.css";
import Header from "./Components/Header";
import React, { useState, useEffect} from "react";


function App() {
  const [state, setState] = useState(2);
  // const [name, setName]= useState('chandan')
  const [data, setData] = useState();
 
  useEffect( () => {
    async function getData() {
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);

      const res = await get.json(); 
      setData(res);
    }

    getData();
  }, [state])

  return(
    <div>
      <Header /> 
      <button onClick={() => setState(state+5)}>Click Me {state}</button>
      {
        data?.map((element,index)=>{
                return (
                  <div className="data" key={index}>
                      <h4>{element.firstName}</h4>
                      <h3>{element.lastName}</h3>
                    </div>
                );
        })
      }
     
    </div>
  );
}
export default App;   
