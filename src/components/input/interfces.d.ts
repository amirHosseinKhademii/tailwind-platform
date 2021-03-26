interface IInput {
  className?: string;
  label?: string;
  register?: any;
  value?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "date";
  error?: string;
  name?: string;
  id?: string;
  required?: boolean;
  max?: string | number;
  min?: string | number;
}
