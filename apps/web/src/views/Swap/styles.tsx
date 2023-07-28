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
    padding: ${({ $isChartExpanded }) => ($isChartExpanded ? '0 120px' : '0 40px')};
  }

  &:hover {
    transform: scale(1.01);
  }
`

export const StyledInputCurrencyWrapper = styled(Box)`
  width: 328px;
  border: 0px;
  border-radius: 16px;
  opacity: 1;
  box-shadow: ${({ theme }) => theme.isDark ? '12px 12px 24px rgba(21,21,21,0.3), -8px -8px 16px rgba(81,80,87,0.7)' : '12px 12px 24px rgba(0, 0, 0, 0.3), -8px -8px 16px rgba(255, 255, 255, 1)'};
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
`
