import styled from "styled-components";
import { StyledMenuItemProps } from "./types";

export const StyledMenuItemContainer = styled.div<StyledMenuItemProps>`
  position: relative;

  ${({ $isActive, $variant, theme }) =>
    $isActive &&
    $variant === "subMenu" &&
    `
      &:after{
        content: "";
        position: absolute;
        bottom: 0;
        height: 0px;
        width: 100%;
        background-color: ${theme.colors.primary};
        border-radius: 2px 2px 0 0;
      }
    `};
`;

const StyledMenuItem = styled.a<StyledMenuItemProps>`
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  align-items: center;
  padding: 0;
  width: 80px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: ${({ theme }) => theme.colors.buttonBackground};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  margin: 10px;

  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.secondary : theme.colors.textSubtle)};
  font-size: 16px;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
  pointer-events: ${({ $isDisabled }) => ($isDisabled ? "none" : "inherit")};

  ${({ $statusColor, theme }) =>
    $statusColor &&
    `
    &:after {
      content: "";
      border-radius: 8px;
      background: ${theme.colors[$statusColor]};
      height: 8px;
      width: 8px;
      margin-left:12px;
    }
  `}

  ${({ $variant }) =>
    $variant === "default"
      ? `
    padding: 0 12px;
    height: 40px;
  `
      : `
    padding: 4px 4px 0px 4px;
    height: 35px;
  `}

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;

export default StyledMenuItem;
