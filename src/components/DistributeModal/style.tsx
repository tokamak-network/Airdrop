import styled from "styled-components";

export const Screen = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(62, 73, 92, 0.65);
`;

export const Layout = styled.div`
  display: flex;
  align-items: flex-start;
  width: fit-content;
  margin: 100px auto;
  @media only screen and (max-width: 1100px) {
    position: fixed;
    bottom: 0px;
    margin: 0px;
    width: 100%;
  }
`;

export const ModalHeader = styled.div`
  @media only screen and (max-width: 1100px) {
    display: flex;
    width: calc(100% - 40px);
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  padding: 3px;
  border-radius: 15px;
  box-shadow: 0 2px 6px 0 rgba(61, 73, 93, 0.1);
  background-color: #fff;
  margin-top: 31px;
  @media only screen and (max-width: 1100px) {
    border-radius: 15px 15px 0px 0px;
    width: 100%;
  }
`;

export const Title = styled.div`
  font-family: "Titillium Web", sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.5px;
  margin: 20px auto;
  color: #3d495d;
  @media only screen and (max-width: 1100px) {
    margin: 20px 0px;
  }
`;

export const Line = styled.div`
  width: 350px;
  height: 1px;
  background-color: #f4f6f8;
`;

export const ControlBar = styled.div`
  display: flex;
  gap: 12px;
  margin: 25px 0px;
`;

export const CancelButton = styled.button`
  width: 150px;
  height: 38px;
  border-radius: 4px;
  border: solid 1px #dfe4ee;
  background-color: none;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: #3e495c;
  outline: none !important;
`;

export const ClaimButton = styled.button`
  width: 150px;
  height: 38px;
  padding: 9px 56px 10px;
  border-radius: 4px;
  background-color: #257eee;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
  color: #fff;
  outline: none !important;
`;

export const CloseButton = styled.button`
  background: none;
  border-radius: 50%;
  outline: none !important;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;
export const ModalCloseButton = styled.button`
  background: none;
  border-radius: 50%;
  outline: none !important;
  @media only screen and (min-width: 1100px) {
    display: none;
  }
`;

export const FormComp = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
`;
