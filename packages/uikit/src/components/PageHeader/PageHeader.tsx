import styled, { keyframes } from 'styled-components';
import { Box } from '../Box';
import Container from '../Layouts/Container';
import { PageHeaderProps } from './types';

// Define the animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const Outer = styled(Box)<{ background?: string }>`
  background: ${({ theme, background }) => background || theme.colors.gradientBubblegum};
  animation: ${fadeIn} 2s ease-in-out;
`

const Inner = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
  position: relative;
`
const PageHeader: React.FC<React.PropsWithChildren<PageHeaderProps>> = ({ background, children, ...props }) => (
  <Outer background={background} {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default PageHeader;
