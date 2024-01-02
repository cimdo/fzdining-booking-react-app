import React from "react";
import { Card, FakeImg, LeftColumn, RightColumn } from "../dashboard.styles";
import BookingSection from "./booking-section-components/booking-section.component";

const DashboardComponent = ({ role }) => {
  return (
    <>
      <div>
        <LeftColumn>
          {role === "customer" ? (
            <BookingSection role="customer" />
          ) : (
            <BookingSection role="owner" />
          )}
        </LeftColumn>
      </div>
      <RightColumn>
        <Card>
          <h2>About us</h2>
          <FakeImg>Image</FakeImg>
          <p>FzDining Booking is the primary app to use when you want to make a meal reservation!</p>
        </Card>

        <Card>
          <h3>New restaurant in town</h3>
          <a href="#newrestaurant">Kuroneko Ramen Noodle Bar</a>
         
        </Card>
      </RightColumn>
    </>
  );
};

export default DashboardComponent;
