import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { client } from "../AxiosInstance";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  let navigate = useNavigate();
  const handleLoginClick = () => {
    client.get("/user").then((response) => {
      response.data.users.map((item) => {
        // console.log(item.user_name);
        // console.log("Encoded");
        // var encoded = btoa(username);
        // console.log(encoded);
        // console.log("Decoded");
        // console.log(atob(encoded));
        if (item.user_name == username) {
          localStorage.setItem("accessToken", btoa(username));
          navigate(`/`);
        }
      });
    });
  };
  return (
    <>
      <Container style={{ width: "50%" }}>
        <h2 style={{ textAlign: "center" }}>LOGIN</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="button"
            style={{ marginLeft: "42%" }}
            onClick={handleLoginClick}
          >
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
