import { vars } from "@pancakeswap/ui/css/vars.css";
import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "primary",
    color: "invertedContrast",
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    backgroundImage: `linear-gradient(to bottom, ${vars.colors.buttonBackground1}, ${vars.colors.buttonBackgroundHover})`,
    border: "none",
    boxShadow: `0 2px 3px 0 ${vars.colors.buttonShadow}`,
    color: vars.colors.primary,
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
    ":hover:not(:disabled)": {
      transform: "translateY(-1px)",
      boxShadow: `0 3px 5px 0 ${vars.colors.buttonShadow}`,
    },
    ":active:not(:disabled)": {
      transform: "translateY(0)",
      boxShadow: `0 2px 3px 0 ${vars.colors.buttonShadow}`,
    },
    ":disabled": {
      backgroundColor: "transparent",
      backgroundImage: "none",
      boxShadow: "none",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    color: "primary",
    borderRadius: "5px",
    boxShadow: `inset 3px 4px 7px ${vars.colors.buttonAlt3}, inset -2px -2px 4px 3px ${vars.colors.buttonAlt1}`,
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "backgroundAlt",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
  [variants.LIGHT]: {
    backgroundColor: "input",
    color: "textSubtle",
    boxShadow: "none",
  },
  [variants.BUBBLEGUM]: {
    background: vars.colors.gradientBubblegum,
    color: "textSubtle",
    boxShadow: "none",
  },
};
