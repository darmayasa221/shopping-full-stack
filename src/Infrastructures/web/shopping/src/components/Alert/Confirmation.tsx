import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import { button } from "../../globalStyle/button";

const Wrapper = styled.div({
  zIndex: 30,
  backgroundColor: "white",
  borderRadius: "10px",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
});
const Header = styled.div({});
const TextHeader = styled.h1({});
const Main = styled.div({
  display: "flex",
  justifyContent: "space-evenly",
});
const SignInLink = styled(Link)(button, {
  textDecoration: "none ",
  padding: "1rem 1.5rem",
});
const SignUpLink = styled(Link)({
  textDecoration: "none",
  color: "rgba(0, 0, 0, 0.7)",
  padding: "1rem 1.5rem",
  ":hover": {
    color: "black",
  },
});
const Confirmation = () => {
  return (
    <Wrapper>
      <Header>
        <TextHeader>did you have an account?</TextHeader>
      </Header>
      <Main>
        <SignInLink to="?">Sign In</SignInLink>
        <SignUpLink to="/">Sign Up</SignUpLink>
      </Main>
    </Wrapper>
  );
};

export default Confirmation;
