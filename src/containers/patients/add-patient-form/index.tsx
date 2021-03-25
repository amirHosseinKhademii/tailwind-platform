import { useForm, useWatch } from "react-hook-form";
import { Input, Form, Select, SelectOption } from "components";

export const AddPatientForm = () => {
  const { handleSubmit, register, control } = useForm();

  const onSubmit = handleSubmit((state) => console.log(state));

  const state = useWatch({ control });

  return (
    <Form
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full mt-12 border-t border-gray-400 pt-12"
      onSubmit={onSubmit}
    >
      <Input label="Patient Id" name="PatientId" register={register} />
      <Input label="Surname" name="Surname" register={register} />
      <Input label="Christian Name" name="ChristianName" register={register} />
      <Input label="Current Study" name="CurrentStudy" register={register} />
      <Input
        label="Previous Study 1"
        name="PreviousStudy1"
        register={register}
      />
      <Input
        label="Previous Study 2"
        name="PreviousStudy2"
        register={register}
      />
      <Input
        label="Previous Study 3"
        name="PreviousStudy3"
        register={register}
      />
      <Input label="Date Of Birth" name="DateOfBirth" register={register} />
      <Input label="Gender" name="Gender" register={register} />
      <Input label="Phone Number" name="PhoneNumber" register={register} />
      <Input
        label="Prefered Contact Time"
        name="PreferedContactTime"
        register={register}
      />
      <Input
        label="Prefered Contact Method"
        name="PreferedContactMethod"
        register={register}
      />
      <Input
        label="Date Details Updated"
        name="DateDetailsUpdated"
        register={register}
      />
      <Input label="Email Address" name="EmailAddress" register={register} />
      <Input label="Subrub" name="Subrub" register={register} />
      <Input label="State" name="State" register={register} />
      <Input
        label="Will Come To St Vincent"
        name="WillComeToStVincent"
        register={register}
      />
      <Input
        label="Date Of Diagnosis Of T1D"
        name="DateOfDiagnosisOfT1D"
        register={register}
      />
      <Input label="CHO Counting" name="CHOCounting" register={register} />
      <Input label="Exercise" name="Exercise" register={register} />
      <Input
        label="Diabetes Management Pump"
        name="DiabetesManagementPump"
        register={register}
      />
      <Input label="Insulin" name="Insulin" register={register} />
      <Select
        label="Current CGM Wear"
        name="CurrentCGMWear"
        register={register}
        control={control}
        value={state["CurrentCGMWear"]}
      >
        <SelectOption value="MDT" selected={state["CurrentCGMWear"] === "MDT"}>
          MDT
        </SelectOption>
        <SelectOption
          value="Dexcom"
          selected={state["CurrentCGMWear"] === "Dexcom"}
        >
          Dexcom
        </SelectOption>
        <SelectOption
          value="Libre"
          selected={state["CurrentCGMWear"] === "Libre"}
        >
          Libre
        </SelectOption>
      </Select>
      <Input label="Past CGM Wear" name="PastCGMWear" register={register} />
      <Input
        label="Frequency Of SBGM"
        name="FrequencyOfSBGM"
        register={register}
      />
      <Input
        label="Endocrinologist"
        name="Endocrinologist"
        register={register}
      />
      <Input
        label="Diabetes Educator"
        name="DiabetesEducator"
        register={register}
      />
      <Input label="DKA Expreience" name="DKAExpreience" register={register} />
      <Input label="Exercise" name="Exercise" register={register} />
      <Input label="Subrub" name="third" register={register} />
      <Input label="Subrub" name="third" register={register} />
      <Input label="Exercise" name="Exercise" register={register} />
      <Input label="Subrub" name="third" register={register} />
      <Input label="Subrub" name="third" register={register} />
      <Input label="Exercise" name="Exercise" register={register} />
      <Input label="Subrub" name="third" register={register} />
      <Input label="Subrub" name="third" register={register} />
      <button type="submit">Sub</button>
    </Form>
  );
};
