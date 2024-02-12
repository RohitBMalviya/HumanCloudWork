import {
  Button,
  Checkbox,
  Col,
  Flex,
  Input,
  Layout,
  Row,
  Typography,
} from "antd";
import React, { useState } from "react";
import Logo from "./Images/Logo.svg";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Image1 from "./Images/Image1.png";
import "../Components/stylesheet.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigation = useNavigate();

  const handleLogin = () => {
    setUsernameError("");
    setPasswordError("");

    if (!username) {
      setUsernameError("Please enter your username.");
    }

    if (!password) {
      setPasswordError("Please enter your password.");
    }

    if (username && password) {
      console.log("Username:", username);
      console.log("Password:", password);
      navigation("/");
    } else {
      setUsernameError(username ? "" : "Username is required.");
      setPasswordError(password ? "" : "Password is required.");
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
                    Login
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

              <Flex
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "38px",
                }}
              >
                <Checkbox className="text2">Remember</Checkbox>
                <Typography>
                  <Text
                    className="text2"
                    style={{ textDecorationLine: "underline" }}
                  >
                    Forgot Password?
                  </Text>
                </Typography>
              </Flex>

              <Flex style={{ marginTop: "38px" }}>
                <Button className="button" onClick={handleLogin}>
                  <Text className="buttontext">Login</Text>
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
                    Don<sup>'</sup>t have an account yet?&nbsp;
                    <Link to={"/register"}>
                      <Text className="signup">Sign Up</Text>
                    </Link>
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

export default Login;
