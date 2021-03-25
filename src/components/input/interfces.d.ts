interface IInput {
  className?: string;
  wrapperClass?: string;
  label?: string;
  register?: any;
  value?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  error?: string;
  name?: string;
  id?: string;
}
