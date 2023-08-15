import React from "react";
import { Button, Card } from "react-bootstrap";
import { decrementFunction, incrementFunction } from "./redux/countReducer";
import { useDispatch, useSelector } from "react-redux";
import CountButtons from "./ConutButtons";

function Cards({products}) {
    const values=useSelector((state)=>state)
    console.log(values.countReducer.cartList,"hello");
   


    const dispatch = useDispatch();

     const {Body,Image,id,name,price} = products

  return (
    <div
      className="shadow p-2 m-4 "
      style={{
        textAlign: "center",
        fontWeight: "bolder",
        display: "inline-flex",
      }}
    >
      <Card style={{ width: "13rem", border: "none", borderRadius: "30px" }}>
        <Card.Img
          variant="top"
          style={{ height: "15rem" }}
          src={require(`./${Image}.jpg`)}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{Body}</Card.Text>
          <div>
            <h4>PRICE : {price}</h4>


          </div>

          <CountButtons products={products} />
          <Button variant="primary" className="bg-warning" onChange={() => {}}>
            ADD TO CART
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
