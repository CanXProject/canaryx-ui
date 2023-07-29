import styled, { keyframes } from 'styled-components'
import { Card } from '@pancakeswap/uikit'

const fadeInAndGrow = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const BodyWrapper = styled(Card)`
  border-radius: 16px;
  margin-top:50px;
  margin-bottom:50px;
  max-width: 60%;
  width: 60%;
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

  z-index: 1;
  animation: ${fadeInAndGrow} 0.6s ease-out;

  /* Set width to 100% on small screens */
  @media (max-width: 768px) { /* 768px is a common breakpoint for tablets and smaller devices */
    max-width: 100%;
    width: 100%;
  }
`

// Styled component for the liquidity page with 70% width
export const LiquidityPageWrapper = styled.div`
  max-width: 60%;
  margin: 0 auto; /* Center the content horizontally */
  /* Add any other specific styles for the liquidity page if needed */

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function LiquidityWrapper({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
