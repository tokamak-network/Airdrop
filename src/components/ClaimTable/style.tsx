import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TokenList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const TokenLabel = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  text-align: left;
  color: #304156;
  margin: 10px 30px;
  @media only screen and (max-width: 1100px) {
    font-family: "Rajdhani", sans-serif;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: 0.4px;
    color: #353c48;
    margin: 10px 0px;
  }
`;

export const TableController = styled.div`
  display: flex;
  margin: 10px 0px 10px 30px;
  width: calc(100%-30px);
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1100px) {
    margin: 10px 0px;
  }
`;

export const OptionBar = styled.form`
  display: flex;
  @media only screen and (max-width: 1100px) {
    width: 100%;
    align-items: center;
  }
`;

export const Options = styled.div`
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Label = styled.label`
  font-family: "Rajdhani", sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  color: #7e8993;
`;

export const Option = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
  color: #3d495d;
`;

export const Table = styled.table`
  border-radius: 10px;
  box-shadow: 0 1px 1px 0 rgba(96, 97, 112, 0.16);
  background-color: #fff;
  border-collapse: collapse;
  @media only screen and (max-width: 1100px) {
    width: 100%;
    border-radius: 0px;
  }
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const TableRow = styled.tr`
  text-align: center;
  border-bottom: 1px solid #f4f6f8;
  @media only screen and (max-width: 1100px) {
    &:nth-child(odd) {
      background-color: #fafbfc;
    }
  }
`;

export const TableHead = styled.th`
  height: 55px;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.67;
  letter-spacing: 0.3px;
  color: #3a495f;
  @media only screen and (max-width: 1100px) {
    border: solid 1px #eff1f6;
    background-color: #fff;
  }
`;

export const TableCell = styled.td`
  height: 55px;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0.46px;
  color: #2d3136;
  @media only screen and (max-width: 1100px) {
    border: solid 1px #eff1f6;
  }
`;

export const ClaimButton = styled.button`
  width: 100px;
  height: 32px;
  border-radius: 4px;
  background-color: #257eee;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.33px;
  color: #fff;
  outline: none !important;
`;

export const ClaimSelectedButton = styled.button`
  width: 120px;
  height: 32px;
  border-radius: 4px;
  border: solid 1px #2a72e5;
  background-color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.33px;
  color: #2a72e5;
  outline: none !important;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const MobileClaimAllButton = styled.button`
  width: 100px;
  height: 32px;
  border-radius: 4px;
  border: solid 1px #2a72e5;
  background-color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.33px;
  color: #2a72e5;
  outline: none !important;
  @media only screen and (min-width: 1100px) {
    display: none;
  }
`;

export const ColFirst = styled.col`
  @media only screen and (min-width: 1100px) {
    width: 100px;
  }
`;

export const ColSecond = styled.col`
  @media only screen and (min-width: 1100px) {
    width: 400px;
  }
`;

export const ColThird = styled.col`
  @media only screen and (min-width: 1100px) {
    width: 400px;
  }
`;

export const ColForth = styled.col`
  @media only screen and (min-width: 1100px) {
    width: 200px;
  }
`;

export const Dropdownmenu = styled.select`
  width: 270px;
  height: 32px;
  border-radius: 4px;
  border: solid 1px #dfe4ee;
  background-color: #fff;
  margin-left: 13px;
  @media only screen and (min-width: 1100px) {
    display: none;
  }
`;
