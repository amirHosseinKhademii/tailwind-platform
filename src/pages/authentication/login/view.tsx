import { Button, Form, Input, Text } from "components";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <Form
      className="w-full grid grid-cols-1 gap-y-8"
      onSubmit={handleSubmit((state) => console.log(state))}
    >
      <Text className="text-center mb-10" size="title">
        Login
      </Text>
      <Input
        register={register}
        name="email"
        type="email"
        required
        label="Email"
        error={errors["email"]?.message}
      />
      <Input
        register={register}
        name="password"
        type="password"
        required
        label="Password"
        error={errors["password"]?.message}
      />
      <Button type="submit" className="bg-indigo-500 text-white mx-32 my-10">
        Login
      </Button>
    </Form>
  );
};

export default Login;
