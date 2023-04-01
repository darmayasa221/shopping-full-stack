import React from "react";
import styled from "@emotion/styled";
import Item from "../components/Item/Item";

const Container = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3,245px)",
  gridAutoRows: "325px",
  gap: "1rem",
  "@media (min-width: 1010px) ": {
    gridTemplateColumns: "repeat(4,245px)",
  },
});

export const Home = () => {
  return (
    <Container>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Container>
  );
};
