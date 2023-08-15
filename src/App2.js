import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import  {useDispatch, useSelector}  from 'react-redux';
import { decrementFunction, incrementFunction } from './redux/countReducer';
import Cards from './Cards';
 




function App2() {
  
    
    const products=[
        {id:"1",name:"I PHONE",Body:"The iPhone is a smartphone made by Apple",price:"10000",Image:"iphone"},
        {id:"2",name:"SAMSUNG",Body:"The iPhone is a smartphone made by SAMSUNG",price:"10000",Image:"samsung"},
        {id:"3",name:"OPPO",Body:"The iPhone is a smartphone made by OPPO",price:"10000",Image:"oppo"},
        {id:"4",name:"VIVO",Body:"The iPhone is a smartphone made by VIVO",price:"10000",Image:"vivo"},
    ]
  return (
    <>
    <div>
    <Navbar className="bg-body-tertiary shadow p-2 m-4" style={{color:"aliceblue"}}>
      <Container>
        <Navbar.Brand href="#home"  style={{ color:"#f5b916" ,fontWeight:"bolder",fontStyle:"italic",textShadow:"5px 3px"}}> <h1>Welcome to Myg</h1></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{color:"#f5b916",fontWeight:"bolder"}}>
           {/* <h3>Cart No:{values.countReducer.count}</h3>  */}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
    {
        
        products.map((App2,key)=>(
          <Cards key={key} products={App2}/>

        ))
       
    }
     </div>
     </>
  )
}

export default App2