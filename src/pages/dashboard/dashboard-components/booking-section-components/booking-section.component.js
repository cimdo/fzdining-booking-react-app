import React, { useEffect, useState } from "react";
import {
  ButtonGroup,
  Tab,
  BookingCard,
  BookingList,
} from "../../dashboard.styles";
import {
  fetchBookings,
  getRestaurantBookings,
} from "../../../../redux/user/user.slice";
import { useDispatch, useSelector } from "react-redux";
import UpcomingBookings from "./upcoming-bookings.component";
import PastBooking from "./past-bookings.component";

const BookingSection = ({ role }) => {
  const [active, setActive] = useState(true);
  const { currentUser, futureBookings, pastBookings } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      if (role === "customer") dispatch(fetchBookings());
      else if (role === "owner") dispatch(getRestaurantBookings());
    }
  }, [dispatch, currentUser, role]);

  return (
    <>
      <BookingCard>
        <h2>Bookings</h2>

        <ButtonGroup>
          <Tab
            key={"UPCOMING BOOKINGS"}
            active={Number(active)}
            onClick={() => setActive(true)}
          >
            UPCOMING BOOKINGS
          </Tab>
          <Tab
            key={"PAST BOOKINGS"}
            active={Number(!active)}
            onClick={() => setActive(false)}
          >
            PAST BOOKINGS
          </Tab>
        </ButtonGroup>
        <p />
        <BookingList>
          {active && (
            <>
              {futureBookings.length > 0 &&
                futureBookings.map((val, key) => {
                  return <UpcomingBookings key={val.id} val={val} />;
                })}
            </>
          )}
          {!active && (
            <>
              {pastBookings.length > 0 &&
                pastBookings.map((val, key) => {
                  return <PastBooking key={val.id} val={val} role={role} />;
                })}
            </>
          )}
        </BookingList>
      </BookingCard>
    </>
  );
};

export default BookingSection;
