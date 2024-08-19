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

const portfolio = {
  address: "0x9B21…d938",
  stakedTON: 1000,
  stakedTOS: 1000,
  TOS: 2.35,
};

export const AirDropView: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [claimShow, setClaimShow] = useState<boolean>(true);
  const [distributeShow, setDistributeShow] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <ToTopButton onClick={scrollToTop} display={isVisible} />
      {claimShow || <ClaimModal onClose={() => setClaimShow(true)} />}
      {distributeShow || (
        <DistributeModal onClose={() => setDistributeShow(true)} />
      )}
      <Label>AirDrop</Label>
      <Description>You can claim and distribute airdrop tokens</Description>
      <PortfolioBar portfolio={portfolio} />
      <ToggleButton status={toggle} changeStatus={setToggle} />
      {toggle ? (
        <ClaimTable confirmClaim={() => setClaimShow(false)} />
      ) : (
        <DistributeTable confirmDistribute={() => setDistributeShow(false)} />
      )}
      <DistributedTokens />
    </Container>
  );
};
