import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/countReducer';

function BeforeCart({ productsId }) {

    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(addToCart({ id: productsId }))
    }

    return (
        <Button variant="primary" className="bg-warning" onClick={handleChange}>
            ADD TO CART
        </Button>
    )
}

export default BeforeCart