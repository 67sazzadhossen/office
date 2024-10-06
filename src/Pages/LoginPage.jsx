"use client";
import MainLayout from "@/Layout/MainLayout";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useLoggedUser from "@/Hooks/useLoggedUser";
import SocialLogin from "@/Components/Shared/SocialLogin/SocialLogin";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { user, isAdmin, status } = useLoggedUser();
  console.log(user, isAdmin, status);
  const authenticated = status === "authenticated";

  if (authenticated) {
    router.push("/");
  }

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    const res = signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  };
  return (
    <MainLayout>
      <div className="min-h-screen bg-black text-white flex justify-center flex-col items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-1/3 border border-gray-800 p-8 rounded-xl backdrop-blur-lg shadow-inner"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="email"
              className="input input-bordered text-black"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered text-black"
              {...register("password", { required: true })}
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-white">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className={"divider divider-neutral w-1/4 mx-auto"}>
          Or Login With
        </div>
        <SocialLogin></SocialLogin>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
