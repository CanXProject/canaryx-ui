import styled from 'styled-components'
import { Box } from '@pancakeswap/uikit'

const Card = styled(Box) <{
  width?: string
  padding?: string
  border?: string
  borderRadius?: string
}>`
  width: ${({ width }) => width ?? '100%'};
  padding: ${({ padding }) => padding ?? '1.25rem'};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius ?? '16px'};
  background-color: ${({ theme }) => theme.colors.background};
`
export default Card

export const LightCard = styled(Card)`
color: ${({ theme }) => theme.colors.primary};
background-color: ${({ theme }) => theme.colors.backgroundAlt2};
margin-bottom: 0.5em;
padding: 10px;
text-align: center;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
box-shadow: inset 2px 2px 5px ${({ theme }) => theme.colors.slideShadow}, 
            inset -2px -2px 5px ${({ theme }) => theme.colors.slideBackground1};
border-radius: 6px;
border-left: 4px solid ${({ theme }) => theme.colors.primary};
transition: color 0.3s, transform 0.3s, box-shadow 0.3s;

&:hover {
  color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 1px 1px 2px ${({ theme }) => theme.colors.slideShadow}, 
              -1px -1px 2px ${({ theme }) => theme.colors.slideBackground1};
  transform: scale(1.01);
}
`;

export const LightGreyCard = styled(Card)`
color: ${({ theme }) => theme.colors.primary};
background-color: ${({ theme }) => theme.colors.backgroundAlt2};
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

export const GreyCard = styled(Card)`
color: ${({ theme }) => theme.colors.primary};
background-color: ${({ theme }) => theme.colors.backgroundAlt2};
margin-bottom: 0.5em;
padding: 10px;
text-align: center;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
box-shadow: inset 2px 2px 5px ${({ theme }) => theme.colors.slideShadow}, 
            inset -2px -2px 5px ${({ theme }) => theme.colors.slideBackground1};
border-radius: 6px;
border-left: 4px solid ${({ theme }) => theme.colors.secondary};
transition: color 0.3s, transform 0.3s, box-shadow 0.3s;

&:hover {
  color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 1px 1px 2px ${({ theme }) => theme.colors.slideShadow}, 
              -1px -1px 2px ${({ theme }) => theme.colors.slideBackground1};
  transform: scale(1.01);
}
`;
