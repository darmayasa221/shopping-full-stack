import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router-dom";
import { wrapper } from "../../globalStyle/wrapper";

const Container = styled.main(wrapper, {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
const Wrapper = styled.div(wrapper, {
  width: "1020px",
  justifyContent: "center",
});
const TextHeader = styled.h1({});
const Main = () => {
  return (
    <Container>
      <TextHeader>New Releases</TextHeader>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
  );
};

export default Main;
