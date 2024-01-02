import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Form,
  Button,
  Container,
  Hr,
} from "../../../components/user-info-form/user-info-form.styles";
import {  logIn } from "../../../redux/accounts/accounts.slice";
import { useDispatch } from "react-redux";
import EmailInput from "../../../components/user-info-form/email-input.component";
import PasswordInput from "../../../components/user-info-form/password-input.componet";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(() => !!localStorage.checkbox);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const response = await dispatch(logIn(data));

    if (response.payload.accessToken) {
      alert("Log in successfully");
      const accessToken = response.payload.accessToken;
      localStorage.setItem("accessToken", accessToken);
      localStorage.checkbox = isChecked ? "1" : "";
      navigate('/')
    } else {
      alert("Email or password is incorrect");
    }
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Container>
        <h1>Sign In</h1>
        <Hr />

        <EmailInput register={register} errors={errors} />
        <PasswordInput
          register={register}
          errors={errors}
          isSignUpForm={false}
          watch={watch}
        />

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
          Don't have an account ? <Link to="/sign-up">Sign Up </Link>
        </p>
        <div>
          <Button type="submit" onClick={handleSubmit(onSubmit)} />
        </div>
      </Container>
    </Form>
  );
};
export default SignIn;
