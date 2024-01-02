import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Hr,
} from "./user-info-form.styles";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerNewAccount } from "../../redux/accounts/accounts.slice";
import EmailInput from "./email-input.component";
import PasswordInput from "./password-input.componet";
import RoleInput from "./role-input.component";
import NameInput from "./name-input.component";

const UserInfoForm = ({ isSignUpForm }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isChecked, setIsChecked] = useState(() => !!localStorage.checkbox);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const response = await dispatch(registerNewAccount(data));
    if (response.payload.newUser) {
      alert("Create account successfully");
      if (isSignUpForm) {
        localStorage.checkbox = isChecked ? "1" : "";
        navigate("/sign-in");
      } else {
        navigate("/admin/accounts");
      }
    } else {
      alert(response.payload.message);
    }
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Container>
        {isSignUpForm ? (
          <>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
          </>
        ) : (
          <>
            <h1>Add new User</h1>
          </>
        )}
        <Hr />
        <div style={{ marginBottom: "15px" }}>
        <RoleInput register={register} errors={errors} />
        </div>{" "}
        <br />
        <NameInput register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <PasswordInput
          register={register}
          errors={errors}
          isSignUpForm={isSignUpForm}
          watch={watch}
        />
        {isSignUpForm && (
          <>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                name="remember"
                styles={{ marginBottom: "15px" }}
                onChange={(e) => setIsChecked(e.target.checked)}
              />{" "}
              Remember me
            </label>
            <p>
              By creating an account you agree to our{" "}
              <span style={{ color: "dodgerblue" }}>Terms & Privacy</span>.
            </p>
            <p>
              Already have an account ? <Link to="/">Sign In </Link>
            </p>
          </>
        )}
        <div>
          <Button type="submit" onClick={handleSubmit(onSubmit)} />
        </div>
      </Container>
    </Form>
  );
};
export default UserInfoForm;
