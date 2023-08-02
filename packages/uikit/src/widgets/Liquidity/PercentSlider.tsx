import { useTranslation } from "@pancakeswap/localization";
import { AtomBox } from "@pancakeswap/ui";
import { useCallback } from "react";
import { useDebouncedChangeHandler } from "@pancakeswap/hooks";

import { Button } from "../../components/Button";
import { Slider } from "../../components/Slider";

interface PercentSliderProps {
  onValueChanged: (value: string) => void;
  currentValue: number;
}

export function PercentSlider({ onValueChanged, currentValue }: PercentSliderProps) {
  const { t } = useTranslation();

  const liquidityPercentChangeCallback = useCallback(
    (value: number) => {
      onValueChanged(value.toString());
    },
    [onValueChanged]
  );

  // Check if currentValue is a number, if not set to 0
  const validCurrentValue = Number.isNaN(Number(currentValue)) ? 0 : currentValue;
  const [innerLiquidityPercentage, setInnerLiquidityPercentage] = useDebouncedChangeHandler(
    validCurrentValue,
    liquidityPercentChangeCallback
  );

  const handleChangePercent = useCallback(
    (value: string | number) => {
      // Check if value is a number, if not set to 0
      const validValue = Number.isNaN(Number(value)) ? 0 : Math.ceil(Number(value));
      setInnerLiquidityPercentage(validValue);
    },
    [setInnerLiquidityPercentage]
  );

  // Check if innerLiquidityPercentage is a number, if not set to 0
  const validInnerLiquidityPercentage = Number.isNaN(Number(innerLiquidityPercentage)) ? 0 : innerLiquidityPercentage;
  
  const percentages = ["25", "50", "75", "100"];
  
  return (
    <>
      <Slider
        name="lp-amount"
        min={0}
        max={100}
        value={validInnerLiquidityPercentage}
        valueLabel={validInnerLiquidityPercentage.toString()} // pass current value as valueLabel
        onValueChanged={handleChangePercent}
        mb="16px"
      />
      <AtomBox display="flex" flexWrap="wrap" justifyContent="space-between">
        {percentages.map((percentage) => (
          <Button key={percentage} variant="tertiary" scale="sm" onClick={() => onValueChanged(percentage)} aria-label={`Set to ${percentage}%`}>
            {percentage === "100" ? t("Max") : `${percentage}%`}
          </Button>
        ))}
      </AtomBox>
    </>
  );
}
