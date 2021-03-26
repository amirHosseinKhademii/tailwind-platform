import { Select, SelectOption } from "components";

export const PreferedContactMethod = ({ control, state }) => {
  return (
    <Select
      label="Prefered Contact Method"
      name="PreferedContactMethod"
      control={control}
      value={state["PreferedContactMethod"]}
    >
      <SelectOption
        value="Email"
        selected={state["PreferedContactMethod"] === "Email"}
      >
        Email
      </SelectOption>
      <SelectOption
        value="Phone"
        selected={state["PreferedContactMethod"] === "Phone"}
      >
        Phone
      </SelectOption>
      <SelectOption
        value="Either"
        selected={state["PreferedContactMethod"] === "Either"}
      >
        Either
      </SelectOption>
    </Select>
  );
};
