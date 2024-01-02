import React from "react";
import { ErrorMessage, TextInput } from "../restaurant-profile-form.styles";


const RestaurantAddressInput = ({register, errors, value, setValue}) => {
  const requirement =  {
    required: "This field is required"
  };

  
  React.useEffect(() => {
    setValue("address", value);
  }, [setValue, value]);

  return (
    <>
       <label htmlFor="address">
          <b>Address</b>
        </label>
        {
          value ?
          <TextInput
          defaultValue={value}
          {...register("address" , value, requirement)}
          placeholder="Enter address name"/>
          :
          <TextInput
          {...register("address" , requirement)}
          placeholder="Enter restaurant address"/>

        }
       

        {errors.address && (
          <ErrorMessage>{errors.address.message}</ErrorMessage>
        )}
    
    </>
  );
};

export default RestaurantAddressInput;