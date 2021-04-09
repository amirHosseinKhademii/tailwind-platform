import { Button, Form, Input } from "components";
import { memo } from "react";
import { useForm } from "react-hook-form";

export const LoginForm = memo(() => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <Form
      className="w-11/12 md:w-2/3 lg:w-1/2 mx-auto mt-20 grid grid-cols-1 gap-y-8 border border-gray-300 rounded shadow "
      onSubmit={handleSubmit((state) => console.log(state))}
    >
      <div className="text-center pt-6 pb-3  bg-cyan-600 h-18 text-white rounded-t text-lg font-semibold ">
        Log in
      </div>
      <div className="grid grid-cols-1 gap-y-8 px-10 py-4">
        <Input
          register={register}
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          error={errors["email"]?.message}
          className=""
        />
        <Input
          register={register}
          name="password"
          type="password"
          required
          placeholder="Enter your Password"
          error={errors["password"]?.message}
        />
        <Button
          type="submit"
          className="bg-indigo-900 text-white w-1/2 md:w-1/3 mx-auto mb-6 h-10"
        >
          Log In
        </Button>
      </div>
    </Form>
  );
});
