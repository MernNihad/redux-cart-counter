import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decrementFunction, incrementFunction } from './redux/countReducer';

function CountButtons({products}) {

    const values=useSelector((state)=>state)
    console.log(values.countReducer.cartList,"hello");

    let counterState = values.countReducer.cartList.find((item)=> item.id === products.id )
   
  console.log(counterState?.counter,'----');

    const dispatch = useDispatch();
  return (
    <p>
    <Button
      className="bg-warning"
      onClick={() => {
        dispatch(incrementFunction(products.id));
      }}
    >
      +
    </Button>
    <h4>{counterState?.counter}</h4>
    <Button
      className="bg-warning"
      onClick={() => {
        dispatch(decrementFunction(products.id));
      }}
    >
      -
    </Button>
  </p>
  )
}

export default CountButtons