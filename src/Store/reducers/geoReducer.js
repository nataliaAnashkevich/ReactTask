import produce from 'immer';

export const GEO_ACTIONS = {
  USER_GEO_DATA_RECEIVED: 'USER_GEO_DATA_RECEIVED'
};

const initialState = {
  position: null,
  location: null
};

const geoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GEO_ACTIONS.USER_GEO_DATA_RECEIVED:
      return produce(state, draft => {
        draft.position = payload.position;
        draft.location = payload.location;
      });
    default:
      return state;
  }
};

export default geoReducer;
