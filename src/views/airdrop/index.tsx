import React, { useEffect, useState } from "react";
import { Container, Label, Description } from "./style";
import {
  PortfolioBar,
  ToggleButton,
  ClaimTable,
  ClaimModal,
  DistributeModal,
  DistributeTable,
} from "components";
import { DistributedTokens } from "components/DistributedTokens";
import { ToTopButton } from "components/ToTopButton";
import { PortfolioType } from "types";
import { getGlobalState } from "store";
import {
  getStakedTONBalance,
  getStakedTOSBalance,
  getSTOSBalance,
} from "utils";
import {
  DEPLOYED_ADDRESS,
  LockTOS_ADDRESS,
  SeigManager_ADDRESS,
  StakingV2Proxy_ADDRESS,
} from "consts";
import * as SeigManagerABI from "services/abis/SeigManager.json";
import * as StakingV2ProxyABI from "services/abis/StakingV2Proxy.json";
import * as LockTOSABI from "services/abis/LockTOS.json";
import * as TONABI from "services/abis/TestERC20.json";

const { TON_ADDRESS } = DEPLOYED_ADDRESS;

export const AirDropView: React.FC = () => {
  const account = getGlobalState("connectedAccount");
  const [toggle, setToggle] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [portfolio, setPortfolio] = useState<PortfolioType>({
    address: "-",
    stakedTON: 0,
    stakedTOS: 0,
    sTOS: 0,
  });

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // get staked TON balance
  useEffect(() => {
    const getUserStakedTONBalance = async () => {
      const amount = await getStakedTONBalance(TON_ADDRESS, SeigManagerABI.abi);
      if (amount !== undefined) {
        setPortfolio({ ...portfolio, stakedTON: amount });
      }
    };
    if (portfolio.address) {
      getUserStakedTONBalance();
    }
  }, []);

  // get staked TOS balance
  useEffect(() => {
    const getUserStakedTOSBalance = async () => {
      const amount = await getStakedTOSBalance(
        StakingV2Proxy_ADDRESS,
        StakingV2ProxyABI.abi
      );
      if (amount !== undefined) {
        setPortfolio({ ...portfolio, stakedTOS: amount });
      }
    };
    if (portfolio.address) {
      getUserStakedTOSBalance();
    }
  }, [account]);

  // get sTOS balance
  useEffect(() => {
    const getUserSTOSBalance = async () => {
      const amount = await getSTOSBalance(LockTOS_ADDRESS, LockTOSABI.abi);
      await setPortfolio({ ...portfolio, sTOS: amount });
    };
    if (portfolio.address) {
      getUserSTOSBalance();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <ToTopButton onClick={scrollToTop} display={isVisible} />

      <Label>AirDrop</Label>
      <Description>You can claim and distribute airdrop tokens</Description>
      <PortfolioBar portfolio={portfolio} />
      <ToggleButton status={toggle} changeStatus={setToggle} />
      {toggle ? <ClaimTable /> : <DistributeTable />}
      <DistributedTokens />
    </Container>
  );
};
