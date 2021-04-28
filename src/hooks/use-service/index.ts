import axios from "axios";
import { useCallback } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useService = () => {
  const { invalidateQueries } = useQueryClient();
  return {
    get: useCallback((props: IUseService) => {
      const { url, key, params, onError, onSuccess } = props;
      const asyncGet = async () => await axios.get(url, { params });
      return useQuery(key, asyncGet, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    }, []),
    save: useCallback((props) => {
      const { url, onError, onSuccess } = props;
      const asyncSave = async (model) => await axios.post(url, model);
      return useMutation(asyncSave, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    }, []),
    edit: useCallback((props) => {
      const { url, onError, onSuccess } = props;
      const asyncEdit = async (model) => await axios.put(url, model);
      return useMutation(asyncEdit, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    }, []),
    delete: useCallback((props) => {
      const { url, onError, onSuccess } = props;
      const asyncDelete = async () => await axios.delete(url);
      return useMutation(asyncDelete, {
        ...(onSuccess && { onSuccess }),
        ...(onError && { onError }),
      });
    }, []),
    update: useCallback((props) => {
      const { key } = props;
      invalidateQueries(key);
    }, []),
  };
};
