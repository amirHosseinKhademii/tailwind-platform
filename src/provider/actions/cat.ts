import axios from "axios";
import { catTypes } from "../types";

const fetchImages = (url) => async (dispatch) => {
  dispatch({ type: catTypes.FETCH_IMAGES, payload: { loading: true } });
  try {
    const { data } = await axios.get(url);
    dispatch({
      type: catTypes.FETCH_IMAGES,
      payload: { data, loading: false },
    });
  } catch (error) {
    dispatch({
      type: catTypes.FETCH_IMAGES,
      payload: { error, loading: false },
    });
  }
};

const fetchCategories = () => async (dispatch) => {
  dispatch({
    type: catTypes.FETCH_CATEGORIES,
    payload: { loading: true },
  });
  try {
    const { data } = await axios.get("https://api.thecatapi.com/v1/categories");
    dispatch({
      type: catTypes.FETCH_CATEGORIES,
      payload: { data, loading: false },
    });
  } catch (error) {
    dispatch({
      type: catTypes.FETCH_CATEGORIES,
      payload: { error, loading: false },
    });
  }
};

const fetchTest = () => async (dispatch) => {
  const { data } = await axios.get("https://api.thecatapi.com/v1/categories");
  dispatch({
    type: catTypes.FETCH_CATEGORIES,
    payload: { data },
  });
};

export const actions = {
  fetchCategories,
  fetchImages,
  fetchTest,
};
