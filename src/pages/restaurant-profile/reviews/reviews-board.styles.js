import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
  background-color: white;
  & tr:hover {
    background-color: #f1d4f1;
  }
`;

export const StyledHeader = styled.th`
  text-align: left;
  padding: 16px;
  background-color: #aa6aaa;
  color: white;
`;

export const StyledDataCell = styled.td`
  text-align: left;
  padding: 16px;
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
    width: 50%;
  }
`;

export const ReviewSearch = styled.select`
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding: 12px 20px 12px 4px;

  margin-bottom: 2%;
  margin-left: 5%;
`;

export const Pagination = styled.div`
  margin-top: 2%;
`;
