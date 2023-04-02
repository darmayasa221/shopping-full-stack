import styled from "@emotion/styled";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { wrapper } from "../../globalStyle/wrapper";

const paths: Array<string> = ["signin"];
const Container = styled.main(wrapper, {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
const Wrapper = styled.div<{ path: typeof paths | string }>(wrapper, () => ({
  width: "1020px",
  justifyContent: "center",
}));
const TextHeader = styled.h1({});
const Main = () => {
  const { pathname } = useLocation();
  const pathMatch: string = paths.find(
    (path) => path === pathname.replace("/", ""),
  ) as string;
  return (
    <Container>
      <TextHeader>New Releases</TextHeader>
      <Wrapper path={pathMatch}>
        <Outlet />
      </Wrapper>
    </Container>
  );
};

export default Main;
