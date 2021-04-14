import { Input } from "components";
import { memo } from "react";

export const PatientDetails = memo(() => {
  return (
    <div className="grid gird-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 w-full">
      <Input size="small" disabled label="Current Study" value="Amir" />
      <Input size="small" disabled label="Previous Study" value="Amir" />
      <Input size="small" disabled label="Gender" value="Male" />
      <Input size="small" disabled label="Phone Number" value="123456789" />
      <Input size="small" disabled label="Phone Type" value="123456789" />
      <Input
        size="small"
        disabled
        label="Prefered Contact Date"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Prefered Contact Method"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Email Address"
        value="Availability Detail"
      />
      <Input size="small" disabled label="Subrub" value="Availability Detail" />
      <Input size="small" disabled label="State" value="Availability Detail" />
      <Input
        size="small"
        disabled
        label="Diabetes Type"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Date Of Diagnosis Of T1D"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="CHO Counting"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Exercise Type"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Exercise Detail"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Current Diabetes Management"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Infusion Line Type"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Current Insulin Use"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Current CGM Wear"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Past CGM Wear"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Frequency of Daily Fingerstick"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Endocrinologist"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Diabetes Educator"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Latest HbA1c Reading"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Latest HbA1c Reading Date"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="In the past 12 months, have you had Diabetic Ketoacidosis (DKA) requiring a hospital admission?"
        value="Yes"
        className="max-h-12"
      />
      <Input
        size="small"
        disabled
        label="In the past 12 months, have you had a severe Hypoglycaemic event requiring 3rd party assistance?"
        value="Yes"
        className="max-h-12"
      />
      <Input
        size="small"
        disabled
        label="Have you ever been diagnosed with Hypo-unawareness?"
        value="No"
        className="max-h-12"
      />
      <Input
        size="small"
        disabled
        label="Have you ever been diagnosed with abnormal kidney function?"
        value="Yes"
        className="max-h-12"
      />
      <Input
        size="small"
        disabled
        label="Have you ever been diagnosed with Retinopathy?"
        value="No"
        className="max-h-12"
      />
      <Input
        size="small"
        disabled
        label="Have you ever been diagnosed with foot neuropathy?"
        value="Yes"
        className="max-h-12"
      />
      <Input size="small" disabled label="Other Medical Issue" value="Test" />

      <Input
        size="small"
        disabled
        label="Will Come To St Vincent?"
        value="No"
        withError
      />
      <Input size="small" disabled label="Has Internet Access?" value="Yes" />
      <Input
        size="small"
        disabled
        label="Computer Type"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Discussion Held And What Was Discussed"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Contact Date"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="PWOD Referral"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Study For Consideration"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Availability"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Availability Detail"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Next Step"
        value="Availability Detail"
      />
      <Input
        size="small"
        disabled
        label="Do Not Call Until"
        value="Availability Detail"
      />
    </div>
  );
});
