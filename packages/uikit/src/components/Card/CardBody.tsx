import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardBodyProps = SpaceProps;

const CardBody = styled.div<CardBodyProps>`
  ${space}
  min-width: 300px; // Change this to your desired minimum width
  max-width: 100%; // Change this to your desired maximum width

  @media (min-width: 768px) {
    display: block;  // In desktop view, elements will follow the regular block layout
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column; // In mobile view, elements will stack vertically
  }
`;

CardBody.defaultProps = {
  p: "24px",
};

export default CardBody;
