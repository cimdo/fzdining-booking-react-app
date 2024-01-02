import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TopNav = styled.div`
  background-color: #333;
  position: fixed;
  width: 100%;
`;

export const TopNavContent = styled.div`
  float: right;
  background-color: #aa6aaa;
  font-size: 20px;
  padding: 16px;
  &:hover {
    background-color: #ddd;
    color: black;
  }
  min-width:5%
`;

export const SideBar = styled.div`
  margin: 0;
  padding: 0;
  width: 250px;
  background-color: #333;
  position: fixed;
  height: 100%;
  overflow: auto;
  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;
  }   
`;

export const SideBarContent = styled.div`
  display: block;
  color: white;
  padding: 16px; 
`;

export const Menu = styled(NavLink)`
  display: block;
  &.active {
    background-color:#aa6aaa;
  }
  padding: 16px;
  text-decoration: none;
  color: white;

  &:hover {
    background-color: #555;
    color: white;
  }
`

export const MainContent = styled.section`
  margin-left: 200px;
  padding: 5%;
  height: 1000px;
  @media (max-width: 700px) {
    margin-left: 0;
  }
`;

export const CurrentUser = styled.div`
  color: "white";
  text-decoration: "none";
  border: none;
  background-color: #aa6aaa;
  font-size: 100%;
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

export const LogOut = styled.div`
  background: none!important;
  border: none;
  padding: 0!important;
  /*optional*/
  font-family: arial, sans-serif;
  /*input has OS specific font-family*/
  text-decoration: underline;
  cursor: pointer;
  color: blue;
`;

export const NavbarDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;

  z-index: 1;
`;
