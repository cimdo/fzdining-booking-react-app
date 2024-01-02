import styled from "styled-components";

export const Wrapper = styled.div`
    padding:20px; 
`;

export const DropZone =  styled.div`
    display: flex;
    height: 200px;
    width: 100%;
    background: white;
    background-repeat: no-repeat;
    background-size: 100px;
    background-position: center;
    background-color: #ffffff;
    cursor: pointer;
    border: 2px dashed #ccc;
    border-radius: 6px;
    margin-bottom: 25px;
    background-position: center 28px;
`;

export const Message = styled.p`
    margin: auto;
`;

export const ImgContainer = styled.div`
    display: inline-block;
    margin: 2%
`

export const Photo = styled.img`
    width: 150px;
    border-radius: 4px;
    display: inline-block;
`;

export const DeletePhoto = styled.button`
    cursor: pointer;
    color: #fff;
    border-radius: 30px;
    border: 1px solid #fff;
    display: inline-block;
    background: rgba(255, 0, 0, 1);
    margin: -5px -10px;
`
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