import React, { useEffect, useState } from "react";
import { fetchRestaurantList } from "../../redux/restaurants/restaurants.slice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Bar,
  Button,
  Card,
  CardLayout,
  Container,
  Input,
  Name,
  Select,
} from "./restaurant-search.styles";

const RestaurantSearch = () => {
  const [searchName, setSearchName] = useState("");
  const [searchAddress, setSearchAddress] = useState("");
  const [reviewSearch, setReviewSearch] = useState("");
  const { restaurants } = useSelector((state) => state.restaurants);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRestaurantList({ searchName, searchAddress, reviewSearch }));
  }, [reviewSearch, searchName, searchAddress, dispatch]);

  return (
    <>
      <h1> Search to book restaurant</h1>
      <Bar>
        <Name>
          <p>Name</p>
          <Input
            type="text"
            placeholder="Add name"
            value={searchName}
            onChange={(event) => setSearchName(event.target.value)}
          />
        </Name>
        <Name>
          <p>Where</p>
          <Input
            type="text"
            placeholder="Add address"
            value={searchAddress}
            onChange={(event) => setSearchAddress(event.target.value)}
          />
        </Name>
        <Name>
          <p>Rating</p>
          <Select
            value={reviewSearch}
            onChange={(event) => setReviewSearch(event.target.value)}
          >
            <option value="">All ratings</option>
            <option value={5}>5 stars</option>
            <option value={4}>4 stars</option>
            <option value={3}>3 stars</option>
            <option value={2}>2 stars</option>
            <option value={1}>1 stars</option>
          </Select>
        </Name>
      </Bar>
      <CardLayout>
        {restaurants &&
          restaurants.map((val, key) => {
            return (
              <>
                <Card>
                  {val.files[0] ? (
                    <img
                      src={val.files[0]}
                      alt="Avatar"
                      style={{ width: "100%", height: "50%" }}
                    />
                  ) : (
                    <img
                      src="http://localhost:3100/uploads/default.jpeg"
                      alt="Avatar"
                      style={{ width: "100%", height: "50%" }}
                    />
                  )}
                  <Container>
                    <h4>
                      <b>{val.restaurantName}</b>
                    </h4>
                    <p>{val.address}</p>
                    <Link to={`/booking-site/${val.id}`}>
                      <Button>Book Now</Button>
                    </Link>
                  </Container>
                </Card>
              </>
            );
          })}
      </CardLayout>
    </>
  );
};
export default RestaurantSearch;
