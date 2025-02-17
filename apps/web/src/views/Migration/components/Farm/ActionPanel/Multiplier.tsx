import React from 'react'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { Flex, Text, HelpIcon, useTooltip, Link } from '@pancakeswap/uikit'
import { MultiplierProps } from '../Cells/Multiplier'

const Containter = styled(Flex)`
  margin-top: 12px;
  padding: 0;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0 12px;
  }
`

const ReferenceElement = styled.div`
  display: inline-block;
  align-self: center;
`

const MultiplierWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text};
  width: 36px;
  margin-right: 6px;
  align-self: center;
  text-align: right;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-right: 0;
  }
`

const TotalStaked: React.FC<React.PropsWithChildren<MultiplierProps>> = ({ multiplier }) => {
  const { t } = useTranslation()
  const displayMultiplier = multiplier ? multiplier.toLowerCase() : '0x'

  const tooltipContent = (
    <>
      <Text>
        {t(
          'The Multiplier represents the proportion of CANARY rewards each farm receives, as a proportion of the CANARY produced each block.',
        )}
      </Text>
      <Text my="24px">
        {t('For example, if a 1x farm received 1 CANARY per block, a 40x farm would receive 40 CANARY per block.')}
      </Text>
      <Text>
        {t(
          'We have recently rebased multipliers by a factor of 10, this is only a visual change and does not affect the amount of CANARY each farm receives.',
        )}
      </Text>
      
    </>
  )
  const { targetRef, tooltip, tooltipVisible } = useTooltip(tooltipContent, {
    placement: 'top-end',
    tooltipOffset: [20, 10],
  })

  return (
    <Containter justifyContent="space-between">
      <Text>{t('Multiplier')}</Text>
      <Flex>
        <MultiplierWrapper>{displayMultiplier}</MultiplierWrapper>
        <ReferenceElement ref={targetRef}>
          <HelpIcon color="textSubtle" />
        </ReferenceElement>
        {tooltipVisible && tooltip}
      </Flex>
    </Containter>
  )
}

export default TotalStaked
