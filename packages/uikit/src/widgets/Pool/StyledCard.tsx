import styled from "styled-components";
import { Card } from "../../components";

export const StyledCard = styled(Card)<{ isFinished?: boolean }>`
  min-width: 280px;
  max-width: 100%;
  margin: 0 0 24px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: baseline;
  position: relative;
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? "textDisabled" : "secondary"]};

  background: ${({ theme }) => theme.colors.buttonBackground};
  box-shadow: ${({ theme }) => `inset 5px 5px 15px ${theme.colors.buttonAlt1}, inset -5px -5px 15px ${theme.colors.buttonAlt}`};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  
  &:active {
    transform: scale(0.98);
    box-shadow: ${({ theme }) => `inset 2px 2px 5px ${theme.colors.buttonAlt1}, inset -2px -2px 5px ${theme.colors.buttonAlt}`};
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 350px;
    margin: 0 12px 46px;
  }
`;
