import { ReactElement } from "react";
import styled from "styled-components";

const Div = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
});

const SomeLabel = styled.span({
  verticalAlign: "left",
});

const MyCustomInput = styled.input({
  color: "blue",
  border: "none",
});

export const MyInfoField = (props: {
  label: string;
  value: string;
}): ReactElement => (
  <Div>
    <SomeLabel>{props.label}</SomeLabel>
    <MyCustomInput disabled={true} type={"text"} value={props.value} />
  </Div>
);
