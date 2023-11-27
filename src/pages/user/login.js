import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });
      router.push("/");
    } catch (error) {
      console.error("Failed to login:", error.message);
      setMessage(error.message);
      setEmail("");
      setPassword("");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

  return (
    <>
      <div className="bg-gray-200 flex justify-center items-center h-screen">
        <div className="flex bg-white shadow-xl">
          <form onSubmit={handleLogin} className="p-7">
            <div className="flex items-center mb-20">
              <img src="/logo.jpg" alt="logo" className="w-9 h-9" />
              <span className="text-gray-700 font-semibold font-borel text-lg pt-3">
                KETI
              </span>
            </div>

            <div className="px-16">
              <div className="my-7">
                <h1 className="text-5xl font-black font-borel  text-center">
                  Welcome back!
                </h1>
                <p className="text-gray-500 text-center">
                  Empowering smart farms with advanced data visualization.
                </p>
              </div>

              <div>
                <span className="font-ubuntu">Email</span>
                <input
                  type="email"
                  autoComplete="email"
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
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-black w-full text-white mt-8 text-center rounded-md p-2 cursor-pointer hover:bg-teal-500"
              >
                Login
              </button>

              {message != "" && (
                <p className="mt-4 text-red-500 text-center font-semibold">
                  {message}
                </p>
              )}

              <div className="mt-5 mb-5 flex justify-between px-9">
                <span className="text-sm cursor-pointer font-medium hover:text-teal-500">
                  <Link href="/user/register">Sign Up</Link>
                </span>
                <span className="text-sm cursor-pointer font-medium hover:text-teal-500">
                  <Link href="/user/findpassword">Forgot Password?</Link>
                </span>
              </div>
            </div>
          </form>

          <Image
            src="/login-image.jpg"
            alt="login"
            width={100}
            height={100}
            className="w-96 h-96 md:h-auto object-cover md:col-span-2 hidden lg:block"
          />
        </div>
      </div>
    </>
  );
}

export default Login;
