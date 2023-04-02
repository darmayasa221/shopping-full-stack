import styled from "@emotion/styled";
import React, { FC, memo } from "react";

type LabelType = {
  htmlfor: string;
  text: string;
};
const LabelComponent = styled.label({});
const Label: FC<LabelType> = ({ htmlfor, text }) => {
  return <LabelComponent htmlFor={htmlfor}>{text}</LabelComponent>;
};

export default memo(Label);
