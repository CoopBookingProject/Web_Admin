import styled from "@emotion/styled";
import { NavLink as BaseNavLink } from "react-router-dom";

export const MassageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 100px;
`;

export const Iconbutton = styled.div`
  display: flex;
  width: 215px;
  height: 52px;
  border-radius: 16px;
  background: #C2D9BD;
  align-items: center;
  font-size: 24px;
  transition: background-color 0.5s ease;
  cursor: pointer;

  &:hover {
  background-color: #617A55;
}
`;

export const Bar1 = styled.div`
  position: absolute;
  width: 5px;
  height: 30px;
  background: #FFFFFF;
  border-radius: 2.5px;
  margin-left: 20px;
  `;

export const Bar2 = styled.div`
  position: absolute;
  width: 5px;
  height: 30px;
  background: #FFFFFF;
  border-radius: 2.5px;
  transform: rotate(90deg);
  margin-left: 20px;
`;

export const MassageBody = styled.div`
  padding-left: 100px;
  font-size: 16px;
  display: flex;
`;

export const TableFillter = styled.div`
  width: 110px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const Line1= styled.div`
  width: 1244px;
  height: 5px;
  background-color: #D9D9D9;
  position: absolute;
  margin-top: 33px;
  border-radius: 2.5px;
`;

export const Line2= styled.div`
  width: 110px;
  height: 5px;
  background-color: #617A55;
  position: absolute;
  margin-top: 33px;
  border-radius: 2.5px;
  transition: margin-left 0.5s ease;
`;

export const MainTable = styled.div`
  position: absolute;
  margin-top: 20px;
`;