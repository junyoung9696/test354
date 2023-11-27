import { useEffect } from "react";
import axios from "axios";

function Authentication({ setIsLoggedIn }) {
  function getCookie(name) {
    const cookieString = document.cookie;
    const cookies = cookieString.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken");
    if (accessToken) {
      axios
        .get("/api/check-token", { params: { accessToken } })
        .then((response) => {
          setIsLoggedIn(response.data.isLoggedIn);
        })
        .catch((error) => {
          console.error("Failed to verify token", error);
        });
    } else if (refreshToken) {
      axios
        .get("/api/refresh-token", { params: { refreshToken } })
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.error("Failed to refresh token", error);
        });
    }
  }, [setIsLoggedIn]);

  return null;
}

export default Authentication;
