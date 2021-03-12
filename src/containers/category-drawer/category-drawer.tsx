import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import styled from "styled-components";
import { useAction } from "hooks";
import { types, urls } from "utils";
import { Drawer } from "components";

interface IState {
  categories: { data: any[]; error: any; loading: boolean };
}

export const CategoryDrawer = () => {
  const categories = useSelector((state: IState) => state.categories);
  const dispatch = useDispatch();
  const { onFetch } = useAction();

  const fetchCategories = useCallback(
    () =>
      dispatch(
        onFetch({
          type: types.FETCH_CATEGORIES,
          url: urls.categories,
        })
      ),
    []
  );

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Drawer open>
      {categories.loading && <Loading>Loading Categories...</Loading>}
      {categories.error && <Loading>Something went wrong ...</Loading>}
      <List>
        {(categories.data || []).map((categoty) => (
          <ListItem as="button" key={categoty.id}>
            {categoty.name}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

const Loading = styled.div`
  margin: 30px auto;
  color: white;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ListItem = styled.div`
  width: 100%;
  margin: 10px auto;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
`;
