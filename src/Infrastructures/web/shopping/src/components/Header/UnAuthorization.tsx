import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { link } from "../../globalStyle/link";

const Item = styled(Link)(link, {});

const UnAuthorization = () => {
  return (
    <>
      <Item to="/">Sign In</Item>
      <Item to="/">Sign Up</Item>
    </>
  );
};

export default UnAuthorization;
