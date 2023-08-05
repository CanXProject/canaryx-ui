import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import Text from "../Text/Text";

import { labelButton, barBackground, barProgress, barDisplay, barSlot,  labelButtonD, barBackgroundD, barProgressD, barDisplayD, barSlotD } from './imageConstants';



interface SliderLabelProps {
  progress: string;
}

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMax: boolean;
}

interface DisabledProp {
  disabled?: boolean;
}

const getCursorStyle = ({ disabled = false }: DisabledProp) => {
  return disabled ? "not-allowed" : "pointer";
};




// SliderLabelContainer is used to hold the label that displays the progress.
export const SliderLabelContainer = styled.div`
  bottom: 0;
  position: absolute;
  left: 0px;
  top: 10px;
  width: calc(100% - 30px);
`;


export const SliderLabel = styled(Text)<SliderLabelProps>`
  bottom: 4px;
  font-size: 12px;
  z-index: 2;
  left: ${({ progress }) => {
    const value = Number(progress.replace('%', ''));
    if (value <= 0) return 'calc(0% - 0px)';
    if (value >= 100) return 'calc(100% - 0px)';
    return `calc(${progress})`;
  }};
  position: absolute;
  top: 15px;
  text-align: center;
  min-width: 35px;
  height: 35px;
  line-height: 24px;
  background: ${({ theme }) => `url(${theme.isDark ? labelButtonD : labelButton})`} no-repeat center center;
  background-size: 35px;
  color: transparent; // Hide the text on the main element
  transition: transform 0.9s ease; // Silky smooth movement
  
 

  & span { // Style for the inner text element
    position: absolute;
    align: center;
    right: 0px;
    top: -26px;
    color: #ffffffff;
    background: ${({ theme }) => `url(${theme.isDark ? barDisplayD : barDisplay})`} no-repeat center center;
    text-align: center;
    font-weight: bold;
    width: 100%;
    height: 87%;
    border-radius: 1px;  
  }
`;



export const BunnySlider = styled.div`
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;
  top: 10px;
`;

// StyledInput represents the actual input slider and its thumb styling.
export const StyledInput = styled.input<StyledInputProps>`
  cursor: ${getCursorStyle}; // Cursor style based on disabled state
  height: 42px;
  position: relative;
  z-index: 3;
position: relative;
::-webkit-slider-thumb {
  appearance: none;
  width: 50px;
  height: 50px;
  background: #6b6b6b00
  +;
  border-radius: 50%;
  top: 10px;
}

::-moz-range-thumb {
  width: 50px;
  height: 50px;
  background: #6b6b6b00;
  border-radius: 50%;
  bottom: 12px;
  top: 5px;
}

::-ms-thumb {
  width: 50px;
  height: 50px;
  background: #6b6b6b00;
  border-radius: 50%;
  bottom: 12px;
  top: 5px;
}
`;


// BarBackground is the static background image of the slider bar.
export const BarBackground = styled.div<{ darkTheme?: boolean }>`
  position: absolute;
  background: ${({ theme }) => `url(${theme.isDark ? barBackgroundD  : barBackground })`} no-repeat center center;
  background-size: contain;
  width: 97%;
  height: 100%;
  z-index: 1; // Below BarProgress to ensure the progress bar is visible
  left: 6px;
  top: 7px;
`;




export const BarProgress = styled.div`
  background: ${({ theme }) => 
    `url(${theme.isDark ? barProgressD : barProgress})`
  } no-repeat left center; // Adjust as needed
  height: 10px;
  max-width: 100%;
  left: 0px;
  position: absolute;
  top: 25px;
  z-index: 2; // Above BarBackground to cover it based on the progress
  width: 100%; // Full width of the slider
`;