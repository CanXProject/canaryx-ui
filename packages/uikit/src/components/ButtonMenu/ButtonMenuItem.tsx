import styled from "styled-components";
import { PolymorphicComponent } from "../../util/polymorphic";
import Button from "../Button/Button";
import { BaseButtonProps, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  background-color: transparent;
  color: ${({ theme, variant }) => (variant === variants.PRIMARY ? theme.colors.primary : theme.colors.background)};
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out, color 0.1s ease-in-out;
  
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
    box-shadow: -20px -20px 60px ${({ theme }) => theme.colors.buttonAlt}, 20px 20px 60px ${({ theme }) => theme.colors.buttonAlt1};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    transform: scale(0.95);
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2);
    background-color:  ${({ theme }) => theme.colors.primary}
  }
`;


const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return <InactiveButton forwardedAs={as} variant={variant} {...props} />;
  }

  return <Button as={as} variant={variant} {...props} />;
};

export default ButtonMenuItem;
