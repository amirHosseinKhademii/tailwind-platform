import { useForm, useWatch } from "react-hook-form";
import { useService } from "hooks";

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

export const useAddPatient = (props: IPatientForm) => {
  const { isEditing, editInitials } = props;

  const { usePost, usePut } = useService();

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

  const { mutate: edit } = usePut({ url: "" });

  return {
    register,
    control,
    setValue,
    errors,
    isDirty,
    state: useWatch({ control, defaultValue: defaultValues }),
    onSubmit: handleSubmit((state) => {
      console.log(state);
      // isEditing ? edit(state) : save(state);
    }),
  };
};
