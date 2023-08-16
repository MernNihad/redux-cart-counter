import React from "react";
import { Card } from "react-bootstrap";
import ButtonsContainer from "./Buttons/ButtonsContainer";

function Cards({ products }) {
  const { Body, Image, name, price } = products;

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
          <ButtonsContainer products={products}/>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
