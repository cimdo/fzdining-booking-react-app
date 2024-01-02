import React from "react";
import { ErrorMessage, TextInput } from "./user-info-form.styles";

const EmailInput = ({ register, errors, value, isEditForm }) => {
  const requirement = {
    required: "You must enter an email",
    pattern: {
      value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
      message: "Please enter valid email",
    },
  };

  return (
    <>
      <label htmlFor="email">
        <b>Email</b>
      </label>
      {isEditForm ? (
        <TextInput
          defaultValue={value}
          {...register("email", value, requirement)}
          placeholder="Enter email"
          type="email"
        />
      ) : (
        <TextInput
          {...register("email", requirement)}
          placeholder="Enter email"
          type="email"
        />
      )}

      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
    </>
  );
};

export default EmailInput;
