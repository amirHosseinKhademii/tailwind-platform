import { Form, Grid, Text } from "components";
import { useAddPatient } from "./use-add-patient";
import {
  CHOCounting,
  ChristianName,
  CurrentCGMWear,
  CurrentStudy,
  DateOfBirth,
  DiabetesEducator,
  CurrentDiabetesManagement,
  DKADetail,
  DKAExperience,
  EmailAddress,
  Endocrinologist,
  ExerciseDetail,
  ExerciseType,
  FrequencyOfDailyFingerstick,
  Gender,
  HadAbnormalKidney,
  HadFeetNeuropathy,
  HadretionopathyDiag,
  HadSevereHypo,
  HadUnawareHypo,
  CurrentInsulinUse,
  LatestHBA1CReading,
  LatestHBA1CReadingDate,
  PastCGMWear,
  PhoneNumber,
  PreferedContactMethod,
  PreferedContactDate,
  PreviousStudy1,
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
  CHOCountingOther,
  DiabetesType,
  PhoneType,
  InfusionLineType,
} from "./fields";

export const PatientForm = () => {
  const { onSubmit, state, register, control, dirty, errors } = useAddPatient();

  return (
    <Form className="w-full " onSubmit={onSubmit}>
      <Text
        size="header"
        className="mt-10 w-full bg-cyan-600 text-white p-5 rounded-t border-b border-cyan-400  "
      >
        Patient Bio
      </Text>
      <div className="w-full p-5">
        <Grid className="mt-4">
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
            state={state["PreviousStudy"]}
            error={errors["PreviousStudy"]?.message}
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
          <PhoneType
            control={control}
            state={state["PhoneType"]}
            error={errors["PhoneType"]?.message}
          />
        </Grid>
        <Grid className=" pt-6 mt-4">
          <PreferedContactDate
            register={register}
            error={errors["PreferedContactDate"]?.message}
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
      </div>

      <Text
        size="header"
        className="mt-10 w-full bg-cyan-600 text-white p-5 rounded-t border-b border-cyan-400 "
      >
        Medical History
      </Text>
      <div className="w-full p-5">
        <Grid className=" mt-4 ">
          <DiabetesType
            control={control}
            state={state["DiabetesType"]}
            error={errors["DiabetesType"]?.message}
          />
          <DateOfDiagnosisOfT1D
            control={control}
            error={errors["DateOfDiagnosisOfT1D"]?.message}
            state={state["DateOfDiagnosisOfT1D"]}
          />
          <CHOCounting
            control={control}
            state={state["CHOCounting"]}
            error={errors["CHOCounting"]?.message}
            register={register}
          />
          {state["CHOCounting"] && state["CHOCounting"].includes("Other") && (
            <CHOCountingOther
              register={register}
              state={state["CHOCountingOther"]}
              error={state["CHOCountingOther"]?.message}
            />
          )}
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
          <CurrentDiabetesManagement
            control={control}
            state={state["CurrentDiabetesManagement"]}
            error={errors["CurrentDiabetesManagement"]?.message}
          />
          <InfusionLineType
            control={control}
            state={state["InfusionLineType"]}
            error={errors["InfusionLineType"]?.message}
          />
          <PumpDetail
            register={register}
            state={state["CurrentDiabetesManagement"]}
            error={errors["PumpDetails"]?.message}
          />
        </Grid>
        <Grid className=" pt-6 mt-4">
          <CurrentInsulinUse
            control={control}
            state={state["CurrentInsulinUse"]}
          />
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
          <FrequencyOfDailyFingerstick
            control={control}
            state={state["FrequencyOfDailyFingerstick"]}
          />
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
      </div>

      <Text
        size="header"
        className="mt-10 w-full bg-cyan-600 text-white p-5 rounded-t border-b border-cyan-400 "
      >
        Logistics
      </Text>
      <div className="w-full p-5">
        <Grid className="mt-4 ">
          <WillComeToSt
            control={control}
            state={state["WillComeToStVincent"]}
          />
        </Grid>
        <Grid className=" pt-6 mt-4">
          <HasInternetAccess
            control={control}
            state={state["HasInternetAccess"]}
          />
          <ComputerType
            control={control}
            error={errors["ComputerType"]?.message}
            state={state["ComputerType"]}
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
      </div>
      <Submit dirty={dirty} />
    </Form>
  );
};
