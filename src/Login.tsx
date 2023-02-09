import React, { useContext, useRef } from "react";
import { Button, Col, Container, Form, Navbar } from "react-bootstrap";
import { AuthContext } from "./context/AuthContext";
import auth from "./firebaseSetup";
import { useNavigate } from "react-router-dom";

function Auth() {
  const user = useContext(AuthContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const createAccount = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <>
      <Navbar className="justify-content-between" bg="white" variant="dark">
        <Navbar.Brand>Firebase Authentication</Navbar.Brand>
        {user && <Button onClick={signOut}>Sign Out</Button>}
      </Navbar>
      {!user ? (
        <Container style={{ maxWidth: "500px", background: "white" }} fluid>
          <Form className="mt-4">
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control ref={emailRef} type="email" placeholder="email" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="password"
              />
            </Form.Group>
            <Form.Group>
              <Col xs={6}>
                <Button onClick={createAccount} type="button" >
                  Sign Up
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  onClick={signIn}
                  type="button"
                  variant="secondary"
                  
                >
                  {/* <Link to={'/'} > */}
                  Sign In
                  {/* </Link> */}
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Container>
      ) : (
        <h2 className="mt-4 text-center" style={{ color: "red", background: "white" }}>Welcome {user.email}</h2>
      )}
    </>
  );
}

export default Auth;


