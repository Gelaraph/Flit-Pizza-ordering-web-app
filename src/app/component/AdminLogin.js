import React, { useState } from "react";
import styled from "styled-components";

const AdminLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AdminLoginStyle>
      <div className="container">
        <h3>Admin Dashboard</h3>
        <form>
          <div>
            <input
              type="name"
              // value={name}
              onChange={(e) => {
                setName(e);
              }}
              placeholder="username"
            />
          </div>
          <div>
            <input
              type="password"
              // value={password}
              onChange={(e) => {
                setPassword(e);
              }}
              placeholder="password"
            />
          </div>
          <button>Sign In</button>
        </form>
      </div>
    </AdminLoginStyle>
  );
};

const AdminLoginStyle = styled.div`
  height: 80vh;
  align-items: center;
  display: grid;
  justify-content: center;
  text-align: center;

  h3 {
    font-size: 20px;
    font-weight: bold;
  }

  form {
    width: 100%;
    > div {
      margin-top: 1.2em;
    }
    input {
      border: 1px solid grey;
      padding: 0.5em;
      width: 100%;
    }
    button {
      background-color: rgb(52, 155, 100);
      color: #fff;
      width: 100%;
      padding: 0.6em;
      margin-top: 1em;
    }
  }
`;
export default AdminLogin;
