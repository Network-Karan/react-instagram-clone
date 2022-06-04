import React from 'react';
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Main>
        <Form>
          <Logo>
            <img src="./instagram-text-logo.png" alt="" />
          </Logo>

          <InputContainer>
            <input type="email" placeholder="Email" />
          </InputContainer>
          <InputContainer>
            <input type="password" placeholder="Password" />
          </InputContainer>
        </Form>
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

const Form = styled.form``;

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

export default Login;