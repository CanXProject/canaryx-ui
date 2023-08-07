import styled from "styled-components";
import { m as Motion } from "framer-motion";


export const Arrow = styled.div`
  &, &::before {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    z-index: -1;
  }

  &::before {
    content: "";
    transform: rotate(45deg);
    background: ${({ theme }) => theme.colors.backgroundAlt}; /* Arrow color from theme */
  
  }
`;

export const StyledTooltip = styled(Motion.div)`
  position: relative;
  padding: 16px;
  font-size: 16px;
  line-height: 130%;
  border-radius: 5px;
  max-width: 320px;
  z-index: 101;
  background:  ${({ theme }) => theme.colors.backgroundAlt}; /* Shiny glass effect using gradient */
  color: ${({ theme }) => theme.colors.text}; /* Text color from theme */
  box-shadow:
    inset -2px -2px 4px ${({ theme }) => theme.colors.slideShadow}, /* Inset shadow for shiny reflection */
    inset 2px 2px 4px ${({ theme }) => theme.colors.shadow}; /* Soft outer shadow */


  /* Define arrow positions based on placement */
  &[data-popper-placement^="top"] > ${Arrow} {
    bottom: -4px;
  }

  &[data-popper-placement^="bottom"] > ${Arrow} {
    top: -4px;
  }

  &[data-popper-placement^="left"] > ${Arrow} {
    right: -4px;
  }

  &[data-popper-placement^="right"] > ${Arrow} {
    left: -4px;
  }
`;
