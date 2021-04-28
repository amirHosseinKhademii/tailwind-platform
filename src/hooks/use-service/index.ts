import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useService = () => {
  const { invalidateQueries } = useQueryClient();
  return {
    useGet: (props: IUseService) => {
      const { url, key, params, onError, onSuccess } = props;
      const asyncGet = async () => await axios.get(url, { params });
      return useQuery(key, asyncGet, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    },
    usePost: (props: IUseService) => {
      const { url, onError, onSuccess } = props;
      const asyncSave = async (model) => await axios.post(url, model);
      return useMutation(asyncSave, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    },
    usePut: (props: IUseService) => {
      const { url, onError, onSuccess } = props;
      const asyncEdit = async (model) => await axios.put(url, model);
      return useMutation(asyncEdit, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    },
    useDelete: (props: IUseService) => {
      const { url, onError, onSuccess } = props;
      const asyncDelete = async () => await axios.delete(url);
      return useMutation(asyncDelete, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    },
    useUpdate: (props: IUseService) => {
      const { key } = props;
      invalidateQueries(key);
    },
  };
};
