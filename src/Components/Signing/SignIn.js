// import React from "react";
import { FormEvent, useRef, useState } from "react";
import GenericForm from "../GenericForm";
import { Button, Col, Form, FormControl, FormGroup, FormLabel, FormText, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import Swal from "sweetalert2";
// import'./Signln.css';
export default function SignIn()
{
    const accounts = useReadLocalStorage('accounts', { deserializer: (value) => JSON.parse(value) }) ?? {};
    const [currentAccount, setCurrentAccount] = useLocalStorage('currentAccount', '');
    
    const [validated, setValidated] = useState(false);
    const navigateTo = useNavigate();
    const usernameInput = useRef<HTMLInputElement>(null);
    const passwordInput = useRef<HTMLInputElement>(null);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        else {
            const username = usernameInput.current.value;
            const password = passwordInput.current.value;

            if (!(username in accounts) || (accounts[username].password !== password)) {
                Swal.fire({title: 'Incorrect', icon: 'error', text: 'Incorrect username or password!'});
            }
            else {
                Swal.fire({title: 'Signed In', icon: 'success', text: 'You have signed in successfully. Welcome!'})
                    .then(() => {
                        if (currentAccount.length === 0) {
                            setCurrentAccount(accounts[username].name);
                        }
        
                        navigateTo('/');
                    })
            }
        }
        setValidated(true);
    };
    

    return (
        <GenericForm containerClass="container-md-forced" title={"Sign In"}>
            <Col md={'12'}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Stack className="m-2 p-4" id="contact-form" gap={3}>
                        <FormGroup controlId="usernameInput">
                            <FormLabel>Username</FormLabel>
                            <FormControl ref={usernameInput} type="text" name="username" required />
                            <Form.Control.Feedback type="invalid">
                                Please enter your username.
                            </Form.Control.Feedback>
                        </FormGroup>
                        <FormGroup controlId="passwordInput">
                            <FormLabel>Password</FormLabel>
                            <FormControl ref={passwordInput} type="password" name="password" required />
                            <Form.Control.Feedback type="invalid">
                                Please enter your password.
                            </Form.Control.Feedback>
                        </FormGroup>
                        <div className="w-100 d-flex">
                            <FormText className="my-auto">Don't have an account? <Link to='/forms/sign/up'>Sign up now!</Link></FormText>
                            <Button className="ms-auto" type="submit">Login</Button>
                        </div>
                    </Stack>
                </Form>
            </Col>
        </GenericForm>
    )
}
// import React from 'react'
// import'./Signln.css';
// const SignIn = () => {
//   return (
//     <div className="container" >
//     <div className="forms-container">
//       <div className="signin-signup">
//         <form action="#" className="sign-in-form">
//           <h2 className="title">Sign in</h2>
//           <div className="input-field">
//             <i className="fas fa-user"></i>
//             <input type="text" placeholder="UserclassName" />
//           </div>
//           <div className="input-field">
//             <i className="fas fa-lock"></i>
//             <input type="password" placeholder="Password" />
//           </div>
//           <input type="submit" value="Login" className="btn solid" />
//           <p className="social-text">Or Sign in with social platforms</p>
//           <div className="social-media">
//             <a href="#" className="social-icon">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="#" className="social-icon">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#" className="social-icon">
//               <i className="fab fa-google"></i>
//             </a>
//             <a href="#" className="social-icon">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//           </div>
//         </form>
//         <form action="#" className="sign-up-form">
//           <h2 className="title">Sign up</h2>
//           <div className="input-field">
//             <i className="fas fa-user"></i>
//             <input type="text" placeholder="UserclassName" />
//           </div>
//           <div className="input-field">
//             <i className="fas fa-envelope"></i>
//             <input type="email" placeholder="Email" />
//           </div>
//           <div className="input-field">
//             <i className="fas fa-lock"></i>
//             <input type="password" placeholder="Password" />
//           </div>
//           <input type="submit" className="btn" value="Sign up" />
//           <p className="social-text">Or Sign up with social platforms</p>
//           <div className="social-media">
//             <a href="#" className="social-icon">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="#" className="social-icon">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#" className="social-icon">
//               <i className="fab fa-google"></i>
//             </a>
//             <a href="#" className="social-icon">
//               <i className="fab fa-linkedin-in"></i>
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>

//     <div className="panels-container">
//       <div className="panel left-panel">
//         <div className="content">
//           <h3>New here ?</h3>
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
//             ex ratione. Aliquid!
//           </p>
//           <button className="btn transparent" id="sign-up-btn">
//             Sign up
//           </button>
//         </div>
//         <img src="img/log.svg" className="image" alt="" />
//       </div>
//       <div className="panel right-panel">
//         <div className="content">
//           <h3>One of us ?</h3>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             laboriosam ad deleniti.
//           </p>
//           <button className="btn transparent" id="sign-in-btn">
//             Sign in
//           </button>
//         </div>
//         <img src="img/register.svg" className="image" alt="" />
//       </div>
//     </div>
//   </div>
//   )
// }

// export default SignIn
