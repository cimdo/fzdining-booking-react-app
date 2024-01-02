import styled from "styled-components";



export const ErrorMessage = styled.p`
  color: #bf1650;
  &:before {
    display: inline;
    content: "⚠ ";
  }
`;

export const Form = styled.form`
  background-color: #fefefe;

  border: 1px solid #888;
  width: 100%; /* Could be more or less, depending on screen size */
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
`;

export const Collapsible = styled.button`
  background-color: #aa6aaa;
  color: white;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
`;

const InputForm = styled.input`
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
`;

export const Container = styled.div`
  
  margin:auto
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextInput = styled(InputForm)`
  width: 20%;
  margin-left: 40px;
`;

export const Button = styled.input`
  height: 40px;
  width: 100px;
  font-size: 1.2rem;
  border-radius: 5px;

  cursor: pointer;
  transition: 0.1s ease-in-out;
  background-color: #aa6aaa;
  color: whitesmoke;
  &:hover {
    background-color: green;
    color: whitesmoke;
    border-color: gray;
    transform: scale(1.05);
  }
`;



