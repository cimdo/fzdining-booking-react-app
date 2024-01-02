import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./template.styles.css";
import { TbBrandFilezilla } from "react-icons/tb";
import {
  LogOut,
  MainContent,
  Menu,
  SideBar,
  SideBarContent,
  TopNav,
  TopNavContent,
  NavbarDropdownContent,
  NavbarDropdown,
  CurrentUser,
} from "./template.styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser, logOut } from "../../redux/user/user.slice";
import SidebarItems from "./sidebar-items.component";

const Template = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(
    (state) => state.user
  );
  const [user, setUser] = useState(currentUser);

  useEffect(()=>{
    dispatch(fetchCurrentUser());
  },[dispatch])

  useEffect(()=>{
    setUser(currentUser)
  },[currentUser])

  function handleLogOut() {
    dispatch(logOut(navigate));

  }

  return (
    <div>
      <section>
        <TopNav>
          <TopNavContent>
            <NavbarDropdown>
              <CurrentUser>
                {currentUser && currentUser.name}
              </CurrentUser>
              <NavbarDropdownContent>
                <LogOut onClick={handleLogOut}>
                  Log out
                </LogOut>
              </NavbarDropdownContent>
            </NavbarDropdown>
          </TopNavContent>
        </TopNav>

        <SideBar>
          <SideBarContent>
            <TbBrandFilezilla size={50} />
          </SideBarContent>
          <Menu to="/" end>
            Home
          </Menu>
          {user && <SidebarItems role={user.role} restaurantOwnedId = {user.restaurantOwnedId}/>}    
        </SideBar>
      </section>
      <MainContent>
        <Outlet />
      </MainContent>
    </div>
  );
};

export default Template;
