import React from "react";
import { ErrorMessage, TextInput } from "./user-info-form.styles";

const PasswordInput = ({ register, errors, isSignUpForm, watch }) => {
  const password = watch("password");
  const passwordRequirement = isSignUpForm ? 
  {
    required: "You must specify a password",
    minLength: {
      value: 6,
      message: "Password must have at least 6 characters",
    },
    pattern: {
      value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      message:
        "Password must contain a single digit, one lowercase letter, uppercase letter",
    },
  }
  : 
  {  
    required: "You must specify a password"      
  }



  return (
    <>
      <label htmlFor="psw">
        <b>Password</b>
      </label>
      <TextInput
        {...register("password", passwordRequirement)}
        placeholder="Enter password"
        type="password"
        autoComplete="on"
      />
      {errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}
      {isSignUpForm && (
        <>
          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <TextInput
            type="password"
            placeholder="Repeat password"
            {...register("password_repeat", {
              validate: (value) =>
                value === password || "The passwords do not match",
            })}
            autoComplete="on"
          />
          {errors.password_repeat && (
            <ErrorMessage>{errors.password_repeat.message}</ErrorMessage>
          )}
        </>
      )}
    </>
  );
};

export default PasswordInput;
