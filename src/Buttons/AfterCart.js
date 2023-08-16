import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decrementFunction, incrementFunction } from '../redux/countReducer';

function AfterCart({ productsId }) {

    const { cartList } = useSelector((state) => state.countReducer);

    const dispatch = useDispatch();

    let result = cartList.find((item) => item.id === productsId)

    return (
        <div style={{ marginBottom: "1rem" }}>
            <Button
                className="bg-warning"
                onClick={() => {
                    dispatch(incrementFunction(productsId));
                }}
            >
                +
            </Button>
            <h4>{result.count}</h4>
            <Button
                className="bg-warning"
                onClick={() => {
                    dispatch(decrementFunction(productsId));
                }}
            >
                -
            </Button>
        </div>
    )
}

export default AfterCart