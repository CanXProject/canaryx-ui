import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 1000 976" {...props}>
      <title>Clip-Path: Clip-Path</title>
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
          <path d="M1000 0C1000 128.23 896.03 191.47 767.86 191.47L13.57 191.47C13.57 63.24 117.54 0 245.71 0L1000 0ZM654.37 396.83C654.37 525.06 550.4 588.3 422.22 588.3L0 588.3C0 460.15 103.97 396.83 232.14 396.83L654.37 396.83ZM188.89 943.55C145.71 986.79 75.63 986.79 32.38 943.55C-10.79 900.38 -10.79 830.31 32.38 787.07C75.63 743.9 145.71 743.9 188.89 787.07C232.14 830.31 232.14 900.38 188.89 943.55Z" />
        </clipPath>
      </defs>
      <g id="Clip-Path: Clip-Path" clipPath="url(#cp1)">
        <g id="Clip-Path">
          <g id="Layer">
            <path id="Layer" className="shp0" d="M0 0L1000 0L1000 976L0 976L0 0Z" />
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;