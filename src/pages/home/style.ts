import styled, { css } from "styled-components";
import { shade } from "polished";

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 650px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;

    ${(props) =>
      props.hasError &&
      css`
        border: 1px red solid;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 200px;
    height: 70px;
    background-color: #00d25a;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: 0.5s;

    &:hover {
      transition: 0.5s;
      background: ${shade(0.2, "#00D25A")};
    }
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 30px;
  max-width: 700px;
`;

export const Repository = styled.form`
  #delete {
    margin-left: 3%;
    color: #ff9800;
    &:hover {
      transition: 0.5s;
      color: ${shade(0.2, "#ff5722")};
      cursor: pointer;
    }
  }

  a {
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    text-decoration: none;
    align-items: center;
    transition: 0.5s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 18px;
    }

    img {
      width: 65px;
      height: 65px;
      border-radius: 50%50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #3d3d4d;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
export const Error = styled.span`
  display: block;
  color: red;
  margin-top: 10px;
`;
