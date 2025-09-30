"use client";

import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/src/libs/hooks/redux";
import FormRegisterUser from "@/src/app/users/components/form/Form";
import "./styles.scss";

export type FormDataUser = {
  fullName: string;
};

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeSuccessMessage = () => {};

  return (
    <div className="box-border bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 min-h-screen flex items-center justify-center p-4">
      <button
        onClick={openModal}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
      >
        Đăng Ký Thông Tin Khách Hàng
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 modal-backdrop items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-200 text-2xl font-bold"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-center">
                Đăng Ký Thông Tin
              </h2>
            </div>

            <FormRegisterUser />
          </div>
        </div>
      )}

      {/* <!-- Thông báo thành công --> */}
      <div
        id="successMessage"
        className="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Đăng ký thành công!
          </h3>
          <p className="text-gray-600 mb-6">
            Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ với bạn trong thời gian
            sớm nhất.
          </p>
          <button
            onClick={closeSuccessMessage}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
