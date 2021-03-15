import { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Loading } from "components";
import { actions } from "provider";

const DefaultCats = () => {
  const [limit, setlimit] = useState(10);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: IState) => state.cat.images
  );

  const handleFetch = useCallback(() => {
    dispatch(
      actions.fetchImages(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}`
      )
    );
  }, [limit]);

  useEffect(() => {
    handleFetch();
  }, [limit]);

  return (
    <Div>
      {limit === 10 && loading ? (
        <Loading secondary>Loading images...</Loading>
      ) : error ? (
        <Loading secondary>Something went wrong ...</Loading>
      ) : (
        <Fragment>
          <List>
            {(data || []).map((cat) => (
              <Image key={cat.id} src={cat.url} alt={cat.id} />
            ))}
          </List>
          <Button onClick={() => setlimit((prev) => prev + 10)}>
            {loading ? "Please wait .... " : "Load more"}
          </Button>
        </Fragment>
      )}
    </Div>
  );
};

export default DefaultCats;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 20rem;
  padding-top: 100px;
  justify-content: center;
  @media ${({ theme }) => theme.screens.md} {
    padding-left: 10rem;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Image = styled.img`
  width: 250px;
  height: 130px;
  margin: 10px;
  border-radius: 5px;
`;

const Button = styled.button`
  max-width: 150px;
  padding: 10px;
  border-radius: 5px;
  background-color: red;
  color: white;
  margin: 30px auto;
  &:hover {
    opacity: 0.7;
  }
`;
