import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import { wrapper } from "../../globalStyle/wrapper";
import UnAuthorization from "./UnAuthorization";
import Authorization from "./Authorization";
import { link } from "../../globalStyle/link";

const Container = styled.div(wrapper, {
  height: "3rem",
  justifyContent: "center",
  alignItems: "center",
});
const Wrapper = styled.div(wrapper, {
  width: "1020px",
  justifyContent: "space-between",
});
const Middle = styled.div({
  width: "100%",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  columnGap: "2rem",
});
const Left = styled.div({
  zIndex: 1,
  display: "flex",
  columnGap: "10px",
});
const Item = styled(Link)(link, {
  ":hover": {
    borderBottom: "solid 1px black",
  },
});
const Header = () => {
  const auth = true;
  return (
    <Container>
      <Wrapper>
        <div>Logo</div>
        <Middle>
          <Item to="/">New Releases</Item>
          <Item to="/">Men</Item>
          <Item to="/">Women</Item>
        </Middle>
        <Left>{auth ? <Authorization /> : <UnAuthorization />}</Left>
      </Wrapper>
    </Container>
  );
};

export default Header;
