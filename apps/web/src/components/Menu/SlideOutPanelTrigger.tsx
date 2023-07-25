import React from 'react'
import { IconButton, CogIcon } from '@pancakeswap/uikit'
import styled, { keyframes } from 'styled-components';

type SlideOutPanelTriggerProps = {
  color?: string
  mr?: string
  onClick: () => void
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


const IconButtonStyled = styled(IconButton).attrs({
    className: 'custom-icon-button'
  })`
    &.custom-icon-button {
      background-color: ${props => props.theme.colors.primary}; // Background color from theme
      transition: background-color 0.3s ease;
      height:48px;
      width:48px;
      border-radius: 6px 0px 0px 6px;
    }
    
    &.custom-icon-button:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  `;

const SpinningCogIcon = styled(CogIcon)`
  animation: ${spin} 2s linear infinite;
  
`;

const SlideOutPanelTrigger: React.FC<SlideOutPanelTriggerProps> = ({ color = 'white', mr = '8px', onClick }) => {
    return (
        <IconButtonStyled 
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }} 
          variant="text" 
          scale="sm" 
          mr={mr} 
          id="open-settings-dialog-button"
        >
          <SpinningCogIcon height={30} width={30} color={color} />
        </IconButtonStyled>
      )
    }

export default SlideOutPanelTrigger
