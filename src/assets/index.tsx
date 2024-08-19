import React from "react";
import { Icon, StyledLogoIcon, StyledMobileLogoIcon } from "./style";
import github from "./github-s-icon.svg";
import insta from "./insta-s-icon.svg";
import medium from "./medium-s-icon.svg";
import telegram from "./telegram-s-icon.svg";
import twitter from "./twitter-s-icon.svg";
import close from "./popup-close-icon.svg";
import m_close from "./modal-close-icon.svg";
import logo from "./tn-aridrop-bi.svg";
import m_logo from "./tn-aridrop-m-bi.svg";
import prev_arrow from "./pagenate-prev-arrow-icon-inactive.svg";
import next_arrow from "./pagenate-next-arrow-icon-inactive.svg";
import upper_arrow from "./upper-arrow-icon.svg";

export const LogoIcon: React.FC = () => {
  return <StyledLogoIcon src={logo} alt="Tokamak Network Airdrop" />;
};

export const MobileLogoIcon: React.FC = () => {
  return <StyledMobileLogoIcon src={m_logo} alt="Tokamak Network Airdrop" />;
};

export const InstaIcon: React.FC = () => {
  return <Icon src={insta} alt="instagram" />;
};

export const GithubIcon: React.FC = () => {
  return <Icon src={github} alt="github" />;
};

export const MediumIcon: React.FC = () => {
  return <Icon src={medium} alt="medium" />;
};

export const TelegramIcon: React.FC = () => {
  return <Icon src={telegram} alt="telegram" />;
};

export const TwitterIcon: React.FC = () => {
  return <Icon src={twitter} alt="twitter" />;
};

export const PopupCloseIcon: React.FC = () => {
  return <img src={close} alt="close" />;
};

export const ModalCloseIcon: React.FC = () => {
  return <img src={m_close} alt="close" />;
};

export const PrevArrow: React.FC = () => {
  return <img src={prev_arrow} alt="prev" />;
};

export const NextArrow: React.FC = () => {
  return <img src={next_arrow} alt="next" />;
};

export const UpperArrow: React.FC = () => {
  return <img src={upper_arrow} alt="to_top" />;
};
