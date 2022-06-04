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
        </Form>
      </Main>
    </Container>
  )
}

const Container = styled.div``;

const Main = styled.main``;

const Form = styled.form``;

const Logo = styled.div`
  width:250px;
    img {
      width: 100%;
    }
`;

export default Login;