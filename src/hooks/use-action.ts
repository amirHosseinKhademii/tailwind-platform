import { useCallback } from "react";
import axios from "axios";

export const useAction = () => {
  return {
    onFetch: useCallback(
      ({ url, type }) => async (dispatch) => {
        dispatch({ type, payload: { loading: true } });
        try {
          const { data } = await axios.get(url);
          dispatch({ type, payload: { data, loading: false } });
        } catch (error) {
          dispatch({ type, payload: { error, loading: false } });
        }
      },
      []
    ),
  };
};
