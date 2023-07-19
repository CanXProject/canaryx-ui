import { Box } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledPriceChart = styled(Box)<{
  $isDark: boolean
  $isExpanded: boolean
  $isFullWidthContainer?: boolean
}>`
  border: none;
  border-radius: 32px;
  width: 100%;
  padding-top: 36px;
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 1s ease-out, transform 1s ease-out;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 8px;
    background: ${({ $isDark }) => ($isDark ? '#25252b80' : '#FFFFFF80')};
    border: ${({ theme }) => `1px solid ${theme.colors.cardBorder}`};
    border-radius: ${({ $isExpanded }) => ($isExpanded ? '0' : '8px')};
    width: ${({ $isExpanded, $isFullWidthContainer }) => ($isFullWidthContainer || $isExpanded ? '100%' : '60%')};
    height: ${({ $isExpanded }) => ($isExpanded ? '100%' : '516px')};
  }

  &.loaded {
    opacity: 1;
    transform: translateX(0);
  }
`
StyledPriceChart.defaultProps = {
  height: '70%',
}

