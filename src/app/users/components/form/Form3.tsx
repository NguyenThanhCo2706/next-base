"use client";

import Error from "@/src/components/Commons/Error";
import SelectField from "@/src/components/Commons/Form/SelectField";
import TextAreaField from "@/src/components/Commons/Form/TextAreaField";
import Label from "@/src/components/Commons/Label";
import { DISTRICT_OPTIONS, PROVINCE_OPTIONS } from "@/src/constants/common";
import { useAppDispatch, useAppSelector } from "@/src/libs/hooks/redux";
import {
  addressInformationSchema,
  AddressInformationType,
} from "@/src/libs/validation/userSchemas";
import { AppDispatch, RootState } from "@/src/stores";
import { updateUserInformation } from "@/src/stores/reducers/userInformationSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Form3({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const contactInformation = useAppSelector(
    (state: RootState) => state.userInformation
  );
  const dispatch = useAppDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<AddressInformationType>({
    resolver: yupResolver(addressInformationSchema),
    defaultValues: contactInformation,
  });

  useEffect(() => {
    return () => {
      dispatch(updateUserInformation(getValues()));
    };
  }, []);

  const onSubmit = (data: AddressInformationType) => {
    dispatch(updateUserInformation(data));

    setStep((prev) => prev + 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-6 max-h-96 overflow-y-auto">
        <div className="form-slide">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Địa Chỉ</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Tỉnh/Thành phố *</Label>
                <SelectField
                  register={register}
                  options={PROVINCE_OPTIONS}
                  name="province"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Error>{errors.province?.message}</Error>
              </div>
              <div>
                <Label>Quận/Huyện *</Label>
                <SelectField
                  register={register}
                  options={DISTRICT_OPTIONS}
                  name="district"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Error>{errors.district?.message}</Error>
              </div>
            </div>
            <div>
              <Label>Địa chỉ chi tiết *</Label>
              <TextAreaField
                register={register}
                name="address"
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Số nhà, tên đường, phường/xã..."
              />
              <Error>{errors.address?.message}</Error>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
        <button
          type="button"
          onClick={() => setStep((prev) => prev - 1)}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          Quay lại
        </button>{" "}
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
