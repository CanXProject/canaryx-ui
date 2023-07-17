import { forwardRef } from "react";
import styled, { keyframes } from "styled-components";
import { space } from "styled-system";
import { WrapperProps } from "./types";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinningRing = styled.div<{ $width: number; $height: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid #6ca9df;
  border-radius: 50%;
  border-top-color: #dab6ff;
  animation: ${spin} 2s linear infinite;
  box-sizing: border-box;
`;

const StyledWrapper = styled.div<{ $width: number; $height: number }>`
  position: relative;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  overflow: hidden;
  z-index: 2000; // New z-index here
 

  &:after {
    content: "";
    display: block;
    padding-top: ${({ $width, $height }) => ($height / $width) * 100}%;
  }

  ${space}
`;

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(({ width, height, ...props }, ref) => {
  return (
    <StyledWrapper ref={ref} $width={width} $height={height} {...props}>
      <SpinningRing $width={width} $height={height} />
      {props.children} 
    </StyledWrapper>
  );
});

export default Wrapper;
