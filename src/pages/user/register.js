import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPW] = useState("");
  const [PWConfirm, setPWConfirm] = useState("");

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== PWConfirm) {
      alert("Passwords do not match");
      return;
    }

    try {
      const checkResponse = await axios.get(`/api/check-email?email=${email}`);
      const emailExists = checkResponse.data.emailExists;

      if (emailExists) {
        alert("Email already exists");
        return;
      }

      const response = await axios.post("/api/register", {
        email,
        password,
      });
      alert("Registration successful");
      router.push("/user/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-gray-200 flex justify-center items-center h-screen">
        <div className="flex bg-white shadow-xl">
          <img
            src="/register-image.jpg"
            alt="register"
            className="w-96 h-96 md:h-auto object-cover md:col-span-2 hidden lg:block"
          />

          <form onSubmit={handleSubmit} className="p-7">
            <div className="flex items-center mb-20">
              <Image
                src="/logo.jpg"
                width={100}
                height={100}
                alt="logo"
                className="w-9 h-9"
              />
              <span className="text-gray-700 font-semibold font-borel text-lg pt-3">
                KETI
              </span>
            </div>

            <div className="px-16">
              <div className="my-7">
                <h1 className="text-5xl font-black font-borel  text-center">
                  Register
                </h1>
                <p className="text-gray-500 text-center">
                  Thank you for joining us!
                </p>
              </div>

              <div>
                <span className="font-ubuntu">Email</span>
                <input
                  type="email"
                  value={email}
                  className="w-full rounded-sm border-2 border-b-4 border-black focus:outline-none h-9 indent-2"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  required
                />
              </div>

              <div className="mt-2">
                <span className="font-ubuntu">Password</span>
                <input
                  type="password"
                  value={password}
                  className="w-full rounded-sm border-2 border-b-4 border-black focus:outline-none h-9 indent-2 tracking-widest"
                  placeholder="********"
                  onChange={(e) => setPW(e.currentTarget.value)}
                  required
                />
              </div>

              <div className="mt-2">
                <span className="font-ubuntu">Confirm PW</span>
                <input
                  type="password"
                  value={PWConfirm}
                  className="w-full rounded-sm border-2 border-b-4 border-black focus:outline-none h-9 indent-2 tracking-widest"
                  placeholder="********"
                  onChange={(e) => setPWConfirm(e.currentTarget.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-black w-full text-white mt-8 text-center rounded-md p-2 cursor-pointer hover:bg-teal-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
