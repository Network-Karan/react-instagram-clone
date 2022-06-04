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

const Container = styled.div``;

const Main = styled.main``;

const Form = styled.form``;

const Logo = styled.div``;

const InputContainer = styled.div``;

export default Login;