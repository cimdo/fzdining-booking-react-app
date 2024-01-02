import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { fetchChosenRestaurant, fetchReviewListOnCustomerSide } from "../../redux/restaurants/restaurants.slice";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BookingForm from "../../components/booking-form/booking-form.component";
import { useForm } from "react-hook-form";
import { addBooking } from "../../redux/user/user.slice";
import { starReview } from "../../components/star-reviews/star-reviews.component";
import { App, ButtonSave, Container, Image, ImagesContainer, NavButton, ReviewContainer } from "./restaurant-booking-site.styles";

const BookingSite = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [restaurant, setRestaurant] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { currentUser } = useSelector(
    (state) => state.user
  );
  const { reviews } = useSelector(
    (state) => state.restaurants
  );


  useMemo(() => {
    async function fetchCurrentRestaurant() {
      let response = await dispatch(fetchChosenRestaurant(id));
      setRestaurant(response.payload);
      return response.payload;
    }

    fetchCurrentRestaurant();
  }, [id, dispatch]);

  useMemo(() => {
    async function fetchReviews() {
      let response = await dispatch(fetchReviewListOnCustomerSide(id));
      return response.payload;
    }

    fetchReviews();
  }, [id, dispatch]);

  const sliderRef = useRef(null);
  const scrollAmount = 100;

  const onSubmit = async (data) => {
    let response = await dispatch(
      addBooking({
        restaurantId: restaurant.id,
        people: data.people,
        date: data.date,
        time: data.time,
        userId: currentUser.id
      })
    );
    if (response.payload.newBooking) {
      alert("Booking successfully");
      navigate('/')
    } else {
      alert(response.payload.message);
    }
  };

  return (
    <>
      {restaurant && (
        <>
          <h1>{restaurant.restaurantName}</h1>
          <h4>
            <FaStar color="orange" />{" "}
            {restaurant.rating > 0
              ? restaurant.rating.toFixed(2) + " star"
              : "No review"}
            &nbsp; &nbsp; &nbsp; Address: {restaurant.address}
          </h4>

          <App>
            <NavButton
              onClick={() => {
                const container = sliderRef.current;
                container.scrollLeft -= scrollAmount;
              }}
            >
              <IoIosArrowBack />
            </NavButton>
            <ImagesContainer ref={sliderRef}>
              {restaurant.files.map((image) => {
                return (
                  <Image
                    alt="sliderImage"
                    key={image}
                    src={image}
                  />
                );
              })}
              <Image
                alt="sliderImage"
                src={"http://localhost:3100/uploads/default.jpeg"}
              />
              <Image
                alt="sliderImage"
                src={"http://localhost:3100/uploads/default.jpeg"}
              />
              <Image
                alt="sliderImage"
                src={"http://localhost:3100/uploads/default.jpeg"}
              />
            </ImagesContainer>
            <NavButton
              onClick={() => {
                const container = sliderRef.current;
                container.scrollLeft += scrollAmount;
              }}
            >
              <IoIosArrowForward />
            </NavButton>
          </App>
          <h4>BOOKING </h4>
          <Container>
            <BookingForm register={register} errors={errors} />

            <ButtonSave
              type="submit"
              value="Save"
              onClick={handleSubmit(onSubmit)}
              name="SAVE"
            >
              Book
            </ButtonSave>
          </Container>
          <h4>Reviews </h4>
          {reviews.map((val) => {
                return (
                  <ReviewContainer>
                    <h4>{val.name}</h4>
                    <h5>{starReview(val.rating)}</h5>
                  {val.content}
                  </ReviewContainer>
                );
              })}
        </>
      )}
    </>
  );
};

export default BookingSite;
