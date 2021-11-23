import * as ParkAPIUtil from "../utils/park_api_util";

export const RECEIVE_PARK = "RECEIVE_PARK";

export const receivePark = (park) => ({
  type: RECEIVE_PARK,
  payload: park,
});

export const fetchPark = (parkId) => (dispatch) =>
  ParkAPIUtil.fetchPark(parkId).then((park) => dispatch(receivePark(park)));
