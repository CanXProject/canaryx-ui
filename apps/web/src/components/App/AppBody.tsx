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
  max-width: 70%;
  width: 100%;
  z-index: 1;
  animation: ${fadeInAndGrow} 0.6s ease-out;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
