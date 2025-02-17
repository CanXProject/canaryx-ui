import { ChainId } from '@pancakeswap/aptos-swap-sdk'
import { useNetwork } from '@pancakeswap/awgmi'
import { useIsMounted } from '@pancakeswap/hooks'
import { useTranslation } from '@pancakeswap/localization'
import { Box, Text, UserMenu, UserMenuDivider, UserMenuItem } from '@pancakeswap/uikit'
import { APEX_DOMAIN } from 'config'
import { defaultChain } from 'config/chains'
import Image from 'next/image'
import { aptosLogoClass } from './Logo/CurrencyLogo.css'

const evmChains = [
  { id: 56, name: 'BNB Smart Chain', chainName: 'bsc' },
  { id: 1, name: 'Ethereum', chainName: 'eth' },
]

const NetworkSelect = () => {
  const { t } = useTranslation()

  return (
    <>
      <Box px="16px" py="8px">
        <Text color="textSubtle">{t('Select a Network')}</Text>
      </Box>
      <UserMenuDivider />
      {evmChains.map((chain) => (
        <UserMenuItem
          key={chain.id}
          style={{ justifyContent: 'flex-start' }}
          as="a"
          target="_blank"
          href={`${APEX_DOMAIN}?chain=${chain.chainName}`}
        >
          <Image
            src={`${APEX_DOMAIN}/images/chains/${chain.id}.png`}
            width={20}
            height={20}
            unoptimized
            alt={`chain-${chain.id}`}
          />
          <Text color="text" pl="12px">
            {chain.name}
          </Text>
        </UserMenuItem>
      ))}
    </>
  )
}

export const NetworkSwitcher = () => {
  const network = useNetwork() || defaultChain

  const { chain = defaultChain } = network

  const isMounted = useIsMounted()

  return (
    <UserMenu
      mr="8px"
      variant="default"
      avatarSrc="https://tokens.pancakeswap.finance/images/symbol/apt.png"
      avatarClassName={aptosLogoClass({
        isProduction: isMounted && chain?.id === ChainId.MAINNET,
      })}
      placement="bottom"
      text={
        <>
          <Box display={['none', null, null, null, null, 'block']}>
            {`Aptos${isMounted && chain?.testnet && chain?.name ? ` ${chain?.name}` : ''}`}
          </Box>
          <Box display={['block', null, null, null, null, 'none']}>APT</Box>
        </>
      }
    >
      {() => <NetworkSelect />}
    </UserMenu>
  )
}
