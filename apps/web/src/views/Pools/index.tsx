import styled from 'styled-components'

import { useAccount } from 'wagmi'
import { Heading, Flex, Image, useTooltip, InfoIcon, Text, Link, FlexLayout, PageHeader, Loading, Pool, ViewMode } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { usePoolsPageFetch, usePoolsWithVault } from 'state/pools/hooks'
import Page from 'components/Layout/Page'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { Token } from '@pancakeswap/sdk'
import { TokenPairImage } from 'components/TokenImage'

import CardActions from './components/PoolCard/CardActions'
import AprRow from './components/PoolCard/AprRow'
import CardFooter from './components/PoolCard/CardFooter'
import CakeVaultCard from './components/CakeVaultCard'
import PoolControls from './components/PoolControls'
import PoolRow, { VaultPoolRow } from './components/PoolsTable/PoolRow'

const CardLayout = styled(FlexLayout)`
  justify-content: center;
`

const FinishedTextContainer = styled(Flex)`
  padding-bottom: 32px;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`

const FinishedTextLink = styled(Link)`
  font-weight: 400;
  white-space: nowrap;
  text-decoration: underline;
`


const Pools: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()
  const { address: account } = useAccount()
  const { pools, userDataLoaded } = usePoolsWithVault()

  usePoolsPageFetch()

  return (
    <>
      <PageHeader>
        <Flex justifyContent="space-between" flexDirection={['column', null, null, 'row']}>
          <Flex flex="1" flexDirection="column" mr={['8px', 0]}>
            <Heading as="h1" scale="xxl" color="secondary" mb="24px">
              Staking Pools
            </Heading>
            <Heading scale="md" color="text">
              {t('Discover High APR, Low-Risk Staking - Stake Your Tokens,')}
            </Heading>
            <Heading scale="md" color="text">
              {t('Reap the Sweet Rewards!')}
            </Heading>
          </Flex>
        </Flex>
      </PageHeader>
      <Page>
        <PoolControls pools={pools}>
          {({ chosenPools, viewMode, stakedOnly, normalizedUrlSearch, showFinishedPools }) => (
        
            <>
      
              {account && !userDataLoaded && stakedOnly && (
                <Flex justifyContent="center" mb="4px">
                  <Loading />
                </Flex>
              )}

<CardLayout>
                {chosenPools.map((pool) => {
                  console.log("chossedne",pool)
                  if (pool.vaultKey) {
                    return <CakeVaultCard key={pool.vaultKey} pool={pool} showStakedOnly={stakedOnly} />
                  } 
                  return    <Pool.PoolCard<Token>
                  key={pool.sousId}
                  pool={pool}
                  isStaked={Boolean(pool?.userData?.stakedBalance?.gt(0))}
                  cardContent={
                    account ? (
                      <CardActions pool={pool} stakedBalance={pool?.userData?.stakedBalance} />
                    ) : (
                      <>
                        <Text mb="10px" textTransform="uppercase" fontSize="12px" color="textSubtle" bold>
                          {t('Start earning')}
                        </Text>
                        <ConnectWalletButton />
                      </>
                    )
                  }
                  tokenPairImage={
                    <TokenPairImage
                      primaryToken={pool.earningToken}
                      secondaryToken={pool.stakingToken}
                      width={64}
                      height={64}
                    />
                  }
                  cardFooter={<CardFooter pool={pool} account={account} />}
                  aprRow={<AprRow pool={pool} stakedBalance={pool?.userData?.stakedBalance} />}
                />
              
                })}
                </CardLayout>

              {/* {viewMode === ViewMode.CARD ? (
                <CardLayout>
                  {chosenPools.map((pool) =>
                     <Pool.PoolCard<Token>
                     key={pool.sousId}
                     pool={pool}
                     isStaked={Boolean(pool?.userData?.stakedBalance?.gt(0))}
                     cardContent={
                       account ? (
                         <CardActions pool={pool} stakedBalance={pool?.userData?.stakedBalance} />
                       ) : (
                         <>
                           <Text mb="10px" textTransform="uppercase" fontSize="12px" color="textSubtle" bold>
                             {t('Start earning')}
                           </Text>
                           <ConnectWalletButton />
                         </>
                       )
                     }
                     tokenPairImage={
                       <TokenPairImage
                         primaryToken={pool.earningToken}
                         secondaryToken={pool.stakingToken}
                         width={64}
                         height={64}
                       />
                     }
                     cardFooter={<CardFooter pool={pool} account={account} />}
                     aprRow={<AprRow pool={pool} stakedBalance={pool?.userData?.stakedBalance} />}
                   />
                  )}
                </CardLayout>
              ) : (
                <Pool.PoolsTable>
                  {chosenPools.map((pool) =>
                    pool.vaultKey ? (
                      <VaultPoolRow
                        initialActivity={normalizedUrlSearch.toLowerCase() === pool.earningToken.symbol?.toLowerCase()}
                        key={pool.vaultKey}
                        vaultKey={pool.vaultKey}
                        account={account}
                      />
                    ) : (
                      <PoolRow
                        initialActivity={normalizedUrlSearch.toLowerCase() === pool.earningToken.symbol?.toLowerCase()}
                        key={pool.sousId}
                        sousId={pool.sousId}
                        account={account}
                      />
                    ),
                  )}
                </Pool.PoolsTable>
              )} */}





              {/* <Image
                mx="auto"
                mt="12px"
                src="/images/decorations/3d-syrup-bunnies.png"
                alt="Pancake illustration"
                width={192}
                height={184.5}
              /> */}
            </>
          )}
        </PoolControls>
      </Page>
    </>
  )
}

export default Pools
