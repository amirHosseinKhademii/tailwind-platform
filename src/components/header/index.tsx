import { LinkNav } from "components";

export const Header = ({ className = "w-full" }) => {
  return (
    <header
      className={` h-12 bg-gray-800 flex items-center justify-between px-4 md:px-10 ${className}`}
    >
      <LinkNav size="title">Home</LinkNav>
      <LinkNav size="small" path="/login">
        Sign in
      </LinkNav>
    </header>
  );
};
