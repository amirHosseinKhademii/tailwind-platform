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
      <PatientBio register={register} error={errors["PatientBio"]?.message} />
      <Surname register={register} error={errors["Surname"]?.message} />
      <ChristianName
        register={register}
        error={errors["ChristianName"]?.message}
      />
      <CurrentStudy
        control={control}
        state={state["CurrentStudy"]}
        error={errors["CurrentStudy"]?.message}
      />
      <PreviousStudy1
        control={control}
        state={state["PreviousStudy1"]}
        error={errors["PreviousStudy1"]?.message}
      />
      <PreviousStudy2
        control={control}
        state={state["PreviousStudy2"]}
        error={errors["PreviousStudy2"]?.message}
      />
      <PreviousStudy3
        control={control}
        state={state["PreviousStudy3"]}
        error={errors["PreviousStudy3"]?.message}
      />
      <DateOfBirth register={register} error={errors["DateOfBirth"]?.message} />
      <Gender
        control={control}
        state={state["Gender"]}
        error={errors["Gender"]?.message}
      />
      <PhoneNumber register={register} error={errors["PhoneNumber"]?.message} />
      <PreferedContactTime
        register={register}
        error={errors["PreferedContactTime"]?.message}
      />
      <PreferedContactMethod
        control={control}
        state={state["PreferedContactMethod"]}
        error={errors["PreferedContactMethod"]?.message}
      />
      <DateDetailsUpdated
        register={register}
        error={errors["DateDetailsUpdated"]?.message}
      />
      <EmailAddress
        register={register}
        error={errors["EmailAddress"]?.message}
      />
      <Subrub register={register} error={errors["Subrub"]?.message} />
      <State register={register} error={errors["State"]?.message} />
      <DiabeticMedicalHistory
        register={register}
        error={errors["DiabeticHistory"]?.message}
      />
      <DateOfDiagnosisOfT1D
        register={register}
        error={errors["DateOfDiagnosisOfT1D"]?.message}
      />
      <CHOCounting
        control={control}
        state={state["CHOCounting"]}
        error={errors["CHOCounting"]?.message}
      />
      <ExerciseType
        control={control}
        state={state["ExerciseType"]}
        error={errors["ExerciseType"]?.message}
      />
      <ExerciseDetail
        register={register}
        error={errors["ExerciseDetail"]?.message}
      />
      <DiabetesManagementPump
        control={control}
        state={state["DiabetesManagementPump"]}
        error={errors["DiabetesManagementPump"]?.message}
      />
      <PumpDetail
        register={register}
        state={state["DiabetesManagementPump"]}
        error={errors["PumpDetails"]?.message}
      />
      <Insulin register={register} error={errors["Insulin"]?.message} />
      <CurrentCGMWear
        control={control}
        state={state["CurrentCGMWear"]}
        error={errors["CurrentCGMWear"]?.message}
      />
      <PastCGMWear
        control={control}
        state={state["PastCGMWear"]}
        error={errors["PastCGMWear"]?.message}
      />
      <FrequencyOfSGBM
        register={register}
        error={errors["FrequencyOfSBGM"]?.message}
      />
      <Endocrinologist
        register={register}
        error={errors["Endocrinologist"]?.message}
      />
      <DiabetesEducator
        register={register}
        error={errors["DiabetesEducator"]?.message}
      />
      <LatestHBA1CReading
        register={register}
        error={errors["LatestHbA1cReading"]?.message}
      />
      <LatestHBA1CReadingDate
        register={register}
        error={errors["LatestHbA1cReadingDate"]?.message}
      />
      <DKAExperience control={control} state={state["DKAExpreience"]} />
      <DKADetail
        register={register}
        state={state["DKAExpreience"]}
        error={errors["DKADetail"]?.message}
      />
      <HadSevereHypo
        control={control}
        state={state["HadSevereHypoglycaemiaEvents"]}
      />
      <HadUnawareHypo control={control} state={state["HadUnawareHypo"]} />
      <HadAbnormalKidney control={control} state={state["HadAbnormalkidney"]} />
      <HadretionopathyDiag
        control={control}
        state={state["HadRetionopathyDiagnosis"]}
      />
      <HadFeetNeuropathy control={control} state={state["HadFeetNeuropathy"]} />
      <OtherMedicalIssue
        register={register}
        error={errors["OtherMedicalIssue"]?.message}
      />
      <Logistics register={register} error={errors["Logistics"]?.message} />
      <WillComeToSt control={control} state={state["WillComeToStVincent"]} />
      <HasInternetAccess control={control} state={state["HasInternetAccess"]} />
      <ComputerType
        register={register}
        error={errors["ComputerType"]?.message}
      />
      <PWODReferal
        register={register}
        error={errors["PWODReferral"]?.message}
      />
      <DiscussionHeld
        register={register}
        error={errors["Discussionheld"]?.message}
      />
      <ContactDate register={register} error={errors["ContactDate"]?.message} />
      <StudyForConsideration
        register={register}
        error={errors["StudyForConsideration"]?.message}
      />
      <NextStep register={register} error={errors["NextStep"]?.message} />
      <Availability
        control={control}
        state={state["Availability"]}
        error={errors["Availability"]?.message}
      />
      <AvailabilityDetail
        register={register}
        error={errors["AvailabilityDetail"]?.message}
      />
      <DoNotCallUntil
        register={register}
        error={errors["DoNotCallUntil"]?.message}
      />
      <Submit dirty={dirty} />
    </Form>
  );
};
