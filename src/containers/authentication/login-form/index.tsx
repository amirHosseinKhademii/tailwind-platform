import { Button, Form, Input } from "components";
import { memo } from "react";
import { useForm } from "react-hook-form";

export const LoginForm = memo(() => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <Form
      className="w-full grid grid-cols-1 gap-y-8 border border-gray-300 rounded p-8 shadow bg-gray-200"
      onSubmit={handleSubmit((state) => console.log(state))}
    >
      <Input
        register={register}
        name="email"
        type="email"
        required
        label="Email"
        error={errors["email"]?.message}
        className="mt-6"
      />
      <Input
        register={register}
        name="password"
        type="password"
        required
        label="Password"
        error={errors["password"]?.message}
      />
      <Button
        type="submit"
        className="bg-indigo-500 text-white w-1/2 md:w-1/3 mx-auto my-6"
      >
        Login
      </Button>
    </Form>
  );
});
