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
  border-radius: 10px;
  max-width: 60%;
  width: 60%;
  z-index: 1;
  animation: ${fadeInAndGrow} 0.6s ease-out;
`

// Styled component for the liquidity page with 70% width
export const LiquidityPageWrapper = styled.div`
  max-width: 60%;
  margin: 0 auto; /* Center the content horizontally */
  /* Add any other specific styles for the liquidity page if needed */
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function LiquidityWrapper({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
