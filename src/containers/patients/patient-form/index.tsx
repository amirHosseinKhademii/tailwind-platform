import { Form, Grid, Text } from "components";
import { useAddPatient } from "./use-add-patient";
import {
  CHOCounting,
  ChristianName,
  CurrentCGMWear,
  CurrentStudy,
  DateOfBirth,
  DiabetesEducator,
  DiabetesManagementPump,
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
  DateOfDiagnosisOfT1D,
  OtherMedicalIssue,
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

export const PatientForm = () => {
  const { onSubmit, state, register, control, dirty, errors } = useAddPatient();

  return (
    <Form className="w-full my-10" onSubmit={onSubmit}>
      <Text size="header">Patient Bio</Text>
      <Grid className=" pt-6 mt-4 border-t border-gray-400">
        <Surname register={register} error={errors["Surname"]?.message} />
        <ChristianName
          register={register}
          error={errors["ChristianName"]?.message}
        />
      </Grid>
      <Grid className=" pt-6 mt-4">
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
      </Grid>
      <Grid className=" pt-6 mt-4">
        <DateOfBirth
          register={register}
          error={errors["DateOfBirth"]?.message}
        />
        <Gender
          control={control}
          state={state["Gender"]}
          error={errors["Gender"]?.message}
        />
      </Grid>
      <Grid className=" pt-6 mt-4">
        <PhoneNumber
          register={register}
          error={errors["PhoneNumber"]?.message}
        />
        <PreferedContactTime
          register={register}
          error={errors["PreferedContactTime"]?.message}
        />
        <PreferedContactMethod
          control={control}
          state={state["PreferedContactMethod"]}
          error={errors["PreferedContactMethod"]?.message}
        />
      </Grid>
      <Grid className=" pt-6 mt-4">
        <EmailAddress
          register={register}
          error={errors["EmailAddress"]?.message}
        />
        <Subrub register={register} error={errors["Subrub"]?.message} />
        <State register={register} error={errors["State"]?.message} />
      </Grid>
      <Text size="header" className="mt-10">
        Diabetic & Medical History
      </Text>
      <Grid className=" pt-6 mt-4 border-t border-gray-400">
        <DateOfDiagnosisOfT1D
          register={register}
          error={errors["DateOfDiagnosisOfT1D"]?.message}
        />
        <CHOCounting
          control={control}
          state={state["CHOCounting"]}
          error={errors["CHOCounting"]?.message}
        />
      </Grid>
      <Grid className=" pt-6 mt-4">
        <ExerciseType
          control={control}
          state={state["ExerciseType"]}
          error={errors["ExerciseType"]?.message}
        />
        <ExerciseDetail
          register={register}
          error={errors["ExerciseDetail"]?.message}
        />
      </Grid>
      <Grid className=" pt-6 mt-4">
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
      </Grid>
      <Grid className=" pt-6 mt-4">
        <Insulin control={control} state={state["Insulin"]} />
      </Grid>
      <Grid className=" pt-6 mt-4">
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
      </Grid>
      <Grid className=" pt-6 mt-4">
        <FrequencyOfSGBM control={control} state={state["FrequencyOfSBGM"]} />
      </Grid>
      <Grid className=" pt-6 mt-4">
        <Endocrinologist
          register={register}
          error={errors["Endocrinologist"]?.message}
        />
        <DiabetesEducator
          register={register}
          error={errors["DiabetesEducator"]?.message}
        />
      </Grid>
      <Grid className=" pt-6 mt-4">
        <LatestHBA1CReading
          register={register}
          error={errors["LatestHbA1cReading"]?.message}
        />
        <LatestHBA1CReadingDate
          register={register}
          error={errors["LatestHbA1cReadingDate"]?.message}
        />
      </Grid>
      <Grid className=" pt-6 mt-4">
        <DKAExperience control={control} state={state["DKAExpreience"]} />
        <DKADetail
          register={register}
          state={state["DKAExpreience"]}
          error={errors["DKADetail"]?.message}
        />
      </Grid>
      <Grid className=" pt-6 mt-4">
        <HadSevereHypo
          control={control}
          state={state["HadSevereHypoglycaemiaEvents"]}
        />
        <HadUnawareHypo control={control} state={state["HadUnawareHypo"]} />
      </Grid>
      <Grid className=" pt-6 mt-4">
        <HadAbnormalKidney
          control={control}
          state={state["HadAbnormalkidney"]}
        />
        <HadretionopathyDiag
          control={control}
          state={state["HadRetionopathyDiagnosis"]}
        />
        <HadFeetNeuropathy
          control={control}
          state={state["HadFeetNeuropathy"]}
        />
        <OtherMedicalIssue
          register={register}
          error={errors["OtherMedicalIssue"]?.message}
        />
      </Grid>
      <Text size="header" className="mt-10">
        Logistic
      </Text>
      <Grid className=" pt-6 mt-4 border-t border-gray-400">
        <WillComeToSt control={control} state={state["WillComeToStVincent"]} />
      </Grid>
      <Grid className=" pt-6 mt-4">
        <HasInternetAccess
          control={control}
          state={state["HasInternetAccess"]}
        />
        <ComputerType
          register={register}
          error={errors["ComputerType"]?.message}
        />
      </Grid>
      <Grid className=" pt-6 mt-4">
        <DiscussionHeld
          register={register}
          error={errors["Discussionheld"]?.message}
        />
        <ContactDate
          register={register}
          error={errors["ContactDate"]?.message}
        />
      </Grid>
      <Grid className=" pt-6 mt-4">
        <PWODReferal
          register={register}
          error={errors["PWODReferral"]?.message}
        />
        <StudyForConsideration
          register={register}
          error={errors["StudyForConsideration"]?.message}
        />
      </Grid>
      <Grid className=" pt-6 mt-4">
        <Availability
          control={control}
          state={state["Availability"]}
          error={errors["Availability"]?.message}
        />
        <AvailabilityDetail
          register={register}
          error={errors["AvailabilityDetail"]?.message}
        />
      </Grid>
      <Grid className=" pt-6 mt-4">
        <NextStep register={register} error={errors["NextStep"]?.message} />
        <DoNotCallUntil
          register={register}
          error={errors["DoNotCallUntil"]?.message}
        />
      </Grid>
      <Submit dirty={dirty} />
    </Form>
  );
};
