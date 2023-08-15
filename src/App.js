import { useState } from "react";
import  useSelector  from "react-redux";
// import { useDispatch } from "react-redux";
// import { decrementFunction, incrementFunction } from "./redux/countReducer";

function App() {
  const one=useSelector((state)=>state);
  console.log(one.countReducer.count);

  
  console.log(values.countReducer.count);

  return (
    <>
      <div>
        <h1>{values.countReducer.count}</h1>
        <button
          // onClick={()=>{
          //   dispatch(incrementFunction())
          // }}
        >
          +
        </button>
        <button
          //  onClick={()=>{
          //   dispatch(decrementFunction())
          // }}
        >
          -
        </button>
      </div>
    </>
  );
}

export default App;
