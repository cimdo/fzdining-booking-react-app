import { useParams } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Hr,
} from "../../../components/user-info-form/user-info-form.styles";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import {
  editUserDetails,
  fetchChosenUser,
} from "../../../redux/accounts/accounts.slice";
import NameInput from "../../../components/user-info-form/name-input.component";
import EmailInput from "../../../components/user-info-form/email-input.component";

const EditAccountForm = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    accountType: "",
    name: "",
    email: "",
  });
  const dispatch = useDispatch();

  useMemo(() => {
    async function fetchCurrentUser() {
      let response = await dispatch(fetchChosenUser(id));
      setUser(response.payload);
      return response.payload;
    }

    fetchCurrentUser();
  }, [id, dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if(!data.email) data.email = user.email;
    if(!data.name) data.name = user.name;
    let response = await dispatch(editUserDetails({ ...data, id }));
    if (response.payload.foundUser) {
      navigate("/admin/accounts");
    } else {
      alert(response.payload.message);
    }
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Container>
        <h1>
          EDIT USER - {user.accountType.toUpperCase()} - ID: {id}
        </h1>
        <Hr />
        <NameInput register={register} errors={errors} value={user.name} isEditName={true} />
        <EmailInput register={register} errors={errors} value={user.email} isEditForm={true} />
        <div>
          <Button type="submit" onClick={handleSubmit(onSubmit)} />
        </div>
      </Container>
    </Form>
  );
};
export default EditAccountForm;
