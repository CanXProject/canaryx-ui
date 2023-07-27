import React, { cloneElement, Children, ReactElement } from "react";
import styled from "styled-components";
import { NotificationDotProps, DotProps } from "./types";

const NotificationDotRoot = styled.span`
  display: inline-flex;
  position: relative;
`;

const Dot = styled.span<DotProps>`
  display: ${({ show }) => (show ? "inline-flex" : "none")};
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  pointer-events: none;
  border: 2px solid ${({ theme }) => theme.colors.invertedContrast};
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, ${({ theme, color }) => theme.colors[color]} 0%, ${({ theme }) => theme.colors.invertedContrast} 100%);
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
  transform: ${({ show }) => show ? "scale(1)" : "scale(0.1)"};
  transition: transform 0.3s ease-out;
`;

const NotificationDot: React.FC<React.PropsWithChildren<NotificationDotProps>> = ({
  show = false,
  color = "failure",
  children,
  ...props
}) => (
  <NotificationDotRoot>
    {Children.map(children, (child: ReactElement) => cloneElement(child, props))}
    <Dot show={show} color={color} />
  </NotificationDotRoot>
);

export default NotificationDot;
