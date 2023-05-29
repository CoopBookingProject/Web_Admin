import styled from "@emotion/styled";
import { NavLink as BaseNavLink } from "react-router-dom";

export const WrapperSidebar = styled.div`
  width: 180px;
  background-color:#C2D9BD;
  padding: 40px 20px;
  height : 100vh;
  position: fixed;
`;

export const ButtonNav = styled(BaseNavLink)`
  display: flex;
  width: 180px;
  height: 35px;
  background-color: #ffffff;
  border-radius: 24px;
  transition: 3ms;
  padding: 0px;
  font-size: 20px;
  cursor: pointer;
  color: #000000;
  margin-bottom: 20px;
  border: 1px solid #C2D9BD;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  object-fit:fill;

&:hover {
  background-color: #ffffffe5;
}

&.active {
  background-color: #ffffff;
  border: 1px solid #617a55;
  color:#617A55;
}
 
`;