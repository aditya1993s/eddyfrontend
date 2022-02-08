import { client } from "../../components/AxiosInstance";

export const ADD_SERVER = "ADD_SERVER";
export const GET_ALL_SERVERS = "GET_ALL_SERVERS";
export const REMOVE_SERVER = "REMOVE_SERVER";
export const UPDATE_SERVER = "UPDATE_SERVER";

export const getAllServer = () => {
  return async (dispatch) => {
    const response = await client.get("/server").then((res) => {
      const resData = res.data;
      dispatch({ type: GET_ALL_SERVERS, servers: resData.servers });
    });
  };
};
export const addServer = (server) => {
  return { type: ADD_SERVER, server: server };
};
