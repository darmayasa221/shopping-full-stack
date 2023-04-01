import React from "react";
import styled from "@emotion/styled";
import Img from "../../assets/img/image.jpg";
import { font } from "../../globalStyle/font";
import { button } from "../../globalStyle/button";

const Card = styled.div({
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
  borderRadius: "5px",
  overflow: "hidden",
});
const Header = styled.div({
  backgroundColor: "#F6F6F6",
});
const Image = styled.img({
  width: "100%",
  height: "245px",
  objectFit: "cover",
});
const Main = styled.div({
  display: "flex",
  justifyContent: "space-between",
});
const Left = styled.div({
  width: "65%",
});
const Right = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});
const ItemTitile = styled.h1(font, {
  fontSize: "1.5rem",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  paddingBottom: "5px",
});
const ItemDescription = styled.p(font, {
  color: "rgba(0, 0, 0, 0.7)",
  fontSize: "14px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});
const ItemPrice = styled.p(font, {
  color: "rgba(0, 0, 0, 0.7)",
  fontSize: "1.5rem",
});

const Button = styled.button(button, {
  padding: "5px",
});

const Item = () => {
  return (
    <Card>
      <Header>
        <Image src={Img} alt="img" />
      </Header>
      <Main>
        <Left>
          <ItemTitile>
            <b>Shoose One</b>
          </ItemTitile>
          <ItemDescription>
            this shoose is the best world nadadadad
          </ItemDescription>
        </Left>
        <Right>
          <ItemPrice>$30</ItemPrice>
          <Button>Add To Bag</Button>
        </Right>
      </Main>
    </Card>
  );
};

export default Item;
