import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Headers from '../../Shared/Navbar/Headers';
import { FaGoogle } from 'react-icons/fa';
import './Login.css';

const Login = () => {
    const [logInData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, singInUsingGoogle } = useAuth();
    const handleLoginSubmit = e => {
        loginUser(logInData.email, logInData.password);
        e.preventDefault();
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...logInData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    return (
        <>
        <Headers></Headers>
            <Container className='p-5'>
                <Row>
                    <Col lg={2}></Col>
                    <Col lg={8} sm={12} className='register-container'>
                        <div className='login-form' style={{ fontFamily: 'var(--poppins-font)' }} >
                            <h2 className='login-text'>Please LogIn</h2>
                            <Form onSubmit={handleLoginSubmit}>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" onChange={handleOnChange} placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' onChange={handleOnChange} placeholder="Password" />
                                </Form.Group>
                                <NavLink style={{ textDecoration: 'none'}} to='/register'><span className='link-text'>New User? please Register</span></NavLink>
                                <button className="lonin-btn" type='submit'>LogIn</button> <br />
                            </Form>
                            <div className="wrapper">
                                <div className="divider div-transparent div-dot"></div>
                            </div>
                             <div>
                              <button className="g-singin-btn" onClick={singInUsingGoogle} type='submit'><FaGoogle  style={{color: '#0F9D58', fontSize: '22px'}}/>  Google Sign In</button>
                             </div>
                            {isLoading && <Spinner animation="border" variant="info" />}
                            {user?.email && <Alert style={{marginTop: '10px'}} variant='success'>
                                successfuly signIn!
                            </Alert>}
                            {authError && <Alert variant='danger'>
                                {authError}
                            </Alert>}
                        </div>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
            </Container>

        </>
    );
};

export default Login;