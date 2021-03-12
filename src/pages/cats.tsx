import { useParams } from "react-router-dom";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useAction } from "hooks";
import { types } from "utils";
import { Loading } from "components";

const Cats = () => {
  const [limit, setlimit] = useState(10);
  const { id } = useParams() as any;
  const { onFetch } = useAction();
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state: IState) => state.images);

  const handleFetch = useCallback(() => {
    dispatch(
      onFetch({
        type: types.FETCH_IMAGES,
        url: `https://api.thecatapi.com/v1/images/search?limit=${limit}&category_ids=${id}`,
      })
    );
  }, [id, limit]);

  useEffect(() => {
    handleFetch();
  }, [id, limit]);

  useEffect(() => {
    setlimit(10);
  }, [id]);

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

export default Cats;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 20rem;
  padding-top: 100px;
  justify-content: center;
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
