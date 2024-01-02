import React from "react";
import {
  ErrorMessage,
  Item1,
  Item2,
  SelectInput,
  SizeWrapper,
  Item4,
  Item3,
  Item5,
  Item6,
} from "../restaurant-profile-form.styles";

const TableSize = ({ register, errors, value, setValue }) => {
  const requirement = {
    required: "This field is required",
    pattern: {
      value: /^[0-9]*$/,
      message: "Number only",
    },
  };

  React.useEffect(() => {
     if(value) {
      setValue("barseat", value.barseat)
      setValue("tablefor2", value.tablefor2)
      setValue("tablefor4", value.tablefor4)
      setValue("tablefor6", value.tablefor6)
      setValue("tablefor8", value.tablefor8)
      setValue("tablefor10", value.tablefor10)
      setValue("tablefor12", value.tablefor12)
     }
        
  }, [setValue, value]);

  return (
    <>
      <label htmlFor="size">
        <b>How many</b>
      </label>

      <SizeWrapper>
        <Item1>
          {" "}
          {value ? (
            <SelectInput
              defaultValue={value.barseat}
              {...register("barseat", value.barseat, requirement)}
            />
          ) : (
            <SelectInput {...register("barseat", requirement)} />
          )}
          Bar seats
          {errors.barseat && (
            <ErrorMessage>{errors.barseat.message}</ErrorMessage>
          )}
        </Item1> 
        <Item2>
          {value ? (
            <SelectInput
              defaultValue={value.tablefor2}
              {...register("tablefor2", value.tablefor2, requirement)}
            />
          ) : (
            <SelectInput {...register("tablefor2", requirement)} />
          )}
          Tables for 2
          {errors.tablefor2 && (
            <ErrorMessage>{errors.tablefor2.message}</ErrorMessage>
          )}
        </Item2>
        <Item3>
          {value ? (
            <SelectInput
              defaultValue={value.tablefor4}
              {...register("tablefor4", value.tablefor4, requirement)}
            />
          ) : (
            <SelectInput {...register("tablefor4", requirement)} />
          )}
          Tables for 4
          {errors.tablefor4 && (
            <ErrorMessage>{errors.tablefor4.message}</ErrorMessage>
          )}
        </Item3>
        <Item4>
          {value ? (
            <SelectInput
              defaultValue={value.tablefor6}
              {...register("tablefor6", value.tablefor6, requirement)}
            />
          ) : (
            <SelectInput {...register("tablefor6", requirement)} />
          )}
          Tables for 6
          {errors.tablefor6 && (
            <ErrorMessage>{errors.tablefor6.message}</ErrorMessage>
          )}
        </Item4>
        <Item5>
        {value ? (
            <SelectInput
              defaultValue={value.tablefor10}
              {...register("tablefor10", value.tablefor10, requirement)}
            />
          ) : (
            <SelectInput {...register("tablefor10", requirement)} />
          )}
          Tables for 10
          {errors.tablefor10 && (
            <ErrorMessage>{errors.tablefor10.message}</ErrorMessage>
          )}
        </Item5>
        <Item6>
        {value ? (
            <SelectInput
              defaultValue={value.tablefor12}
              {...register("tablefor12", value.tablefor12, requirement)}
            />
          ) : (
            <SelectInput {...register("tablefor12", requirement)} />
          )}
          Tables for 12
          {errors.tablefor12 && (
            <ErrorMessage>{errors.tablefor12.message}</ErrorMessage>
          )}
        </Item6>
      </SizeWrapper>
    </>
  );
};

export default TableSize;


