import React from "react";
import { Menu } from "./template.styles";

const SidebarItems = ({ role, restaurantOwnedId }) => {
  if (role === "admin")
    return (
      <>
        <Menu to="/admin/accounts">Accounts</Menu>
      </>
    );
  else if (role === "owner")
    return (
      <>
        {restaurantOwnedId !== null ? (
          <>
             <Menu to={`/owner/restaurant-profile/edit/${restaurantOwnedId}`}>Edit Profile</Menu>
             <Menu to={`/owner/restaurant-profile/upload-photos/${restaurantOwnedId}`}>Upload Photos</Menu>
             <Menu to={'/owner/restaurant-profile/review-board'}>Reviews</Menu>
          </>
        ) : (
          <Menu to="/owner/restaurant-profile/create">Create Profile</Menu>
        )}
      </>
    );
  else 
    return (
      <Menu to="/restaurant-search">Search for Restaurant</Menu>
    )
;
};

export default SidebarItems;
