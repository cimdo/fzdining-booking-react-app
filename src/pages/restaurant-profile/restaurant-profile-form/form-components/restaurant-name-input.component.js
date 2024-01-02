import React from "react";
import { ErrorMessage, TextInput } from "./../restaurant-profile-form.styles";

const RestaurantNameInput = ({ register, errors, value, setValue }) => {
  const requirement = {
    required: "This field is required",
    maxLength: {
      value: 70,
      message: "Name cannot exceed 70 characters",
    },
  };

  React.useEffect(() => {
    setValue("restaurantName", value);
  }, [setValue, value]);

  return (
    <>
      <label htmlFor="restaurantName">
        <b>Restaurant Name</b>
      </label>
      {value ? (
        <TextInput
          defaultValue={value}
          {...register("restaurantName", value, requirement)}
          placeholder="Enter restaurant name"
        />
      ) : (
        <TextInput
          {...register("restaurantName", requirement)}
          placeholder="Enter restaurant name"
        />
      )}

      {errors.restaurantName && (
        <ErrorMessage>{errors.restaurantName.message}</ErrorMessage>
      )}
    </>
  );
};

export default RestaurantNameInput;
