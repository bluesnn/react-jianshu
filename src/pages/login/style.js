import styled from "styled-components";

export const LoginBg = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  .ant-form {
    width: 300px;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    padding: 50px 50px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LoginWrapper = styled.div`
  width: 300px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding: 50px 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .ant-input {
    margin-bottom: 15px;
  }
`;
