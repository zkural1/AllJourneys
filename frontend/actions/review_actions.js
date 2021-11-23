/* eslint-disable no-shadow */
import * as ReviewAPIUtil from "../utils/review_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEWS";
export const UPDATE_REVIEW = "UPDATE_REVIEW";

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

export const updateReviewAction = (review) => ({
  type: UPDATE_REVIEW,
  review,
});

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

export const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId,
});

export const fetchReviews = () => (dispatch) =>
  ReviewAPIUtil.fetchReviews().then((reviews) =>
    dispatch(receiveReviews(reviews))
  );

export const createReview = (review) => (dispatch) =>
  ReviewAPIUtil.createReview(review).then((review) =>
    dispatch(receiveReview(review))
  );

export const updateReview = (review) => (dispatch) =>
  ReviewAPIUtil.updateReview(review).then((review) =>
    dispatch(updateReviewAction(review))
  );

export const deleteReview = (reviewId) => (dispatch) =>
  ReviewAPIUtil.deleteReview(reviewId).then(() =>
    dispatch(removeReview(reviewId))
  );
