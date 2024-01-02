import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
  & tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  & tr:hover {
    background-color: #f1d4f1;
  }
`;

export const StyledHeader = styled.th`
  text-align: left;
  padding: 16px;
`;

export const StyledDataCell = styled.td`
  text-align: left;
  padding: 16px;
`;

export const ActionButton = styled.button`
  background-color: #aa6aaa;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const NavbarDropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    display: block;
    > div {
      display: block;
    }
  }
`;
export const NavbarDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 16px;
  z-index: 1;
`;

export const Search = styled.input`
  width: 20%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 12px 20px 12px 4px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  margin-bottom: 2%;
  &:focus {
    width: 100%;
  }
`;

export const Button = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  background-color: #aa6aaa;
  color: whitesmoke;
  border-color: gray;
  &:hover {
    transform: scale(1.05);
  }
  float: right;
`;


export const Pagination = styled.div`
  margin-top: 2%
`;

