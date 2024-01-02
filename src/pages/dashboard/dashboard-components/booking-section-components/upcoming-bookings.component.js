import React, { useState } from "react";
import {
  Button,
  CloseModal,
  Collapsible,
  Form,
  FutureBookings,
  Modal,
  ModalBackdrop,
  Wrapper,
} from "../../dashboard.styles";
import { deleteBooking, editBooking } from "../../../../redux/user/user.slice";
import { useDispatch } from "react-redux";
import "../../dashboard.css";
import { useForm } from "react-hook-form";
import BookingForm from "../../../../components/booking-form/booking-form.component";

const UpcomingBookings = ({ val }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    let response = await dispatch(
      editBooking({
        id: val.id,
        people: data.people,
        date: data.date,
        time: data.time,
      })
    );
    if (response.payload.foundBooking) {
      alert("Done editting");
      setShowModal(false);
    } else {
      alert(response.payload.message);
    }
  };

  React.useEffect(() => {
    setValue("people", val.size);
    setValue("date", val.date);
    setValue("time", val.time);
  }, [setValue, val]);

  return (
    <>
      <FutureBookings key={val.id}>
        <h4>{val.name}</h4>
        <p>
          Date: {new Date(val.date).toDateString()} {val.time}
        </p>
        <p>Size: {val.size}</p>
        <button
          style={{ backgroundColor: "Blue", color: "white" }}
          onClick={() => setShowModal(true)}
        >
          Edit booking
        </button>
        <button
          onClick={() => {
            if (window.confirm(`Confirm cancel booking with ${val.name}?`)) {
              dispatch(deleteBooking(val.id));
            }
          }}
        >
          Cancel booking
        </button>
      </FutureBookings>
      {true && (
        <ModalBackdrop selected={showModal}>
          <Modal>
            <CloseModal onClick={() => setShowModal(false)}>&times;</CloseModal>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Collapsible>Edit booking</Collapsible>
              <BookingForm register={register} errors={errors} />
              <Wrapper>
                <Button
                  type="submit"
                  value="Save"
                  onClick={handleSubmit(onSubmit)}
                  name="SAVE"
                />
              </Wrapper>
            </Form>
          </Modal>
        </ModalBackdrop>
      )}
    </>
  );
};

export default UpcomingBookings;
