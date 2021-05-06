import { memo } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Input } from "components";

export const PasswordForm = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Form
      className="w-11/12 md:w-2/3 lg:w-1/2 mx-auto mt-20 grid grid-cols-1 gap-y-8 rounded shadow "
      onSubmit={handleSubmit((state) => console.log(state))}
    >
      <div className="text-center pt-6 pb-3  bg-cyan-600 h-18 text-white rounded-t text-lg font-semibold ">
        Recover your password
      </div>
      <div className="grid grid-cols-1 gap-y-10 px-10 py-4 bg-gradient-to-b from-cyan-300 ">
        <Input
          register={register}
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          error={errors["email"]?.message}
          className="mt-10"
        />
        <div className="col-center w-full my-6" slot="actions">
          <Button
            className="h-10 w-1/3 mb-6 bg-pink-700 text-white"
            role="confirm"
            type="submit"
          >
            Sumbit
          </Button>
        </div>
      </div>
    </Form>
  );
});
