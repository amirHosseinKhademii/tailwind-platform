import { useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useAction } from "hooks";
import { types } from "utils";
import { Loading } from "components";

const Cats = () => {
  const { id } = useParams() as any;
  const { onFetch } = useAction();
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state: IState) => state.images);

  const handleFetch = useCallback(() => {
    dispatch(
      onFetch({
        type: types.FETCH_IMAGES,
        url: `https://api.thecatapi.com/v1/images/search?limit=10&category_ids=${id}`,
      })
    );
  }, [id]);

  useEffect(() => {
    handleFetch();
  }, [id]);

  return (
    <Div>
      {loading ? (
        <Loading secondary>Loading images...</Loading>
      ) : error ? (
        <Loading secondary>Something went wrong ...</Loading>
      ) : (
        (data || []).map((cat) => (
          <Image key={cat.id} src={cat.url} alt={cat.id} />
        ))
      )}
    </Div>
  );
};

export default Cats;

const Div = styled.div`
  display: flex;
  width: 100%;
  padding-left: 20rem;
  padding-top: 100px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Image = styled.img`
  width: 250px;
  height: 130px;
  margin: 10px;
  border-radius: 5px;
`;
