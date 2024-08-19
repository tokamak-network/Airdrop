import React from "react";
import { Container, WalletButton } from "./style";
import { LogoIcon, MobileLogoIcon } from "assets";

export const HeaderComponent: React.FC = () => {
  return (
    <Container>
      <LogoIcon />
      <MobileLogoIcon />
      <WalletButton>Connect Wallet</WalletButton>
    </Container>
  );
};
