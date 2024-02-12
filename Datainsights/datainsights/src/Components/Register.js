import { Button, Col, Flex, Input, Layout, Row, Typography } from "antd";
import React, { useState } from "react";
import Logo from "./Images/Logo.svg";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Image1 from "./Images/Image1.png";
import "../Components/stylesheet.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigation = useNavigate();

  const handleRegister = () => {
    setUsernameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (!username) {
      setUsernameError("Please enter your username.");
    }

    if (!email) {
      setEmailError("Please enter your email.");
    }

    if (!password) {
      setPasswordError("Please enter your password.");
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password.");
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
    }

    if (
      username &&
      email &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
      navigation("/");
    } else {
      setUsernameError(username ? "" : "Username is required.");
      setPasswordError(password ? "" : "Password is required.");
      setEmail(email ? "" : "Email is required.");

      alert("Please fill in all required fields.");
    }
  };
  return (
    <>
      {/* Image Page=============================================================================================================== */}
      <Layout style={{ background: "white" }}>
        <Row>
          <Col span={9}>
            <img
              src={Image1}
              alt="images"
              style={{ width: "570px", height: "730px" }}
            />
          </Col>

          {/* Login Page=============================================================================================================== */}
          <Col
            span={15}
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Layout style={{ background: "white" }}>
              <Flex>
                <img src={Logo} alt="logo" />
              </Flex>

              <Row style={{ marginBottom: "38px" }}>
                <Typography>
                  <Title level={2} className="title">
                    Register
                  </Title>
                  <Text className="text1">
                    Welcome back, youve been missed!
                  </Text>
                </Typography>
              </Row>

              <Row className="userpass" style={{ marginBottom: "6px" }}>
                Username
              </Row>
              <Input
                className="input"
                size="large"
                placeholder="Username"
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              ></Input>
              {usernameError && (
                <Typography.Text type="danger" className="text1">
                  {usernameError}
                </Typography.Text>
              )}

              <Row
                className="userpass"
                style={{ marginBottom: "6px", marginTop: "20px" }}
              >
                Email
              </Row>
              <Input
                className="input"
                size="large"
                placeholder="Username"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></Input>
              {emailError && (
                <Typography.Text type="danger" className="text1">
                  {emailError}
                </Typography.Text>
              )}

              <Row
                className="userpass"
                style={{ marginBottom: "6px", marginTop: "20px" }}
              >
                Password
              </Row>
              <Input
                className="input"
                size="large"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></Input>
              {passwordError && (
                <Typography.Text type="danger" className="text1">
                  {passwordError}
                </Typography.Text>
              )}

              <Row
                className="userpass"
                style={{ marginBottom: "6px", marginTop: "20px" }}
              >
                Confirm Password
              </Row>
              <Input
                className="input"
                size="large"
                placeholder="Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              ></Input>
              {confirmPasswordError && (
                <Typography.Text type="danger" className="text1">
                  {confirmPasswordError}
                </Typography.Text>
              )}

              <Flex style={{ marginTop: "38px" }}>
                <Button className="button" onClick={handleRegister}>
                  <Text className="buttontext">Register</Text>
                </Button>
              </Flex>

              <Flex
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "38px",
                }}
              >
                <Typography>
                  <Text className="text1">
                    Already have an account?&nbsp;
                    <Text className="signup">Log in</Text>
                  </Text>
                </Typography>
              </Flex>
            </Layout>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default Register;
