import React, { useState } from 'react';
import { Input } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { Post } from "../../../service/http";

import {
  LoginPosition,
  LoginBox,
  LoginLogo,
  LoginHeading,
  LoginText,
  PasswordText,
  InputContainer,
  ForgotText,
  LoginButton,
  LoginButtonText
} from "./LoginStyled";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const postLogin = async () => {
    const result = await Post("/login", {
      username: username,
      password: password
    });

    if (result.status === 200) {
      setLoginMessage("Login successful!");
      // Navigate to the desired page after successful login
      history.push("/dashboard");
    } else {
      setLoginMessage("Login failed. Please try again.");
    }
  };

  const goToPage = () => {
    // Implement the logic to navigate to the "/ForgotPassword" page here
  };

  return (
    <div>
      <div className="Loginmassage">
        <LoginPosition>
          <LoginBox>
            <div>
              <LoginLogo />
            </div>
            <LoginHeading>เข้าสู่ระบบ</LoginHeading>
            <LoginText>ชื่อบัญชีผู้ใช้</LoginText>
            <InputContainer>
              <Input
                style={{ height: '50px', borderRadius: '48px' }}
                value={username}
                onChange={handleUsernameChange}
              />
            </InputContainer>
            <PasswordText>รหัสผ่าน</PasswordText>
            <InputContainer>
              <Input
                style={{ height: '50px', borderRadius: '48px' }}
                value={password}
                onChange={handlePasswordChange}
                type="password"
              />
            </InputContainer>
            <ForgotText>
              <Link style={{ color: '#000000' }} to="/ForgotPassword">
                ลืมรหัสผ่าน
              </Link>
            </ForgotText>
            <LoginButton onClick={postLogin}>
              <LoginButtonText>เข้าสู่ระบบ</LoginButtonText>
            </LoginButton>
            {loginMessage && <div>{loginMessage}</div>}
          </LoginBox>
        </LoginPosition>
      </div>
    </div>
  );
};

export default Login;

