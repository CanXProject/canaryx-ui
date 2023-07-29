import styled from "styled-components";
import { Card } from "../../components";

export const StyledCard = styled(Card) <{ isFinished?: boolean }>`
  min-width: 280px;
  max-width: 100%;
  
  margin: 0 0 24px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: baseline;
  position: relative;

  border-radius: 16px;
  border: 0px;
  opacity: 1;
  box-shadow: ${({ theme }) => theme.isDark ? '12px 12px 24px rgba(21,21,21,0.3), -8px -8px 16px rgba(81,80,87,0.7)' : '12px 12px 24px rgba(0, 0, 0, 0.3), -8px -8px 16px rgba(255, 255, 255, 0.48)'};
  transition: all 0.3s ease-in-out, box-shadow 0.5s ease-out;
  background: ${({ theme }) => theme.isDark ? '#25252b80' : '#FFFFFF80'};
  
  &:hover {
    transform: scale(1.01);
    transition: transform 0.5s ease-in;
  }

  &.loaded:not(:hover) {
    opacity: 1;
    transform: translateX(0);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: ${({ theme }) => `inset 2px 2px 5px ${theme.colors.buttonAlt1}, inset -2px -2px 5px ${theme.colors.buttonAlt}`};
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 350px;
    margin: 0 12px 46px;
  }
`;
