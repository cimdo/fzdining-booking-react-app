import React from "react";
import { ErrorMessage, LabelRadioButton } from "./user-info-form.styles";

const RoleInput = ({ register, errors }) => {
  return (
    <>
      <label htmlFor="role">
        <b>User role</b>
      </label>
      <LabelRadioButton>Restaurant Customer</LabelRadioButton>
      <input
        defaultChecked
        {...register("role", {
          required: "You must choose a role",
        })}
        type="radio"
        value="customer"
        id="customer"
      />

      <LabelRadioButton>Restaurant Owner</LabelRadioButton>
      <input
        {...register("role", {
          required: "You must choose a role",
        })}
        type="radio"
        value="owner"
        id="owner"
      />

      <LabelRadioButton>Admin</LabelRadioButton>
      <input
        {...register("role", {
          required: "You must choose a role",
        })}
        type="radio"
        value="admin"
        id="admin"
      />
      {errors.role && <ErrorMessage>{errors.role.message}</ErrorMessage>}
    </>
  );
};

export default RoleInput;
