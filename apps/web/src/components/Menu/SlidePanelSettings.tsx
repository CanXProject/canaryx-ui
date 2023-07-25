import React from 'react';
import { ChainId } from '@pancakeswap/sdk'
import { useTranslation } from '@pancakeswap/localization'
import { 
  Flex, 
  Text, 
  ThemeSwitcher, 
  QuestionHelper, 
  Toggle 
} from '@pancakeswap/uikit'
import { useActiveChainId } from 'hooks/useActiveChainId'
import useTheme from 'hooks/useTheme'
import { useSubgraphHealthIndicatorManager, useUserUsernameVisibility } from 'state/user/hooks'
import styled from 'styled-components'
import GasSettings from './GlobalSettings/GasSettings'

const SlidePanelSettings: React.FC = () => {
  const [subgraphHealth, setSubgraphHealth] = useSubgraphHealthIndicatorManager()
  const [userUsernameVisibility, setUserUsernameVisibility] = useUserUsernameVisibility()
  const { chainId } = useActiveChainId()
  const { t } = useTranslation()
  const { isDark, setTheme } = useTheme()

  return (
    <Flex pb="24px" flexDirection="column">
      <Text bold textTransform="uppercase" fontSize="18px" color="secondary" mb="24px">
        {t('Global')}
      </Text>
      <Flex justifyContent="space-between" mb="24px">
        <Text>{t('Dark mode')}</Text>
        <ThemeSwitcher isDark={isDark} toggleTheme={() => setTheme(isDark ? 'light' : 'dark')} />
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mb="24px">
        <Flex alignItems="center">
          <Text>{t('Subgraph Health Indicator')}</Text>
          <QuestionHelper
            text={t(
              'Turn on subgraph health indicator all the time. Default is to show the indicator only when the network is delayed',
            )}
            placement="top"
            ml="4px"
          />
        </Flex>
        <Toggle
          id="toggle-subgraph-health-button"
          checked={subgraphHealth}
          scale="md"
          onChange={() => {
            setSubgraphHealth(!subgraphHealth)
          }}
        />
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mb="24px">
        <Flex alignItems="center">
          <Text>{t('Show username')}</Text>
          <QuestionHelper text={t('Shows username of wallet instead of bunnies')} placement="top" ml="4px" />
        </Flex>
        <Toggle
          id="toggle-username-visibility"
          checked={userUsernameVisibility}
          scale="md"
          onChange={() => {
            setUserUsernameVisibility(!userUsernameVisibility)
          }}
        />
      </Flex>
      {chainId === ChainId.BSC && (
        <GasSettings />
      )}
    </Flex>
  );
};

export default SlidePanelSettings;
