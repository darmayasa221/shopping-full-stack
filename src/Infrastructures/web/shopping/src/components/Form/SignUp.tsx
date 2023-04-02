import styled from "@emotion/styled";
import React from "react";
import { button } from "../../globalStyle/button";
import Label from "../UI/Label";
import Input from "../UI/Input";

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
const SignUp = () => {
  return (
    <Form>
      <TextHeader>Sign Up Form</TextHeader>
      <Main>
        <Label htmlfor="name" text="Name" />
        <Input type="text" onChange={() => {}} id="name" />
        <Label htmlfor="email" text="Email" />
        <Input type="email" onChange={() => {}} id="email" />
        <Label htmlfor="password" text="Passwrod" />
        <Input type="password" onChange={() => {}} id="password" />
      </Main>
      <Button type="submit">Sign Up Here</Button>
    </Form>
  );
};

export default SignUp;
