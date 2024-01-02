import React, { useEffect, useState } from "react";
import {
  Pagination,
  ReviewSearch,
  Search,
  StyledDataCell,
  StyledHeader,
  StyledTable,
} from "./reviews-board.styles";
import { starReview } from "../../../components/star-reviews/star-reviews.component";
import { useDispatch, useSelector } from "react-redux";
import { generatePagination } from "../../../components/pagination/pagination.function";
import {
  accountUpdateCurrentPage,
  fetchReviewList,
} from "../../../redux/restaurants/restaurants.slice";

const ReviewsBoard = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [reviewSearch, setReviewSearch] = useState("");
  const { numberOfReviewPages, currentReviewPage, reviews } = useSelector(
    (state) => state.restaurants
  );

  const handleChangePagination = (page) => {
    dispatch(accountUpdateCurrentPage(page));
  };

  const pages = generatePagination(
    numberOfReviewPages,
    currentReviewPage,
    handleChangePagination
  );

  useEffect(() => {
    dispatch(fetchReviewList({ search, reviewSearch, currentReviewPage }));
  }, [reviewSearch, search, dispatch, currentReviewPage]);
  return (
    <>
      <h1>Reviews</h1>
      <Search
        type="text"
        name="search"
        placeholder="Search.."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></Search>

      <ReviewSearch
        value={reviewSearch}
        onChange={(event) => setReviewSearch(event.target.value)}
      >
        <option value="">All ratings</option>
        <option value={5}>5 stars</option>
        <option value={4}>4 stars</option>
        <option value={3}>3 stars</option>
        <option value={2}>2 stars</option>
        <option value={1}>1 stars</option>
      </ReviewSearch>
      <StyledTable>
        <thead>
          <tr>
            <StyledHeader>Customer Name</StyledHeader>
            <StyledHeader style={{ width: "50%" }}>Content</StyledHeader>
            <StyledHeader>Rating</StyledHeader>
            <StyledHeader>Date time</StyledHeader>
          </tr>
        </thead>
        <tbody>
          {reviews.map((val, key) => {
            return (
              <tr key={val.id}>
                <StyledDataCell>{val.name}</StyledDataCell>
                <StyledDataCell>{val.content}</StyledDataCell>
                <StyledDataCell>{starReview(val.rating)}</StyledDataCell>
                <StyledDataCell>{val.datetime}</StyledDataCell>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>

      <Pagination>
        {pages.map((val, key) => {
          return <>{val}</>;
        })}
      </Pagination>
    </>
  );
};

export default ReviewsBoard;
