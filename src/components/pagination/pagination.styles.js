import styled, { css } from "styled-components";
export const PaginationContainer = styled.button`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  ${({ active }) =>
    active &&
    css`
      background-color: #aa6aaa;
      color: white;
    `}
`;
