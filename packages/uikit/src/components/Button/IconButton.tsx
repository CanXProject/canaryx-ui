import styled from "styled-components";
import { PolymorphicComponent } from "../../util/polymorphic";
import Button from "./Button";
import { BaseButtonProps } from "./types";

const IconButton: PolymorphicComponent<BaseButtonProps, "button"> = styled(Button)<BaseButtonProps>`
  padding: 0;
  width: ${({ scale }) => (scale === "sm" ? "32px" : "48px")};
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  background: ${({ theme }) => `linear-gradient(145deg, ${theme.colors.buttonBackground}, ${theme.colors.buttonAlt})`};
  box-shadow: ${({ theme }) => `20px 20px 60px ${theme.colors.buttonAlt}, -20px -20px 60px ${theme.colors.buttonAlt1}`};

  &:active {
  
   
  }

  &:hover {
    background: ${({ theme }) => `linear-gradient(145deg, ${theme.colors.buttonAlt}, ${theme.colors.buttonBackground})`};
    box-shadow: ${({ theme }) => `-20px -20px 60px ${theme.colors.buttonAlt}, 20px 20px 60px ${theme.colors.buttonAlt1}`};
  }
`;

export default IconButton;
