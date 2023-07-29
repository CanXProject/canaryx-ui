import { Box } from '@pancakeswap/uikit'
import styled from 'styled-components'

// Defining a styled component that will be exported. The component is using three boolean props.
export const StyledPriceChart = styled(Box) <{
  $isDark: boolean; // Determines if the theme is dark.
  $isExpanded: boolean; // Determines if the box should be expanded or not.
  $isFullWidthContainer?: boolean; // Optional property to determine if the box should occupy full width of the container.
}>`
  border: none; // Removes any border from the box.
  border-radius: 16px; // Rounds the corners of the box.
  width: 100%; // Sets the width of the box to be 100% of its parent container.
  padding-top: 36px; // Adds padding to the top of the box.
  opacity: 1; // Sets the box to be fully visible.
  transform: translateX(-100%); // Moves the box 100% to the left of its original position.
  transition: opacity 1s ease-out, transform 1s ease-out, box-shadow 0.5s ease-out; // Adds a transition effect to opacity, transform and box-shadow properties.


  // Defines the properties of the box when the viewport is wider than the sm (small) breakpoint defined in the theme.
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 20px; // Reduces the top padding.
    background: ${({ $isDark }) => ($isDark ? '#25252b80' : '#FFFFFF80')}; // Sets the background color based on whether the theme is dark.
    border: ${({ theme }) => `0px solid ${theme.colors.cardBorder}`}; // Removes the border again.
    border-radius: ${({ $isExpanded }) => ($isExpanded ? '16px' : '16px')}; // Adjusts the border radius based on whether the box is expanded.
    width: ${({ $isExpanded, $isFullWidthContainer }) => ($isFullWidthContainer || $isExpanded ? '100%' : '60%')}; // Adjusts the width based on whether the box is expanded or should fill the container.
    height: ${({ $isExpanded }) => ($isExpanded ? '100%' : '516px')}; // Adjusts the height based on whether the box is expanded.
    box-shadow: ${({ $isDark, $isExpanded }) =>
    $isExpanded ?
    // If component is in expanded state
    ($isDark ?
      // If dark theme is active, remove shadows
      'inset 8px 8px 16px #ffffff00, inset -8px -8px 16px #ffffff00' :
      // If light theme is active, remove shadows
      '12px 12px 24px #ffffff00, -8px -8px 16px #ffffff00') :
    // If component is not in expanded state
    ($isDark ?
      // If dark theme is active, adjust these shadow colors
      '12px 12px 24px rgba(21,21,21), -8px -8px 16px rgba(81,80,87)' :
      // If light theme is active, adjust these shadow colors
      '12px 12px 24px rgba(0, 0, 0, 0.3), -8px -8px 16px rgba(255, 255, 255, 0.48)')
};


    transition: box-shadow 0.5s ease-out, transform 0.5s ease-out; // Changes the transition effect for box-shadow and transform properties.
  }

  // Adds an effect on hover to the box when it has the 'loaded' class.
  &.loaded:hover {
    transform: scale(1.01); // Scales the box slightly.
    transition: transform 0.5s ease-in; // Adds a transition effect to box-shadow and transform properties on hover.
  }

  // Defines properties of the box when it is not hovered and it has the 'loaded' class.
  &.loaded:not(:hover) {
    opacity: 1; // Sets the box to be fully visible.
    transform: translateX(0); // Returns the box to its original position.
  }
`

// Defines default props for the StyledPriceChart component.
StyledPriceChart.defaultProps = {
  height: '70%', // If the height prop is not provided, it will default to '70%'.
}