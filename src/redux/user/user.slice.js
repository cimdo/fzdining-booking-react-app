import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../helpers/request";
import { uploadRestaurantPhotos } from "../restaurants/restaurants.slice";


const initialState = {
  currentUser: null,
  futureBookings: [],
  pastBookings: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(uploadRestaurantPhotos.fulfilled, (state, action) => {
        state.currentUser.restaurantOwnedId = action.payload;
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        if (action.payload.length > 0) {
          state.futureBookings = action.payload.filter(
            (booking) => new Date(booking.date) >= Date.now()
          );
          state.pastBookings = action.payload.filter(
            (booking) => new Date(booking.date) < Date.now()
          );
        }
      })
      .addCase(getRestaurantBookings.fulfilled, (state, action) => {
        if (action.payload.length > 0) {
          state.futureBookings = action.payload.filter(
            (booking) => new Date(booking.date) >= Date.now()
          );
          state.pastBookings = action.payload.filter(
            (booking) => new Date(booking.date) < Date.now()
          );
        }
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.futureBookings = state.futureBookings.filter(
          (booking) => booking.id !== action.payload
        );
      })
      .addCase(editBooking.fulfilled, (state, action) => {
        let foundBooking = state.futureBookings.find(
          (booking) => booking.id === action.payload.foundBooking.id
        );
        let index = state.futureBookings.indexOf(foundBooking);
        state.futureBookings[index] = action.payload.foundBooking;
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.futureBookings.push(
          action.payload.newBooking
        );
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.currentUser = null;
      })
  },
});

export default userSlice.reducer;

export const { accountUpdateCurrentUser } = userSlice.actions;

export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async () => {
    const response = await request("/current-user", {
      method: "GET",
    });
    const data = await response.json();
    return data;
  }
);

export const fetchBookings = createAsyncThunk(
  "user/fetchBookings",
  async () => {
    const response = await request("/customer-bookings", {
      method: "GET",
    });
    const data = await response.json();
    return data;
  }
);

export const getRestaurantBookings = createAsyncThunk(
  "user/getRestaurantBookings",
  async () => {
    const response = await request("/restaurant-bookings", {
      method: "GET",
    });
    const data = await response.json();
    return data;
  }
);

export const deleteBooking = createAsyncThunk(
  "user/deleteBooking",
  async (id) => {
    console.log(id);
    const response = await request(`/booking/${id}`, {
      method: "DELETE",
    });
    var a = await response.json();
    console.log(a);
    return id;
  }
);

export const editBooking = createAsyncThunk(
  "user/editBooking",
  async (bookingDetails) => {
    const response = await request("/edit-booking", {
      method: "POST",
      body: JSON.stringify(bookingDetails),
    });
    const data = await response.json();
    return data;
  }
);

export const addBooking = createAsyncThunk(
  "user/addBooking",
  async (bookingDetails) => {
    const response = await request("/add-booking", {
      method: "POST",
      body: JSON.stringify(bookingDetails),
    });
    const data = await response.json();
    return data;
  }
);


export const logOut = createAsyncThunk(
  "user/logOut",
  async (navigate) => {
    await localStorage.removeItem("accessToken");
    navigate("/sign-in");
  }
);

export const addReview = createAsyncThunk(
  "user/addReview",
  async (reviewDetails) => {
    const response = await request("/add-review", {
      method: "POST",
      body: JSON.stringify(reviewDetails),
    });
    const data = await response.json();
    return data;
  }
);

export const getReviewsBasedOnBooking = createAsyncThunk(
  "user/getReviewsBasedOnBooking",
  async (bookingId) => {
    const response = await request("/reviews-on-booking-id", {
      method: "GET",
      query: {
        bookingId: bookingId
      },
    });
    const data = await response.json();
    return data;
  }
);