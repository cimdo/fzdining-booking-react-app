import React from "react";
import { Container, ErrorMessage, TextInput } from "./booking-form.styles";

const BookingForm = ({ register, errors }) => {
  const today = new Date().toISOString().split("T")[0];
  const requirement = {
    required: "Number of people is required",
    pattern: {
      value: /^(1|2|3|4|5|6|7|8|9|10|11|12)$/,
      message:
        "Please enter number of people. Give us a call if you want to book for more than 12 people",
    },
  };

  return (
    <Container>
      <TextInput {...register("people", requirement)} /> people
      <TextInput
        type="date"
        min={today}
        {...register("date", {
          required: "Date is required",
        })}
      />
      <TextInput
        type="time"
        step="3600000"
        {...register("time", {
          required: "Time is required",
        })}
      />
      {errors.people && <ErrorMessage>{errors.people.message}</ErrorMessage>}
      {errors.date && <ErrorMessage>{errors.date.message}</ErrorMessage>}
      {errors.time && <ErrorMessage>{errors.time.message}</ErrorMessage>}
    </Container>
  );
};

export default BookingForm;
