import React from "react";
import { ErrorMessage, TextInput } from "./user-info-form.styles";


const NameInput = ({register, errors, value, isEditName}) => {
  const requirement =  {
    required: "This field is required",
    maxLength: {
      value: 30,
      message: "Name cannot exceed 30 characters",
    },
    pattern: {
      value: /^[a-z ,.'-]+$/i,
      message: "Alphabetical characters only",
    },
  };

  return (
    <>
       <label htmlFor="fullname">
          <b>Full Name</b>
        </label>
        {
          isEditName ?
          <TextInput
          defaultValue={value}
          {...register("fullname", value , requirement)}
          placeholder="Enter name"
        />
        :
        <TextInput
          {...register("fullname" , requirement)}
          placeholder="Enter name"
        />
        }

        {errors.fullname && (
          <ErrorMessage>{errors.fullname.message}</ErrorMessage>
        )}
    
    </>
  );
};

export default NameInput;