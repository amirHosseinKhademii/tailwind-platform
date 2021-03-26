import { Form } from "components";
import { useAddPatient } from "./use-add-patient";
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
  Submit,
} from "./fields";

export const AddPatientForm = () => {
  const { onSubmit, state, register, control, dirty, errors } = useAddPatient();

  return (
    <Form
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full mt-12 border-t border-gray-400 py-12"
      onSubmit={onSubmit}
    >
      <PatientBio register={register} errors={errors} />
      <Surname register={register} errors={errors} />
      <ChristianName register={register} errors={errors} />
      <CurrentStudy control={control} state={state} errors={errors} />
      <PreviousStudy1 control={control} state={state} errors={errors} />
      <PreviousStudy2 control={control} state={state} errors={errors} />
      <PreviousStudy3 control={control} state={state} errors={errors} />
      <DateOfBirth register={register} errors={errors} />
      <Gender control={control} state={state} errors={errors} />
      <PhoneNumber register={register} errors={errors} />
      <PreferedContactTime register={register} errors={errors} />
      <PreferedContactMethod control={control} state={state} errors={errors} />
      <DateDetailsUpdated register={register} errors={errors} />
      <EmailAddress register={register} errors={errors} />
      <Subrub register={register} errors={errors} />
      <State register={register} errors={errors} />
      <DiabeticMedicalHistory register={register} errors={errors} />
      <DateOfDiagnosisOfT1D register={register} errors={errors} />
      <CHOCounting control={control} state={state} errors={errors} />
      <ExerciseType control={control} state={state} errors={errors} />
      <ExerciseDetail register={register} errors={errors} />
      <DiabetesManagementPump control={control} state={state} errors={errors} />
      <PumpDetail state={state} register={register} errors={errors} />
      <Insulin register={register} errors={errors} />
      <CurrentCGMWear control={control} state={state} errors={errors} />
      <PastCGMWear control={control} state={state} errors={errors} />
      <FrequencyOfSGBM register={register} errors={errors} />
      <Endocrinologist register={register} errors={errors} />
      <DiabetesEducator register={register} errors={errors} />
      <LatestHBA1CReading register={register} errors={errors} />
      <LatestHBA1CReadingDate register={register} errors={errors} />
      <DKAExperience control={control} state={state} errors={errors} />
      <DKADetail state={state} register={register} errors={errors} />
      <HadSevereHypo control={control} state={state} />
      <HadUnawareHypo control={control} state={state} />
      <HadAbnormalKidney control={control} state={state} />
      <HadretionopathyDiag control={control} state={state} />
      <HadFeetNeuropathy control={control} state={state} />
      <OtherMedicalIssue register={register} errors={errors} />
      <Logistics register={register} errors={errors} />
      <WillComeToSt control={control} state={state} />
      <HasInternetAccess control={control} state={state} />
      <ComputerType register={register} errors={errors} />
      <PWODReferal register={register} errors={errors} />
      <DiscussionHeld register={register} errors={errors} />
      <ContactDate register={register} errors={errors} />
      <StudyForConsideration register={register} errors={errors} />
      <NextStep register={register} errors={errors} />
      <Availability control={control} state={state} errors={errors} />
      <AvailabilityDetail register={register} errors={errors} />
      <DoNotCallUntil register={register} errors={errors} />
      <Submit dirty={dirty} />
    </Form>
  );
};
