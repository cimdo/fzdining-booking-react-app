import { useParams } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Hr,
} from "../../../components/user-info-form/user-info-form.styles";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import request from "../../../helpers/request";
import PasswordInput from "../../../components/user-info-form/password-input.componet";

const ResetPassword = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await request("/reset-password", {
      method: "POST",
      body: JSON.stringify({ ...data, id }),
    });
    const resData = await response.json();
    if (response.ok) {
      navigate("/admin/accounts");
    } else {
      alert(resData.message);
    }
  };

  return (
    <>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Container>
          <h1>RESET PASSWORD - ID: {id}</h1>


          <Hr />
          <PasswordInput
            register={register}
            errors={errors}
            isSignUpForm={true}
            watch={watch}
          />
          <div>
            <Button type="submit" onClick={handleSubmit(onSubmit)} />
          </div>
        </Container>
      </Form>
    </>
  );
};
export default ResetPassword;
