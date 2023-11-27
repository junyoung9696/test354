import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function FindPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordRecovery = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/find-password", {
        email,
      });
      if (response.data.password) {
        setPassword(response.data.password);
        setMessage("");
      } else {
        setPassword("");
        setMessage("해당 이메일로 등록된 계정이 없습니다.");
      }
    } catch (error) {
      console.error("비밀번호를 찾을 수 없습니다:", error);
      setPassword("");
      setMessage("비밀번호를 찾을 수 없습니다. 다시 시도해주세요.");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.currentTarget.value);
    setPassword("");
    setMessage("");
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <div className="flex bg-white shadow-xl">
        <form onSubmit={handlePasswordRecovery} className="p-7">
          <div className="flex items-center mb-20">
            <img src="/logo.jpg" alt="logo" className="w-9 h-9" />
            <span className="text-gray-700 font-semibold font-borel text-lg pt-3">
              KETI
            </span>
          </div>

          <div className="px-16">
            <div className="my-7">
              <h1 className="text-5xl font-black font-borel  text-center">
                Forgot Password?
              </h1>
              <p className="text-gray-500 text-center">
                이메일을 입력하면 해당 이메일로 등록된 계정의 비밀번호를 확인할 수
                있습니다.
              </p>
            </div>

            <div>
              <span className="font-ubuntu">Email</span>
              <input
                type="email"
                value={email}
                placeholder="이메일"
                onChange={handleEmailChange}
                required
                className="w-full rounded-sm border-2 border-b-4 border-black focus:outline-none h-9 indent-2"
              />
            </div>

            <button
              type="submit"
              className="bg-black w-full text-white mt-8 text-center rounded-md p-2 cursor-pointer hover:bg-teal-500"
            >
              Find Password
            </button>

            {password ? (
              <p className="text-gray-900">password: {password}</p>
            ) : null}
            {message && !password && (
              <p className="text-gray-900">{message}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default FindPassword;
