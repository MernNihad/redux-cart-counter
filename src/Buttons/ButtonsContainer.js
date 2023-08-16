import React from 'react'
import AfterCart from './AfterCart'
import BeforeCart from './BeforeCart'
import { useSelector } from 'react-redux'

function ButtonsContainer({ products }) {

  const { cartList } = useSelector((state) => state?.countReducer);

  let result = cartList?.find((item) => item?.id === products?.id)

  return (
    <div>
      {result?.count > 0 ? <AfterCart productsId={products.id} /> : <BeforeCart productsId={products.id} />}
    </div>
  )
}

export default ButtonsContainer