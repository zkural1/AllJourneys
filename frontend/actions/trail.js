import * as TrailAPIUtil from "../utils/trail_api_util.js";

export const RECEIVE_TRAIL = "RECEIVE_TRAIL";

export const receiveTrail = (trail) => {

  return {
    type: RECEIVE_TRAIL,
    payload: trail
  };
};

export const fetchTrail = (trailId) => (dispatch) => {
  return TrailAPIUtil.fetchTrail(trailId).then((trail) =>
    dispatch(receiveTrail(trail))
  );
};
