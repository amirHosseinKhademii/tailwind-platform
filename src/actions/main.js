import axios from "axios";

export const fetchTodos = () => async (dispatch, getState) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  dispatch({ type: "FETCH_TODOS", payload: data });
};
