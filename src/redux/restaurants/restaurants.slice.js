import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../helpers/request";

const initialState = {
  restaurants: [],
  numberOfReviewPages: 1,
  currentReviewPage: 1,
  reviews: [],
};

const restaurantsSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    accountUpdateCurrentPage(state, action) {
      state.currentReviewPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewList.fulfilled, (state, action) => {
        state.reviews = action.payload.foundReviews;
        state.numberOfReviewPages = action.payload.numberOfPage;
      })
      .addCase(fetchRestaurantList.fulfilled, (state, action) => {
        state.restaurants = action.payload;
      })
      .addCase(fetchReviewListOnCustomerSide.fulfilled, (state, action) => {
        state.reviews = action.payload.foundReviews;
      });

    // builder
    // .addCase(addNewRestaurant.fulfilled, (state, action) => {
    //   //state.latestRestaurantIdRecord = action.payload.newRestaurant.id
    // })
  },
});

export default restaurantsSlice.reducer;
export const { accountUpdateCurrentPage } = restaurantsSlice.actions; // export bien todoStatus

export const addNewRestaurant = createAsyncThunk(
  "restaurant/addNewRestaurant",
  async (newRestaurant) => {
    const response = await request("/add-restaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurant),
    });
    const data = await response.json();
    return data;
  }
);

export const uploadRestaurantPhotos = createAsyncThunk(
  "restaurant/uploadRestaurantPhotos",
  async (photos) => {
    let bodyFormData = new FormData();
    if (photos.files) {
      for (let i = 0; i < photos.files.length; i++) {
        bodyFormData.append("files", photos.files[i]);
      }
    }
    const response = await request(`/upload-restaurant-photos/${photos.id}`, {
      method: "POST",
      body: bodyFormData,
    });
    const data = await response.json();
    return data;
  }
);

export const fetchChosenRestaurant = createAsyncThunk(
  "account/fetchChosenRestaurant",
  async (id) => {
    const response = await request(`/restaurants/${id}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  }
);

export const editRestaurantDetails = createAsyncThunk(
  "account/editRestaurantDetails",
  async (restaurantDetails) => {
    const response = await request("/edit-restaurant", {
      method: "POST",
      body: JSON.stringify(restaurantDetails),
    });
    const data = await response.json();
    return data;
  }
);

export const fetchResPhotos = createAsyncThunk(
  "account/fetchResPhotos",
  async (id) => {
    const response = await request(`/restaurant-photos/${id}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  }
);

export const deletePhoto = createAsyncThunk(
  "restaurant/deletePhoto",
  async (photo) => {
    const response = await request(`/photos/${photo.id}`, {
      method: "DELETE",
      body: JSON.stringify(photo),
    });
    const data = await response.json();
    return data;
  }
);

export const fetchReviewList = createAsyncThunk(
  "restaurant/fetchReviewList",
  async (filters) => {
    console.log(filters);
    const response = await request("/reviews", {
      method: "GET",
      query: {
        search: filters.search,
        reviewSearch: filters.reviewSearch,
        current_page_number: filters.currentReviewPage,
      },
    });
    const data = await response.json();
    return data;
  }
);

export const fetchRestaurantList = createAsyncThunk(
  "restaurant/fetchRestaurantList",
  async (filters) => {
    const response = await request("/restaurant-list", {
      method: "GET",
      query: {
        searchName: filters.searchName,
        searchAddress: filters.searchAddress,
        reviewSearch: filters.reviewSearch,
      },
    });
    const data = await response.json();
    return data;
  }
);

export const fetchReviewListOnCustomerSide = createAsyncThunk(
  "restaurant/fetchReviewListOnCustomerSide",
  async (restauranId) => {
    const response = await request("/reviews-on-customer-side", {
      method: "GET",
      query: {
        restauranId: restauranId
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  }
);
