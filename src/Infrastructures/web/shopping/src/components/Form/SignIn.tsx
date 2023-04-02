import styled from "@emotion/styled";
import React from "react";
import { button } from "../../globalStyle/button";
import Input from "../UI/Input";
import Label from "../UI/Label";

const Form = styled.form({
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
  width: "50%",
});
const TextHeader = styled.h1({
  textAlign: "center",
});
const Button = styled.button(button, {
  padding: "1rem 0px",
});
const Main = styled.div({
  display: "flex",
  flexDirection: "column",
  rowGap: "0.5rem",
});
const SignIn = () => {
  return (
    <Form>
      <TextHeader>Sign In Form</TextHeader>
      <Main>
        <Label htmlfor="username" text="Username" />
        <Input type="text" onChange={() => {}} id="username" />
        <Label htmlfor="password" text="Password" />
        <Input type="text" onChange={() => {}} id="password" />
      </Main>
      <Button type="submit">Sign In Here</Button>
    </Form>
  );
};

export default SignIn;
