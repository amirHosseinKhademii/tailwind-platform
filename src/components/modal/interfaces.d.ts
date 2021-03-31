interface IModal {
  size?: "sm" | "md" | "lg" | "xl";
  children?: any;
  onClose?: MouseEventHandler<HTMLDivElement>;
  className?: string;
}
