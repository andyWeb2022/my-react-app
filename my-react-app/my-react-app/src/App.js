 import { useState } from "react";
 import "./App.css" ;
const App= () =>{
  const [number , setNumber] = useState(0)
    return(
    <div>
        <p className="title">Counter</p>
        <p className= {`value ${number > 0 ? "text-green" : "text-red" }  ${number === 0 && "text-black"}`} size >{number}</p>
        <div className="btn-all">
            <button className="btn" onClick ={()=> {setNumber(number - 1)}}>decrease</button>
            <button className="btn" onClick ={()=> {setNumber(0)}}>reset</button>
            <button className="btn" onClick ={()=> {setNumber(number + 1)}}>increase</button>
        </div>
    </div>
  )
}
export default App;