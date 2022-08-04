import axios from "axios";
import { ChartArea } from "chart.js";
const API_URL = undefined;

export const createGradient = (
  ctx: CanvasRenderingContext2D,
  area: ChartArea,
  colors: {}[]
) => {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  colors.forEach(({ stop, color }: any) => gradient.addColorStop(stop, color));
  return gradient;
};

export const auth = {
  Login: async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `${API_URL || "bff.dev.mable.ai"}/auth/login`,
        {
          email,
          password,
        }
      );
      // saving the token in local storage
      localStorage.setItem("token", response.data.token);

      // Call the auth me API and store the data in the local storage

      const authMe = await axios.get(
        `${API_URL || "bff.dev.mable.ai"}/auth/me`,
        {
          headers: {
            Authorization: `${response.data.token}`,
          },
        }
      );

      //   Saving the userId in local storage
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userId", authMe.data.payload.userId);

      // const shopDomain = await getShopDomain(authMe.data.payload.userId);

      //   Saving the details in the local storage
      // localStorage.setItem("domain", shopDomain.domain);
      // localStorage.setItem("domainPrefix", shopDomain.domainPrefix);
      // localStorage.setItem("shop", shopDomain.shop);

      window.alert("You are logged in");
      window.location.href = "/dashboard";

      return response.data;
    } catch (error) {
      window.alert("Invalid credentials");
      console.log(error);
      return null;
    }
  },

  Signup: async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    try {
      const response = await axios.post(
        `${API_URL || "bff.dev.mable.ai"}/auth/register`,
        {
          email,
          password,
          firstName,
          lastName,
        }
      );

      // check the output from this query and update the window.alert
      window.alert("You are signed up");
      window.location.href = "/auth/login";

      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  isAuthenticated: async () => {
    try {
      const response = await axios.get(
        `${API_URL || "bff.dev.mable.ai"}/auth/me`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );

      return response.data.auth;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  Logout: () => {
    console.log("logout");
    try {
       localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("domain");
      localStorage.removeItem("domainPrefix");
      localStorage.removeItem("shop");
      localStorage.setItem("isAuthenticated", "false");
      window.alert("You are logged out");
      window.location.href = "/auth/login";
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};
