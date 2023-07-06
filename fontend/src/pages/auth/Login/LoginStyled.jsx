import styled from "@emotion/styled";
import { NavLink as BaseNavLink } from "react-router-dom";
import Logokenko1 from "../../../pic/Logokenko1.png";

export const LoginPosition = styled.div`
  margin-left: 230px;
  padding-top: 50px;
`;

export const LoginBox = styled.div`
  background-color: #c2d9bd;
  width: 480px;
  height: 650px;
  border-radius: 30px;
`;

export const LoginLogo = styled.div`
  width: 390px;
  height: 170px;
  margin-left: 50px;
  margin-top: 35px;
  background-image: url(${Logokenko1});
  background-size: cover;
`;

export const LoginHeading = styled.h6`
  margin-left: 210px;
  font-size: 20px;
  margin-top: -20px;
`;

export const LoginText = styled.div`
  font-size: 13px;
  margin-top: -20px;
  margin-left: 75px;
`;

export const PasswordText = styled.div`
  font-size: 13px;
  margin-top: 15px;
  margin-left: 75px;
`;

export const InputContainer = styled.div`
  width: 350px;
  border-radius: 48px;
  margin-left: 70px;
  margin-top: 10px;
`;

export const ForgotText = styled.div`
  font-size: 13px;
  margin-left: 350px;
  margin-top: 20px;
`;

export const LoginButton = styled.div`
  background-color: #617A55;
  margin-left: 70px;
  width: 350px;
  height: 50px;
  border-radius: 48px;
  margin-top: 40px;
  transition: background-color 0.3s ease;

    /* Hover styles */
    &:hover {
    background-color: #A7CBA6;
  }
`;

export const LoginButtonText = styled.div`
  margin-left: 130px;
  padding: 10px;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
`;
