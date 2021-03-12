import { FC } from "react";
import styled from "styled-components";

export const Loading: FC<{ children?: any; secondary?: boolean }> = ({
  children,
  secondary,
}) => {
  return <LoadingStyled secondary={secondary}>{children}</LoadingStyled>;
};

const LoadingStyled = styled.div`
  margin: 30px auto;
  color: ${({ secondary }) => (secondary ? "black" : "white")};
`;
