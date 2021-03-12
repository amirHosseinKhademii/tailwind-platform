import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

export const Test = () => {
  const count = useSelector((state: { count: number }) => state.count);
  const dispatch = useDispatch();

  return (
    <Div>
      <Button secondary>Secondary</Button>
      <Button onClick={() => dispatch({ type: "INC" })}>{count}</Button>
      <Link>Test</Link>
    </Div>
  );
};

const Div = styled.div`
  margin: 0 auto;
  width: 400px;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: ${({ secondary, theme }) =>
    secondary ? theme.colors.crims : "blue"};
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  margin-top: 10px;
  &:hover {
    opacity: 0.5;
  }
  &::focus {
    outline: none;
  }
  ${Div}:hover & {
    color: yellowgreen;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      color: green;
    `}
  @media ${({ theme }) => theme.screens.sm} {
    color: black;
  }
`;

const Link = styled.a.attrs((props) => ({ target: "_blank" }))`
  color: red;
`;
