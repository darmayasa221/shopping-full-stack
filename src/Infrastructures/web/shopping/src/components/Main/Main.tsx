import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router-dom";

const Container = styled.main({});
const Main = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Main;
