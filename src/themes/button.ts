import styled from "styled-components";

export const Button = styled.button`
  background-color: red;
  color: white;
  border-radius: 10px;
  padding: ${(props) => props.theme.maxPadding};
  margin: ${(props) => props.theme.maxPadding};
`;
