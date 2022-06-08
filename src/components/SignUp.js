import React, { useState } from 'react';
import styled from "styled-components";

function SignUp() {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [PhotoURL, setPhotoURL] = useState("")
  return (
      <Container>
        <Main>
          <Form>
            <Logo>
              <img src="./instagram-text-logo.png" alt="" />
            </Logo>
  
            <InputContainer>
              <input 
              type="email"
              placeholder="Email" 
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            </InputContainer>
            <InputContainer>
              <input 
              type="text" 
              placeholder="Username" 
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            </InputContainer>
            <InputContainer>
              <input 
              type="password" 
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            </InputContainer>
            <InputContainer>
              <input 
              type="text" 
              placeholder="PhotoURL (Optional)"
              onChange={(e) => setPhotoURL(e.target.value)}
              value={PhotoURL}
              />
            </InputContainer>
  
            <button>Sign Up</button>
          </Form>
  
          <LoginContainer>
            <p>
              Have an account ?<span>Login</span>
            </p>
          </LoginContainer>
        </Main>
      </Container>
    );
  }

  const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.main``;

const Form = styled.form`
  background: #fff;
  border: 1px solid lightgray;
  padding: 20px;
  min-width: 300px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;

  button {
    height: 33px;
    width: 230px;
    background-color: #0095f6;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-top: 30px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
  }
`;
 
const Logo = styled.div`
  width: 250px;
  img {
    width: 100%;
  }
`;

const InputContainer = styled.div`
  height: 25px;
  width: 250px;
  margin-top: 20px;
  input {
    height: 100%;
    width: 100%;
    background-color: #fafafa;
    border: 1px solid gray;
    padding: 5px;
  }
`;

const LoginContainer = styled.div`
  border: 1px solid lightgray;
  padding: 20px;
  background-color: #fff;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font size: 14px;

    span {
      color: #18a4f8;
      font-weight: 600;
      cursor: pointer;
    }

  }
`;

export default SignUp