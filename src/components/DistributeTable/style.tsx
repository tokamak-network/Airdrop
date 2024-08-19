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
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1100px) {
    margin: 12px 0px;
    justify-content: center;
  }
`;

export const ScheduleBar = styled.form`
  display: flex;
  gap: 6px;
  @media only screen and (max-width: 1100px) {
    display: grid;
  }
`;

export const Label = styled.label`
  font-family: "Rajdhani", sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #7e8993;
`;

export const ScheduledTime = styled.a`
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.33px;
  color: #353c48;
`;

export const DistributeButton = styled.button`
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
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const MobileDistributeButton = styled.button`
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

export const TableContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 1px 1px 0 rgba(96, 97, 112, 0.16);
  background-color: #fff;
`;

export const Table = styled.table`
  border-collapse: collapse;
  border-right: 1px solid #f4f6f8;
  width: 550px;
  border-radius: 10px;
  height: fit-content;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const MobileTable = styled.table`
  border-collapse: collapse;
  border-right: 1px solid #f4f6f8;
  width: 100%;
  border-radius: 0px;
  height: fit-content;
  background-color: #fff;
  @media only screen and (min-width: 1100px) {
    display: none;
  }
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #f4f6f8;
  text-align: center;
  @media only screen and (max-width: 1100px) {
    &:nth-child(odd) {
      background-color: #fafbfc;
    }
  }
`;

export const TableHead = styled.th`
  height: 53px;
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
  height: 53px;
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
