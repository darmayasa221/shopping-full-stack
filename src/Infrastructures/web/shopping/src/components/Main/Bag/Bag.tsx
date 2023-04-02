import styled from "@emotion/styled";
import React from "react";
import { wrapper } from "../../../globalStyle/wrapper";
import Item from "./Item";
import { button } from "../../../globalStyle/button";
import { font } from "../../../globalStyle/font";

const Wrapper = styled.div(wrapper, {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
});
const Header = styled.div({
  display: "flex",
  height: "100px",
  backgroundColor: "#FAFAFA",
  alignItems: "center",
});
const TextHeader = styled.p({
  textTransform: "uppercase",
  color: "rgba(0, 0, 0, 0.6)",
  fontSize: "14px",
});
const Main = styled.div({
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
});
const Footer = styled.div({
  display: "flex",
  flexDirection: "column",
  rowGap: "1rem",
  alignItems: "flex-end",
});
const LeftSide = styled.div({
  width: "60%",
  display: "flex",
  justifyContent: "center",
});
const RightSide = styled.div({
  width: "40%",
  display: "flex",
  justifyContent: "space-around",
});
const WrapperPrice = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "25%",
  height: "65px",
  background: "#FAFAFA",
});
const TextPrice = styled.p(font, {
  textTransform: "uppercase",
  paddingLeft: "1rem",
});
const Button = styled.button(button, {
  width: "25%",
  height: "65px",
});
const Bag = () => {
  return (
    <Wrapper>
      <Header>
        <LeftSide>
          <TextHeader>product</TextHeader>
        </LeftSide>
        <RightSide>
          <TextHeader>price</TextHeader>
          <TextHeader>quantity</TextHeader>
          <TextHeader>total</TextHeader>
        </RightSide>
      </Header>
      <Main>
        <Item />
        <Item />
        <Item />
      </Main>
      <Footer>
        <WrapperPrice>
          <TextPrice>total</TextPrice>
          <TextPrice>$30</TextPrice>
        </WrapperPrice>
        <Button>Pay Now</Button>
      </Footer>
    </Wrapper>
  );
};

export default Bag;
