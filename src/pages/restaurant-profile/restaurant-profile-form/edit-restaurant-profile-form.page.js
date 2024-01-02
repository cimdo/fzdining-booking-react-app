import { useParams } from "react-router-dom";
import RestaurantDetails from "./form-components/restaurant-details.component";
import { fetchChosenRestaurant } from "../../../redux/restaurants/restaurants.slice";
import { useDispatch } from "react-redux";
import { useMemo, useState } from "react";

const EditRestaurantProfileForm = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const [restaurant, setRestaurant] = useState(null);

  useMemo(() => {
    async function fetchCurrentRestaurant() {
      let response = await dispatch(fetchChosenRestaurant(id));
      setRestaurant(response.payload);
      return response.payload;
    }

    fetchCurrentRestaurant();
  }, [id, dispatch]);


  return (
      <RestaurantDetails id={id} restaurant={restaurant}/>
  );
};

export default EditRestaurantProfileForm;
