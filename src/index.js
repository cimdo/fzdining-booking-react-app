import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./components/template/template.component";
import Error from "./pages/error/error.component";
import { Provider } from "react-redux";
import store from "./redux/store";
import SignIn from "./pages/authentication/sign-in/sign-in.page";
import SignUp from "./pages/authentication/sign-up/sign-up.page";
import AccountList from "./pages/accounts/account-list/account-list.page";
import AccountForm from "./pages/accounts/account-form/account-form.page";
import EditAccountForm from "./pages/accounts/account-form/edit-account-form.page";
import Dashboard from "./pages/dashboard/dashboard.page";
import ResetPassword from "./pages/accounts/account-form/reset-password";
import AddRestaurantProfileForm from "./pages/restaurant-profile/restaurant-profile-form/add-restaurant-profile-form.page";
import UploadRestaurantPhotos from "./pages/restaurant-profile/restaurant-profile-form/upload-restaurant-photos.page";
import EditRestaurantProfileForm from "./pages/restaurant-profile/restaurant-profile-form/edit-restaurant-profile-form.page";
import ReviewBoards from "./pages/restaurant-profile/reviews/reviews-board.page";
import RestaurantSearch from "./pages/restaurant-search/restaurant-search.page";
import BookingSite from "./pages/restaurant-booking-site/restaurant-booking-site.page";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignIn/>
  },
  {
    path: "/sign-up",
    element: <SignUp/>
  },
  {
    path: "/",
    element: <Template />,
    errorElement: <Error />,
    children: [
      {
        index: true, //mean equal to path above
        element: <Dashboard/>
      },
      {
        path:'/admin/accounts',
        element: <AccountList/>       
      },
      {
        path:'/admin/user',
        element: <AccountForm/>       
      },
      {
        path:'/admin/user/:id',
        element: <EditAccountForm/>       
      },
      {
        path:'/admin/user/reset-password/:id',
        element: <ResetPassword/>       
      },
      {
        path:'/owner/restaurant-profile/create',
        element: <AddRestaurantProfileForm/>       
      },
      {
        path:'/owner/restaurant-profile/edit/:id',
        element: <EditRestaurantProfileForm/>       
      },
      {
        path:'/owner/restaurant-profile/upload-photos/:id',
        element: <UploadRestaurantPhotos/>       
      },
      {
        path:'/owner/restaurant-profile/review-board',
        element: <ReviewBoards/>       
      },
      {
        path:'/restaurant-search',
        element: <RestaurantSearch/>       
      },
      {
        path:'/booking-site/:id',
        element: <BookingSite/>       
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />{" "}
  </Provider>
);
