import styled from "styled-components";

export const TextInput = styled.input`
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  box-sizing: border-box;
`;

export const Container = styled.div`
  padding: 16px;
  box-sizing: border-box;
`;

export const LabelRadioButton = styled.label`
  padding-left: 16px;
`;

export const Form = styled.form`
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 55%; /* Could be more or less, depending on screen size */
`;

export const Hr = styled.hr`
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
`;

export const Button = styled.input`
  height: 40px;
  width: 100px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  &:hover {
    background-color: #aa6aaa;
    color: whitesmoke;
    border-color: gray;
    transform: scale(1.05);
  }
`;

export const ErrorMessage = styled.p`
  color: #bf1650;
  &:before {
    display: inline;
    content: "⚠ ";
  }
`;
