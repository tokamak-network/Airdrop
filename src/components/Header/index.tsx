import React from "react";
import { Container, WalletButton } from "./style";
import { LogoIcon, MobileLogoIcon } from "assets";
import { connectWallet } from "hooks/useWallet";

export const HeaderComponent: React.FC = () => {
  return (
    <Container>
      <LogoIcon />
      <MobileLogoIcon />
      <WalletButton onClick={connectWallet}>Connect Wallet</WalletButton>
    </Container>
  );
};
