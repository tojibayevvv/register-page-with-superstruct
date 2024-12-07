import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const VALID_EMAIL = "abdullohspersonaldevelopment.28@gmail.com";
const VALID_PASSWORD = "12345678";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.email === VALID_EMAIL && data.password === VALID_PASSWORD) {
      // boshqa pagega utish
      navigate("/congrats");
    } else {
      // Set error 
      if (data.email !== VALID_EMAIL) {
        setError("email", { type: "manual", message: "Invalid email address" });
      }
      if (data.password !== VALID_PASSWORD) {
        setError("password", {
          type: "manual",
          message: "Incorrect password",
        });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              {...register("email")}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              className="w-full border rounded-lg p-2 mt-1"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
