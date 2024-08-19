// import { MenuItem } from "components/MenuItem";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #2775ff;
`;

interface MenuItemProps {
  $offset: number;
  $active: boolean;
}

export const MenuItem = styled.li<MenuItemProps>`
  padding: 11px 20px;
  height: 23px;
  list-style-type: none;
  font-family: "Tritillium Web", sans-serif;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${(props) => `${props.$active ? "#353c48" : "#ffffff"}`};
  white-space: nowrap;
  background-color: ${(props) =>
    `${props.$active ? "#ffffff" : "transparent"}`};
  @media only screen and (max-width: 1100px) {
    padding: 9px 20px 8px;
    background-color: transparent;
    color: #ffffff;
    position: absolute;
    opacity: ${(props) => `${props.$active ? 1 : 0.25}`};
    transform: ${(props) => `translate(${props.$offset}px, 0px)`};
    z-index: 1;
    transition: transform 1s;
  }
`;

export const Menu = styled.ul`
  display: flex;
  padding-left: 0px;
  margin: 0px;
  justify-content: center;
  width: 100%;
  height: 45px;
  align-items: center;
  @media only screen and (max-width: 1100px) {
    height: 40px;
  }
`;

export const MenuGroup = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  height: 45px;
  overflow: hidden;
  align-items: center;
  @media only screen and (max-width: 1100px) {
    height: 40px;
  }
`;

export const MenuControlPrevButton = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  padding: 8px;
  z-index: 2;
  left: 0;
  box-sizing: border-box;
  background-color: #2775ff;
  opacity: 0.75;
  text-align: center;
  display: none;
  @media only screen and (max-width: 1100px) {
    display: block;
  }
`;

export const MenuControlNextButton = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  padding: 8px;
  right: 0;
  z-index: 2;
  background-color: #2775ff;
  box-sizing: border-box;
  opacity: 0.75;
  text-align: center;
  display: none;
  @media only screen and (max-width: 1100px) {
    display: block;
  }
`;
export const MenuControlButton = styled.span`
  background-color: transparent;
  border: none;
  outline: none !important;
`;
