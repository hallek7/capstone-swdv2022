import React,{useState} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Signup.css';

function Signup() {
  const[email, setEmail] = useState("");
  const[password,setPassword] =useState("");
  function handleLogin(e){
    e.preventDefault();
  }
return (
<Container>
<Row>
<Col md={7} className="d-flex align-items-center justify-content-center">
<div> 

<Form className='login__form' onSubmit={handleLogin}>
<h1 className='text-center'> Creat Account </h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit </Button>
    <div className="py-4"> 
    <p className='text-center'> Already Have an Account?<Link to="/login"> Login </Link></p>
    </div>
</Form>
</div>
</Col>


<Col md={5} className="signup__bg--container"></Col>
</Row>
</Container>
)
}

export default Signup;
