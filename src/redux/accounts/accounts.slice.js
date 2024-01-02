import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../helpers/request";

const initialState = {
  accounts: [],
  currentUser: null,
  numberOfPage: 1,
  currentPage: 1
};

const accountsSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    accountUpdateCurrentPage(state, action) {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchAccountList.fulfilled, (state, action) => {
      state.accounts = action.payload.accounts;
      state.numberOfPage = action.payload.numberOfPage
    })
    .addCase (deleteAccount.fulfilled, (state, action) => {
      state.accounts = state.accounts.filter(account => account.id !== action.payload)
    })
  },
});

export default accountsSlice.reducer;

export const { accountUpdateCurrentPage } = accountsSlice.actions; 

export const fetchAccountList = createAsyncThunk(
  "account/fetchAcountList",
  async (filters) => {
    const response = await request("/accounts", {
      method: "GET",
      query: {
        search: filters.search,
        current_page_number: filters.currentPage
      },
    });
    const data = await response.json();
    return data;
  }
);


export const deleteAccount = createAsyncThunk (
  'account/deleteAccount',
  async (id) => {
    const response =  await request(
      `/accounts/${id}`,
      {
        method: "DELETE",       
      }
    );
    await response.json()
    return id;
  }
)


export const registerNewAccount = createAsyncThunk (
  'account/registerNewAccount',
  async (newUser) => {
    const response =  await fetch("http://localhost:3100/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    return data;
  }
)

export const logIn = createAsyncThunk (
  'account/signIn',
  async (accountDetails) => {
    const response =  await fetch("http://localhost:3100/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(accountDetails),
    });
    const data = await response.json();
    return data;
  }
)

export const fetchChosenUser = createAsyncThunk(
  "account/fetchChosenUser",
  async (id) => {
    const response = await request(`/accounts/${id}`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  }
);

export const editUserDetails = createAsyncThunk (
  'account/editUserDetails',
  async (accountDetails) => {
    const response =  await request("/edit-user", {
      method: "POST",
      body: JSON.stringify(accountDetails),
    });
    const data = await response.json();
    return data;
  }
)
