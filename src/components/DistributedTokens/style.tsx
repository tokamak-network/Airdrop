import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 1100px;
  height: 200px;
  margin: 30px 0px;
  border-radius: 10px;
  box-shadow: 0 1px 1px 0 rgba(96, 97, 112, 0.16);
  background-color: #fff;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const Placeholder = styled.span`
  font-family: "Rajdhani", sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.38px;
  color: #7e8993;
  margin: auto;
`;
