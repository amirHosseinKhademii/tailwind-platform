import axios from "axios";
import { types } from "./types";
import { urls } from "./urls";

const fetchImages = (url) => async (dispatch) => {
  dispatch({ type: types.FETCH_IMAGES, payload: { loading: true } });
  try {
    const { data } = await axios.get(url);
    dispatch({ type: types.FETCH_IMAGES, payload: { data, loading: false } });
  } catch (error) {
    dispatch({
      type: types.FETCH_IMAGES,
      payload: { error, loading: false },
    });
  }
};

const fetchCategories = () => async (dispatch) => {
  dispatch({
    type: types.FETCH_CATEGORIES,
    payload: { loading: true },
  });
  try {
    const { data } = await axios.get(urls.categories);
    dispatch({
      type: types.FETCH_CATEGORIES,
      payload: { data, loading: false },
    });
  } catch (error) {
    dispatch({
      type: types.FETCH_CATEGORIES,
      payload: { error, loading: false },
    });
  }
};

const fetchTest = () => async (dispatch) => {
  const { data } = await axios.get(urls.categories);
  dispatch({
    type: types.FETCH_CATEGORIES,
    payload: { data },
  });
};

export const actions = {
  fetchCategories,
  fetchImages,
  fetchTest,
};
