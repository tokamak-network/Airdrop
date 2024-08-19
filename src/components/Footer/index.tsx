import React from "react";
import { Container, Content, SocialLinkBar, RightContent } from "./style";
import {
  TelegramIcon,
  GithubIcon,
  TwitterIcon,
  MediumIcon,
  InstaIcon,
} from "assets";

export const FooterComponent: React.FC = () => {
  return (
    <Container>
      <div>
        <Content $color="#999">Copyright ©2024 </Content>
        <Content $color="#1c1c1c">Tokamak Network</Content>
        <RightContent $color="#999"> All Rights Reserved.</RightContent>
      </div>
      <SocialLinkBar>
        <TelegramIcon />
        <GithubIcon />
        <TwitterIcon />
        <MediumIcon />
        <InstaIcon />
      </SocialLinkBar>
    </Container>
  );
};
