import * as ParkAPIUtil from "../utils/park_api_util.js";
export const RECEIVE_PARK = "RECEIVE_PARK";

export const receivePark = (park) => {
  return {
    type: RECEIVE_PARK,
    payload: park
  };
};

export const fetchPark = (parkId) => (dispatch) => {
  return ParkAPIUtil.fetchPark(parkId).then((park) =>
    dispatch(receivePark(park))
  );
};
