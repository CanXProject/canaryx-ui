import styled, { keyframes } from 'styled-components'
import { Button, ButtonProps } from '@pancakeswap/uikit'
import { useSwitchNetworkLoading } from 'hooks/useSwitchNetworkLoading'
import { useSetAtom } from 'jotai'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { hideWrongNetworkModalAtom } from './NetworkModal'
import Trans from './Trans'

const hoverAnimation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.01);
  }
`

const AnimatedButton = styled(Button)`
  transition: transform 0.2s ease-in-out;

  &:hover {
    animation: ${hoverAnimation} 0.2s ease-in-out forwards;
  }
`

const wrongNetworkProps: ButtonProps = {
  variant: 'danger',
  disabled: false,
  children: <Trans>Wrong Network</Trans>,
}

export const CommitButton = (props: ButtonProps) => {
  const { isWrongNetwork } = useActiveChainId()
  const [switchNetworkLoading] = useSwitchNetworkLoading()
  const setHideWrongNetwork = useSetAtom(hideWrongNetworkModalAtom)

  return (
    <AnimatedButton
      {...props}
      onClick={(e) => {
        if (isWrongNetwork) {
          setHideWrongNetwork(false)
        } else {
          props.onClick?.(e)
        }
      }}
      {...(switchNetworkLoading && { disabled: true })}
      {...(isWrongNetwork && wrongNetworkProps)}
    />
  )
}
