import { FC } from "react";
import styled from "styled-components";

export const Drawer: FC<IDrawer> = ({ children }) => {
  return (
    <Div as="div" test="drawer">
      {children}
    </Div>
  );
};

const Div = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: gray;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 20rem;
  @media ${({ theme }) => theme.screens.md} {
    width: 10rem;
  }
`;
