import styled from "@emotion/styled";
import React, {
  ChangeEventHandler,
  FC,
  HTMLInputTypeAttribute,
  memo,
} from "react";

type InputType = {
  type: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
  id: string;
};
const InputComponent = styled.input({
  height: "2rem",
  paddingLeft: "5px",
});

const Input: FC<InputType> = ({ type, onChange, id }) => {
  return <InputComponent type={type} onChange={onChange} id={id} />;
};

export default memo(Input);
