import styled from "styled-components";

export const Button = styled.button`
  background-color: red;
  color: ${(props) => props.theme.color?.warning || "white"};
  border-radius: 10px;
  padding: ${(props) => props.theme.maxPadding};
  margin: ${(props) => props.theme.maxPadding};

  &:hover {
    cursor: pointer;
  }
`;
export const SquareSt = styled.div`
  width: 300px;
  height: 300px;
  background: ${(props) => props.color};
`;
