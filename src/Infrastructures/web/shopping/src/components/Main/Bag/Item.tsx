import styled from "@emotion/styled";
import React from "react";
import { button } from "../../../globalStyle/button";

const Container = styled.div({
  display: "flex",
});

const LeftSide = styled.div({
  width: "60%",
  display: "flex",
  columnGap: "10px",
});
const RightSide = styled.div({
  width: "40%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});
const Button = styled.button(button, {
  borderRadius: "100%",
  padding: "1px",
  width: "20px",
  height: "20px",
});
const Product = styled.div({
  display: "flex",
  alignItems: "center",
  columnGap: "1rem",
});
const Image = styled.img({
  width: "150px",
  height: "150px",
  objectFit: "cover",
});
const WrapperButton = styled.div({
  width: "10%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  columnGap: "0.5rem",
});
const TextProduct = styled.h1({});
const TextRighSide = styled.p({});
const Item = () => {
  return (
    <Container>
      <LeftSide>
        <WrapperButton>
          <Button>+</Button>
          <Button>-</Button>
        </WrapperButton>
        <Product>
          <Image />
          <TextProduct>Nike abc</TextProduct>
        </Product>
      </LeftSide>
      <RightSide>
        <TextRighSide>$30</TextRighSide>
        <TextRighSide>1</TextRighSide>
        <TextRighSide>$30</TextRighSide>
      </RightSide>
    </Container>
  );
};

export default Item;
