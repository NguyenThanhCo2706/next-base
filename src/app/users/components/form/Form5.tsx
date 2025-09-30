"use client";

import Error from "@/src/components/Commons/Error";
import TextAreaField from "@/src/components/Commons/Form/TextAreaField";
import Label from "@/src/components/Commons/Label";
import { useAppDispatch, useAppSelector } from "@/src/libs/hooks/redux";
import {
  confirmInformationSchema,
  ConfirmInformationType,
} from "@/src/libs/validation/userSchemas";
import { AppDispatch, RootState } from "@/src/stores";
import { updateUserInformation } from "@/src/stores/reducers/userInformationSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Form5({
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
  } = useForm<ConfirmInformationType>({
    resolver: yupResolver(confirmInformationSchema),
    defaultValues: contactInformation,
  });

  useEffect(() => {
    return () => {
      dispatch(updateUserInformation(getValues()));
    };
  }, []);

  const onSubmit = (data: ConfirmInformationType) => {
    dispatch(updateUserInformation(data));
  };

  console.log(contactInformation);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-6 max-h-96 overflow-y-auto">
        <div className="form-slide">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Xác Nhận Thông Tin
          </h3>
          <div className="space-y-4">
            <div>
              <Label>Ghi chú thêm</Label>
              <TextAreaField
                register={register}
                name="note"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Thông tin bổ sung hoặc yêu cầu đặc biệt..."
              ></TextAreaField>
              <Error>{errors.note?.message}</Error>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreement"
                  required
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="text-sm text-gray-700">
                  Tôi đồng ý với{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    điều khoản sử dụng
                  </a>{" "}
                  và{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    chính sách bảo mật
                  </a>{" "}
                  của công ty. Tôi xác nhận rằng tất cả thông tin đã cung cấp là
                  chính xác và đầy đủ.
                </label>
              </div>
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
            className="px-6 py-2 bg-gradient-to-r from-red-600 to-purple-600 text-white rounded-lg hover:from-red-700 hover:to-purple-700 transition-all duration-200"
          >
            Hoàn thành
          </button>
        </div>
      </div>
    </form>
  );
}
