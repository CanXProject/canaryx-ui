import { Box, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledSwapContainer = styled(Flex)<{ $isChartExpanded: boolean }>`
  flex-shrink: 0;
  height: fit-content;
  padding: 0 16px;
  transition: all 0.3s ease-in-out;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 0 40px;
  }

  ${({ theme }) => theme.mediaQueries.xxl} {
    ${({ $isChartExpanded }) => ($isChartExpanded ? 'padding: 0 120px' : 'padding: 0 40px')};
  }

  &:hover {
    transform: scale(1.005);
  }
`

export const StyledInputCurrencyWrapper = styled(Box)`
  width: 328px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.005);
  }
`
