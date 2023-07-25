import React from 'react'
import { IconButton, MoreIcon } from '@pancakeswap/uikit'
import styled from 'styled-components';

type SlideOutTriggerNotesProps = {
  color?: string
  mr?: string
  onClick: () => void
}



const IconButtonStyled = styled(IconButton).attrs({
    className: 'custom-icon-button'
  })`
    &.custom-icon-button {
      background-color: ${props => props.theme.colors.secondary80}; // Background color from theme
      transition: background-color 0.3s ease;
      height:48px;
      width:48px;
      border-radius: 6px 0px 0px 6px;
    }
    
    &.custom-icon-button:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  `;

const StyledMoreIcon = styled(MoreIcon)`
  
`;

const SlideOutTriggerNotes: React.FC<SlideOutTriggerNotesProps> = ({ color = 'white', mr = '8px', onClick }) => {
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
          <StyledMoreIcon height={30} width={30} color={color} />
        </IconButtonStyled>
      )
    }

export default SlideOutTriggerNotes
