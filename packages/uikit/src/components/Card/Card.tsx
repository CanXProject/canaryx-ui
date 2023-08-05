import styled from 'styled-components'
import { Box } from '@pancakeswap/uikit'
import React from "react";
import { StyledCard, StyledCardInner } from "./StyledCard";
import { CardProps } from "./types";

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({ ribbon, children, background, ...props }) => {
  return (
    <StyledCard {...props}>
      <StyledCardInner background={background} hasCustomBorder={!!props.borderBackground}>
        {ribbon}
        {children}
      </StyledCardInner>
    </StyledCard>
  );
};
export default Card;

export const LightGreyCard = styled(Card)`
color: ${({ theme }) => theme.colors.primary};
background-color: ${({ theme }) => theme.colors.backgroundAlt};
margin-bottom: 0.5em;
padding: 10px;
text-align: center;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
box-shadow: inset 2px 2px 5px ${({ theme }) => theme.colors.slideShadow}, 
            inset -2px -2px 5px ${({ theme }) => theme.colors.slideBackground1};
border-radius: 6px;
border-left: 4px solid ${({ theme }) => theme.colors.secondary80};
transition: color 0.3s, transform 0.3s, box-shadow 0.3s;

&:hover {
  color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 1px 1px 2px ${({ theme }) => theme.colors.slideShadow}, 
              -1px -1px 2px ${({ theme }) => theme.colors.slideBackground1};
  transform: scale(1.01);
}
`;

