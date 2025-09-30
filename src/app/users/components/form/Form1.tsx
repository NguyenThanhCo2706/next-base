"use client";

import InputField from "@/src/components/Commons/Form/InputField";
import DateField from "@/src/components/Commons/Form/DateField";
import SelectField from "@/src/components/Commons/Form/SelectField";
import { GENDER_OPTIONS } from "@/src/constants/common";
import { useForm } from "react-hook-form";
import Label from "@/src/components/Commons/Label";
import Error from "@/src/components/Commons/Error";
import { Dispatch, SetStateAction, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  PersonalInformationType,
  personalInformationSchema,
} from "@/src/libs/validation/userSchemas";
import { useAppDispatch, useAppSelector } from "@/src/libs/hooks/redux";
import { AppDispatch, RootState } from "@/src/stores";
import { updateUserInformation } from "@/src/stores/reducers/userInformationSlice";

export default function Form1({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const personalInformation = useAppSelector(
    (state: RootState) => state.userInformation
  );
  const dispatch = useAppDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<PersonalInformationType>({
    resolver: yupResolver(personalInformationSchema),
    mode: "all",
    defaultValues: personalInformation,
  });

  useEffect(() => {
    return () => {
      dispatch(updateUserInformation(getValues()));
    };
  }, []);

  const onSubmit = (data: PersonalInformationType) => {
    dispatch(updateUserInformation(data));
    setStep((prev) => prev + 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-6 max-h-96 overflow-y-auto">
        <div className="form-slide active">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Thông Tin Cá Nhân
          </h3>
          <div className="space-y-4">
            <div>
              <Label>Họ và tên *</Label>
              <InputField
                name="fullName"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                register={register}
              />
              <Error>{errors.fullName?.message}</Error>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Ngày sinh *</Label>
                <DateField
                  register={register}
                  name="birthDate"
                  defaultValue="2001-01-10"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Error>{errors.birthDate?.message}</Error>
              </div>
              <div>
                <Label>Giới tính *</Label>
                <SelectField
                  register={register}
                  name="gender"
                  className="w-full px-4 py-[14px] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  options={GENDER_OPTIONS}
                />
                <Error>{errors.gender?.message}</Error>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
        <div></div>
        <div className="flex space-x-3">
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
          >
            Tiếp theo
          </button>
        </div>
      </div>
    </form>
  );
}
