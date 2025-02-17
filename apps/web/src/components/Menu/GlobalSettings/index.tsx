import { Flex, IconButton, CogIcon, useModal } from '@pancakeswap/uikit'
import styled, { keyframes } from 'styled-components';
import SettingsModal from './SettingsModal'

type Props = {
  color?: string
  mr?: string
  mode?: string
  shouldSpin?: boolean
}

// Define keyframes for spinning animation
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Define spinning icon using styled-components
const SpinningCogIcon = styled(CogIcon)`
  animation: ${spin} 2s linear infinite;
`;

const GlobalSettings = ({ color, mr = '8px', mode, shouldSpin = false }: Props) => {
  const [onPresentSettingsModal] = useModal(<SettingsModal mode={mode} />)

  const renderCogIcon = () => {
    if (shouldSpin) {
      // Render spinning icon if shouldSpin is true
      return <SpinningCogIcon height={24} width={24} color={color || 'settings'} />
    } 
      // Render normal icon for other cases
      return <CogIcon height={24} width={24} color={color || 'settings'} />
    
  }

  return (
    <Flex>
      <IconButton
        onClick={onPresentSettingsModal}
        variant="text"
        scale="sm"
        mr={mr}
        id={`open-settings-dialog-button-${mode}`}
      >
        {renderCogIcon()}
      </IconButton>
    </Flex>
  )
}

export default GlobalSettings
