import * as yup from "yup";

export const personalInformationSchema = yup.object().shape({
  fullName: yup.string().required(),
  birthDate: yup
    .string()
    .required("Birth date is required")
    .matches(/^\d{4,}-\d{2}-\d{2}$/, "Birth date must be in YYYY-MM-DD format"),
  gender: yup.string().required(),
});
export type PersonalInformationType = yup.InferType<
  typeof personalInformationSchema
>;

export const contactInformationSchema = yup.object().shape({
  phone: yup.string().required(),
  email: yup.string().required(),
  socialContact: yup.string().required(),
});
export type ContactInformationType = yup.InferType<
  typeof contactInformationSchema
>;

export const addressInformationSchema = yup.object().shape({
  province: yup.string().required(),
  district: yup.string().required(),
  address: yup.string().required(),
});
export type AddressInformationType = yup.InferType<
  typeof addressInformationSchema
>;

export const careerInformationSchema = yup.object().shape({
  occupation: yup.string().required(),
  company: yup.string().required(),
  income: yup.string().required(),
});
export type CareerInformationType = yup.InferType<
  typeof careerInformationSchema
>;

export const confirmInformationSchema = yup.object().shape({
  note: yup.string().required(),
});
export type ConfirmInformationType = yup.InferType<
  typeof confirmInformationSchema
>;

export const userSchema = personalInformationSchema
  .concat(contactInformationSchema)
  .concat(addressInformationSchema)
  .concat(careerInformationSchema)
  .concat(confirmInformationSchema);

export type UserType = yup.InferType<typeof userSchema>;
