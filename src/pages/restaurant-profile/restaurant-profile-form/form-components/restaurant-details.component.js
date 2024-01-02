import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import RestaurantNameInput from "./restaurant-name-input.component";
import RestaurantAddressInput from "./restaurant-address-input.component";
import TableSize from "./table-size.component";
import { addNewRestaurant, editRestaurantDetails } from "../../../../redux/restaurants/restaurants.slice";
import { Button, Collapsible, Container, Form } from "../restaurant-profile-form.styles";
import { useNavigate } from "react-router-dom";

const RestaurantDetails = ({id, restaurant}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector(
    (state) => state.user
  );

  const onSubmit = async (data) => {
    if(id)
    {      
      let response = await dispatch(editRestaurantDetails(data));
      if (response.payload.foundRestaurant) {
        alert("Done editting")
      } else {
        alert(response.payload.message);
      }
    }
    else {
      data.userId = currentUser.id;
      const response = await dispatch(addNewRestaurant(data));
      if (response.payload.newRestaurant) {
        alert("Create restaurant successfully");
        navigate(`/owner/restaurant-profile/upload-photos/${response.payload.newRestaurant.id}`)
  
      } else {
        alert(response.payload.message);
      }

    }

  };

  return (
    <>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Collapsible>
          {id ?
            "EDIT RESTAURANT DETAILS"                
            :
            "ADD NEW RESTAURANT"   
          }                  
        </Collapsible>
        <Container>
          <RestaurantNameInput register={register} errors={errors} value={restaurant ? restaurant.restaurantName : null} setValue={setValue} />
          <RestaurantAddressInput register={register} errors={errors} value={restaurant ? restaurant.address : null} setValue={setValue} /> 
          <TableSize register={register} errors={errors} value={restaurant ? restaurant : null}  setValue={setValue}/>
          <br />
          <Button
            type="submit"
            value="Save"
            onClick={handleSubmit(onSubmit)}
            name="SAVE"
            
          />
        </Container>
      </Form>
    </>
  );
};

export default RestaurantDetails;
