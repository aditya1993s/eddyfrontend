import { ADD_SERVER, GET_ALL_SERVERS } from "../actions/servers";

const initialState = {
  servers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SERVERS:
      return {
        servers: action.servers,
      };
    default:
      return state;
  }
};
