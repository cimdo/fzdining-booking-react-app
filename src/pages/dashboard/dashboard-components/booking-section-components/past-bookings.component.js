import React, { useMemo, useState } from "react";
import {
  Button,
  CloseModal,
  Collapsible,
  Form,
  Modal,
  ModalBackdrop,
  Wrapper,
} from "../../dashboard.styles";
import {
  addReview,
  getReviewsBasedOnBooking,
} from "../../../../redux/user/user.slice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { PastBookings } from "../../dashboard.styles";
import { ErrorMessage } from "../../../../components/booking-form/booking-form.styles";
import "../../dashboard.css";
const PastBooking = ({ val, role }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState(null);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useMemo(() => {
    async function fetchReview() {
      let response = await dispatch(getReviewsBasedOnBooking(val.id));
      return response.payload;
    }

    fetchReview().then((res) => res.foundReview && setReview(res.foundReview));
  }, [val, dispatch]);

  const onSubmit = async (data) => {
    if (rating) {
      let response = await dispatch(
        addReview({
          review: data.review,
          rating: rating,
          restauranId: val.restauranId,
          dateTime: new Date().toLocaleString(),
          bookingId: val.id,
        })
      );
      if (response.payload.newReview) {
        alert("Rating successfully");
        setShowModal(false);
      } else {
        alert(response.message);
      }
    } else {
      alert("Please rate your booking");
    }
  };

  return (
    <>
      <PastBookings key={val.id}>
        <h4>{val.name}</h4>
        <p>
          Date: {new Date(val.date).toDateString()} {val.time}
        </p>
        {role === "customer" && (
          <button
            style={{ backgroundColor: "yellow", color: "black" }}
            onClick={() => setShowModal(true)}
          >
            Reviews
          </button>
        )}
      </PastBookings>
      {true && (
        <ModalBackdrop selected={showModal}>
          <Modal>
            <CloseModal onClick={() => setShowModal(false)}>&times;</CloseModal>
            <Form onSubmit={(e) => e.preventDefault()}>
              <Collapsible>Rate your experience</Collapsible>
              <div style={{ padding: 20 }}>
                <label htmlFor="Comment">
                  <b>Your review</b>
                </label>
                <br />
                {review ? (
                  <div>{review.content}</div>
                ) : (
                  <>
                    <textarea
                      {...register("review", {
                        required: "You must enter your review",
                      })}
                      placeholder="Enter review"
                      type="text"
                      style={{
                        width: "100%",
                        height: 100,
                        padding: "2%",
                        marginTop: "1%",
                        marginBottom: "1%",
                      }}
                    />
                    {errors.review && (
                      <ErrorMessage>{errors.review.message}</ErrorMessage>
                    )}
                  </>
                )}

                <label htmlFor="Comment">
                  <b>Rating</b>
                </label>
                <br />
                {review ? (
                  <div>{review.rating} stars</div>
                ) : (
                  <div>
                    {[...Array(5)].map((star, index) => {
                      index += 1;
                      return (
                        <button
                          type="button"
                          key={index}
                          className={index <= (hover || rating) ? "on" : "off"}
                          onClick={() => setRating(index)}
                          onMouseEnter={() => setHover(index)}
                          onMouseLeave={() => setHover(rating)}
                        >
                          <span style={{ fontSize: 20 }}>&#9733;</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <Wrapper>
                {!review && (
                  <Button
                    type="submit"
                    value="Save"
                    onClick={handleSubmit(onSubmit)}
                    name="SAVE"
                  />
                )}
              </Wrapper>
            </Form>
          </Modal>
        </ModalBackdrop>
      )}
    </>
  );
};

export default PastBooking;
