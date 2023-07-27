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
    backgroundImage: "linear-gradient(to bottom, #f2f2f2, #c4c4c4)",
    border: "none", // Removed border
    boxShadow: "0 2px 3px 0 rgba(0,0,0,0.35)", // Further reduced spread, increased intensity
    color: "primary",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
    ":hover:not(:disabled)": {
      transform: "translateY(-1px)",
      boxShadow: "0 3px 5px 0 rgba(0,0,0,0.35)", // Reduced spread, intensity remains the same
    },
    ":active:not(:disabled)": {
      transform: "translateY(0)",
      boxShadow: "0 2px 3px 0 rgba(0,0,0,0.35)", // Reduced spread, intensity remains the same
    },
    ":disabled": {
      backgroundColor: "transparent",
      backgroundImage: "none",
      boxShadow: "none",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
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
