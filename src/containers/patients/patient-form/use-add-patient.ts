import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useService } from "hooks";
import { years } from "utils";

const defaultValues = {
  surname: "",
  christian_name: "",
  current_study: "",
  previous_study: "",
  date_of_birth: "",
  gender: "",
  phone_number: "",
  phone_type: "",
  preferred_contact_time: "",
  preferred_contact_method: "",
  email: "",
  suburb: "",
  state: "",
};

export const useAddPatient = () => {
  const { usePost } = useService();
  const {
    handleSubmit,
    register,
    control,
    formState: { isDirty, errors },
    setValue,
  } = useForm({
    defaultValues,
  });

  const { mutate: save } = usePost({ url: "" });

  return {
    register,
    control,
    setValue,
    errors,
    isDirty,
    state: useWatch({ control, defaultValue: defaultValues }),
    years: useMemo(() => years, []),
    onSubmit: handleSubmit((state) => {
      console.log(state);
      //save(state);
    }),
  };
};
