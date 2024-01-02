import styled from "styled-components";

export const Bar = styled.div`
  width: 650px;
  background: white;
  box-shadow: 0 0 5px hsl(0 0% 78%);
  height: 95px;
  border-radius: 100vw;
  display: flex;
  justify-content: center;
  font-size: 0.6rem;
  padding: 0.8rem 1.5rem;
  margin-bottom: 5%;
  &:hover {
    background: hsl(0 0% 94%);
  }
`;

export const Name = styled.div`
  width: 32%;
`;

export const InputContainer = styled.div`
  width: 22%;
`;

export const Input = styled.input`
  background: none;
  border: none;
  padding: 0.2rem 0 0 0;
  &:focus {
    outline: none;
  }
  font-size: 0.75rem;
`;

export const Select = styled.select`
  background: none;
  border: none;
  padding: 0.2rem 0 0 0;
  &:focus {
    outline: none;
  }
  font-size: 0.75rem;
  color: dark-grey;
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  background-color: white;
  text-align: center;
  font-family: arial;
  margin-block-end: 5%;
  margin-right: 1%;
  height: 350px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const CardLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Button = styled.button`
height: 40px;
width: 100px;

border-radius: 5px;
cursor: pointer;
transition: 0.1s ease-in-out;

background-color: #aa6aaa;
color: white;
border-color: gray;
transform: scale(1.05);
`;


export const Container = styled.div`
padding: 2px 16px;
`;

