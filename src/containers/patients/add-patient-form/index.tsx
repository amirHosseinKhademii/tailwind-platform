import { useForm, useWatch } from "react-hook-form";
import { Form } from "components";
import {
  CHOCounting,
  ChristianName,
  CurrentCGMWear,
  CurrentStudy,
  DateOfBirth,
  DiabetesEducator,
  DiabetesManagementPump,
  DiabeticMedicalHistory,
  DKADetail,
  DKAExperience,
  EmailAddress,
  Endocrinologist,
  ExerciseDetail,
  ExerciseType,
  FrequencyOfSGBM,
  Gender,
  HadAbnormalKidney,
  HadFeetNeuropathy,
  HadretionopathyDiag,
  HadSevereHypo,
  HadUnawareHypo,
  Insulin,
  LatestHBA1CReading,
  LatestHBA1CReadingDate,
  PastCGMWear,
  PatientBio,
  PhoneNumber,
  PreferedContactMethod,
  PreferedContactTime,
  PreviousStudy1,
  PreviousStudy2,
  PreviousStudy3,
  PumpDetail,
  State,
  Subrub,
  Surname,
  DateDetailsUpdated,
  DateOfDiagnosisOfT1D,
  OtherMedicalIssue,
  Logistics,
  WillComeToSt,
  Availability,
  AvailabilityDetail,
  HasInternetAccess,
  NextStep,
  ComputerType,
  ContactDate,
  PWODReferal,
  DiscussionHeld,
  StudyForConsideration,
  DoNotCallUntil,
} from "./fields";

export const AddPatientForm = () => {
  const { handleSubmit, register, control } = useForm();

  const onSubmit = handleSubmit((state) => console.log(state));

  const state = useWatch({ control });

  return (
    <Form
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full mt-12 border-t border-gray-400 py-12"
      onSubmit={onSubmit}
    >
      <PatientBio register={register} />
      <Surname register={register} />
      <ChristianName register={register} />
      <CurrentStudy control={control} state={state} />
      <PreviousStudy1 control={control} state={state} />
      <PreviousStudy2 control={control} state={state} />
      <PreviousStudy3 control={control} state={state} />
      <DateOfBirth register={register} />
      <Gender control={control} state={state} />
      <PhoneNumber register={register} />
      <PreferedContactTime register={register} />
      <PreferedContactMethod control={control} state={state} />
      <DateDetailsUpdated register={register} />
      <EmailAddress register={register} />
      <Subrub register={register} />
      <State register={register} />
      <DiabeticMedicalHistory register={register} />
      <DateOfDiagnosisOfT1D register={register} />
      <CHOCounting control={control} state={state} />
      <ExerciseType control={control} state={state} />
      <ExerciseDetail register={register} />
      <DiabetesManagementPump control={control} state={state} />
      <PumpDetail state={state} register={register} />
      <Insulin register={register} />
      <CurrentCGMWear control={control} state={state} />
      <PastCGMWear control={control} state={state} />
      <FrequencyOfSGBM register={register} />
      <Endocrinologist register={register} />
      <DiabetesEducator register={register} />
      <LatestHBA1CReading register={register} />
      <LatestHBA1CReadingDate register={register} />
      <DKAExperience control={control} state={state} />
      <DKADetail state={state} register={register} />
      <HadSevereHypo control={control} state={state} />
      <HadUnawareHypo control={control} state={state} />
      <HadAbnormalKidney control={control} state={state} />
      <HadretionopathyDiag control={control} state={state} />
      <HadFeetNeuropathy control={control} state={state} />
      <OtherMedicalIssue register={register} />
      <Logistics register={register} />
      <WillComeToSt control={control} state={state} />
      <HasInternetAccess control={control} state={state} />
      <ComputerType register={register} />
      <PWODReferal register={register} />
      <DiscussionHeld register={register} />
      <ContactDate register={register} />
      <StudyForConsideration register={register} />
      <NextStep register={register} />
      <Availability control={control} state={state} />
      <AvailabilityDetail register={register} />
      <DoNotCallUntil register={register} />
      <button type="submit">Sub</button>
    </Form>
  );
};
