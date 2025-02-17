import { useRef, useMemo } from 'react'
import styled, { keyframes } from 'styled-components';
import { RowType, DesktopColumnSchema } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import { getBalanceNumber } from '@pancakeswap/utils/formatBalance'
import latinise from '@pancakeswap/utils/latinise'
import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import { useRouter } from 'next/router'
import { FarmWithStakedValue } from '@pancakeswap/farms'
import { getDisplayApr } from '../getDisplayApr'

import Row, { RowProps } from './Row'
import ProxyFarmContainer from '../YieldBooster/components/ProxyFarmContainer'

export interface ITableProps {
  farms: FarmWithStakedValue[]
  userDataReady: boolean
  cakePrice: BigNumber
  sortColumn?: string
}

const fadeInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.card.background};
  border-radius: 16px;
  margin: 16px 0px;
  border: 0px solid ${({ theme }) => theme.colors.cardBorder};
  animation: ${fadeInFromBottom} 1.5s ease-out;
  box-shadow:  5px 11px 90px -36px ${({ theme }) => theme.colors.shadow};  // outer shadow giving a recessed effect
`

const TableWrapper = styled.div`
  overflow: visible;
  scroll-margin-top: 64px;

  &::-webkit-scrollbar {
    display: none;
  }
`

const StyledTable = styled.table`
  border-collapse: collapse;
  font-size: 14px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  border-radius: 16px;
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
`
  


const TableBody = styled.tbody`
  & tr {
    td {
      font-size: 16px;
      vertical-align: middle;
    }

    :last-child {
      td[colspan='7'] {
        > div {
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
        }
      }
    }
  }
`
const TableContainer = styled.div`
  position: relative;
`

const FarmTable: React.FC<React.PropsWithChildren<ITableProps>> = ({ farms, cakePrice, userDataReady }) => {
  const tableWrapperEl = useRef<HTMLDivElement>(null)
  const { query } = useRouter()

  const columns = useMemo(
    () =>
      DesktopColumnSchema.map((column) => ({
        id: column.id,
        name: column.name,
        label: column.label,
        sort: (a: RowType<RowProps>, b: RowType<RowProps>) => {
          switch (column.name) {
            case 'farm':
              return b.id - a.id
            case 'apr':
              if (a.original.apr.value && b.original.apr.value) {
                return Number(a.original.apr.value) - Number(b.original.apr.value)
              }

              return 0
            case 'earned':
              return a.original.earned.earnings - b.original.earned.earnings
            default:
              return 1
          }
        },
        sortable: column.sortable,
      })),
    [],
  )

  const getFarmEarnings = (farm) => {
    let earnings = BIG_ZERO
    const existingEarnings = new BigNumber(farm.userData.earnings)

    if (farm.boosted) {
      const proxyEarnings = new BigNumber(farm.userData?.proxy?.earnings)

      earnings = proxyEarnings.gt(0) ? proxyEarnings : existingEarnings
    } else {
      earnings = existingEarnings
    }

    return getBalanceNumber(earnings)
  }

  const generateRow = (farm) => {
    const { token, quoteToken } = farm
    const tokenAddress = token.address
    const quoteTokenAddress = quoteToken.address
    const lpLabel = farm.lpSymbol && farm.lpSymbol.replace(/pancake/gi, '')
    const lowercaseQuery = latinise(typeof query?.search === 'string' ? query.search.toLowerCase() : '')
    const initialActivity = latinise(lpLabel?.toLowerCase()) === lowercaseQuery
    const row: RowProps = {
      apr: {
        value: getDisplayApr(farm.apr, farm.lpRewardsApr),
        pid: farm.pid,
        multiplier: farm.multiplier,
        lpLabel,
        lpSymbol: farm.lpSymbol,
        lpTokenPrice: farm.lpTokenPrice,
        tokenAddress,
        quoteTokenAddress,
        cakePrice,
        lpRewardsApr: farm.lpRewardsApr,
        originalValue: farm.apr,
        stableSwapAddress: farm.stableSwapAddress,
        stableLpFee: farm.stableLpFee,
      },
      farm: {
        label: lpLabel,
        pid: farm.pid,
        token: farm.token,
        quoteToken: farm.quoteToken,
        isReady: farm.multiplier !== undefined,
        isStable: farm.isStable,
        isBoosted: farm.boosted,
      },
      earned: {
        earnings: getFarmEarnings(farm),
        pid: farm.pid,
      },
      liquidity: {
        liquidity: farm?.liquidity,
      },
      multiplier: {
        multiplier: farm.multiplier,
      },
      type: farm.isCommunity ? 'community' : 'core',
      details: farm,
      initialActivity,
    }

    return row
  }

  const rowData = farms.map((farm) => generateRow(farm))

  const generateSortedRow = (row) => {
    // @ts-ignore
    const newRow: RowProps = {}
    columns.forEach((column) => {
      if (!(column.name in row)) {
        throw new Error(`Invalid row data, ${column.name} not found`)
      }
      newRow[column.name] = row[column.name]
    })
    newRow.initialActivity = row.initialActivity
    return newRow
  }

  const sortedRows = rowData.map(generateSortedRow)

  return (
    <Container id="farms-table">
      <TableContainer id="table-container">
        <TableWrapper ref={tableWrapperEl}>
          <StyledTable>
            <TableBody>
              {sortedRows.map((row) => {
                return row?.details?.boosted ? (
                  <ProxyFarmContainer key={`table-row-${row.farm.pid}`} farm={row.details}>
                    <Row {...row} userDataReady={userDataReady} />
                  </ProxyFarmContainer>
                ) : (
                  <Row {...row} userDataReady={userDataReady} key={`table-row-${row.farm.pid}`} />
                )
              })}
            </TableBody>
          </StyledTable>
        </TableWrapper>
      </TableContainer>
    </Container>
  )
}

export default FarmTable
