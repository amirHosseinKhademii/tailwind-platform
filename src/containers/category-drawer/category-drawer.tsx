import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { catTypes, actions } from "provider";
import { Drawer, Loading } from "components";

export const CategoryDrawer = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const { data, loading, error } = useSelector(
    (state: IState) => state.cat.categories
  );

  const currentCategory = useSelector(
    (state: IState) => state.cat.currentCategory
  );

  const fetchCategories = useCallback(
    () => dispatch(actions.fetchCategories()),
    []
  );

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Drawer open>
      {data.length === 0 && loading ? (
        <Loading>Loading Categories...</Loading>
      ) : error ? (
        <Loading>Something went wrong ...</Loading>
      ) : (
        <List>
          <Loading>Categories</Loading>
          {(data || []).map((categoty) => (
            <ListItem
              active={currentCategory === categoty.id}
              as="button"
              key={categoty.id}
              onClick={() => {
                dispatch({
                  type: catTypes.SET_CATEGORY,
                  payload: categoty.id,
                });
                push(`/cats/${categoty.id}`);
              }}
            >
              {categoty.name}
            </ListItem>
          ))}
        </List>
      )}
    </Drawer>
  );
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
`;

const ListItem = styled.div`
  width: 100%;
  margin: 10px auto;
  background-color: ${({ active }) => (active ? "blue" : "white")};
  color: ${({ active }) => (active ? "white" : "black")};
  padding: 15px;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;
