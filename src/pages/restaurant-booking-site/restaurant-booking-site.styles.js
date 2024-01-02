import styled from "styled-components";

export const App = styled.div`
font-family: sans-serif;
align-items: center;
display: flex;
justify-content: center;
margin-top: 30px;
`;

export const ImagesContainer = styled.div`
display: flex;
max-width: 100%;
overflow: scroll;
scroll-behavior: smooth;
transition: scroll 0.3s ease-in-out;
`;

export const Image= styled.img`
width: 300px;
height: 300px;
margin: 5px;
border-radius: 8px;
`;

export const NavButton= styled.button`
color: inherit;
border: none;
padding: 0;
font: inherit;
cursor: pointer;
outline: inherit;
background-color: #c3c3c3;
border-radius: 6px;
height: 200px;
width: 30px;
margin: 5px;
`;

export const Container = styled.div`
background-color: #fefefe;
display: grid; 
`;

export const ButtonSave = styled.button`
height: 40px;
width: 70px;
border-radius: 5px;
cursor: pointer;
transition: 0.1s ease-in-out;
background-color: #aa6aaa;
color: whitesmoke;
margin: auto;  
margin-bottom: 16px;
`;

export const ReviewContainer = styled.div`
background-color: #fefefe;
width: 50%;
margin-bottom: 16px;
border: 10px solid rgba(255,255,255,.5);
border-radius: 25px;
padding: 20px

`

