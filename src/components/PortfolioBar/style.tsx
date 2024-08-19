import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1px;
  @media only screen and (max-width: 1100px) {
    display: grid;
    gap: 1px;
  }
`;

export const FirstCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 275px;
  height: 50px;
  padding: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #fff;
  @media only screen and (max-width: 1100px) {
    height: 60px;
    justify-content: space-between;
    flex-direction: row;
    width: calc(100% - 40px);
    padding: 0px 20px;
    border-radius: 0px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 275px;
  height: 50px;
  padding: 20px;
  background-color: #fff;
  @media only screen and (max-width: 1100px) {
    height: 60px;
    justify-content: space-between;
    flex-direction: row;
    width: calc(100% - 40px);
    padding: 0px 20px;
    border-radius: 0px;
  }
`;

export const LastCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 275px;
  height: 50px;
  padding: 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #fff;
  @media only screen and (max-width: 1100px) {
    height: 60px;
    justify-content: space-between;
    flex-direction: row;
    width: calc(100% - 40px);
    padding: 0px 20px;
    border-radius: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const Label = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.33px;
  color: #808992;
  margin: 4px;
  @media only screen and (max-width: 1100px) {
    font-family: "Rajdhani", sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.14;
    letter-spacing: 0.35px;
    color: #7e8993;
  }
`;

export const Value = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  color: #304156;
  @media only screen and (max-width: 1100px) {
    font-family: "Rajdhani", sans-serif;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.14;
    letter-spacing: 0.35px;
    color: #353c48;
  }
`;

export const Unit = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.54;
  color: #304156;
`;
