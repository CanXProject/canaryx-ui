import { useTranslation } from "@pancakeswap/localization";
import { ReactElement } from "react";
import styled, { keyframes } from 'styled-components';
import { Flex } from "../../components/Box";
import { CardBody, CardRibbon, LightGreyCard } from "../../components/Card";
import { Skeleton } from "../../components/Skeleton";
import { PoolCardHeader, PoolCardHeaderTitle } from "./PoolCardHeader";
import { StyledCard } from "./StyledCard";
import { DeserializedPool } from "./types";

const fadeInAndGrow = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`
const FooterWrapper = styled.div`
  padding: 6px 0;
`;
const AnimatedStyledCard = styled(StyledCard)`
  animation: ${fadeInAndGrow} 1s ease-out;
  border-radius: 16px;
  margin-top:50px;
  margin-bottom:50px;
  border: 0px;
  opacity: 1;
  box-shadow: ${({ theme }) => theme.isDark ? '12px 12px 24px rgba(21,21,21,0.3), -8px -8px 16px rgba(81,80,87,0.7)' : '12px 12px 24px rgba(0, 0, 0, 0.3), -8px -8px 16px rgba(255, 255, 255, 0.48)'};
  transition: all 0.3s ease-in-out, box-shadow 0.5s ease-out;
  background: ${({ theme }) => theme.isDark ? '#25252b80' : '#FFFFFF80'};
  
  &:hover {
    transform: scale(1.01);
    transition: transform 0.5s ease-in;
  }

  &.loaded:not(:hover) {
    opacity: 1;
    transform: translateX(0);
  }
`


interface PoolCardPropsType<T> {
  pool: DeserializedPool<T>;
  cardContent: ReactElement;
  aprRow: ReactElement;
  cardFooter: ReactElement;
  tokenPairImage: ReactElement;
  isStaked: boolean;
}

export function PoolCard<T>({ pool, cardContent, aprRow, isStaked, cardFooter, tokenPairImage }: PoolCardPropsType<T>) {
  const { sousId, stakingToken, earningToken, isFinished, totalStaked } = pool;
  const { t } = useTranslation();

  const isCakePool = earningToken?.symbol === "CANARY" && stakingToken?.symbol === "CANARY";

  return (
    <AnimatedStyledCard
      isActive={isCakePool}
      isFinished={isFinished && sousId !== 0}
      ribbon={isFinished && <CardRibbon variantColor="textDisabled" text={t("Finished")} />}
    >
      <PoolCardHeader isStaking={isStaked} isFinished={isFinished && sousId !== 0}>
        {totalStaked && totalStaked.gte(0) ? (
          <>
            <PoolCardHeaderTitle
              title={isCakePool ? t("Manual") : t("Earn %asset%", { asset: earningToken?.symbol || "" })}
              subTitle={
                isCakePool ? "Earn CANARY, stake CANARY" : t("Stake %symbol%", { symbol: stakingToken?.symbol || "" })
              }
            />
            {tokenPairImage}
          </>
        ) : (
          <Flex width="100%" justifyContent="space-between">
            <Flex flexDirection="column">
              <Skeleton width={100} height={26} mb="4px" />
              <Skeleton width={65} height={20} />
            </Flex>
            <Skeleton width={58} height={58} variant="circle" />
          </Flex>
        )}
      </PoolCardHeader>
      <CardBody>
        <LightGreyCard>
          {aprRow}
        </LightGreyCard>
        <Flex mt="3px" flexDirection="column">
          {cardContent}
        </Flex>
      </CardBody>
      <FooterWrapper>{cardFooter}</FooterWrapper>
    </AnimatedStyledCard>
  );
}
