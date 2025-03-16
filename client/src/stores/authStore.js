import { create } from "zustand";
import Cookie from "js-cookie";
import axiosInstance from "../plugins/interceptor";

const useAuthStore = create((set) => ({
  user: Cookie.get("user") ? JSON.parse(Cookie.get("user")) : null,
  login: async (email, password) => {
    try {
      const response = await axiosInstance.post("login", { email, password });
      if (response.data && response.status === 200) {
        // set the data in cookie
        Cookie.set("user", JSON.stringify(response.data), { expires: 30 });
        set({ user: response.data });
      }
    } catch (error) {
      console.error(error);
    }
  },
  register: async (userData) => {
    try {
      const response = await axiosInstance.post("register", userData);
      if (response.data && response.status === 201) {
        // set the data in cookie
        Cookie.set("user", JSON.stringify(response.data), { expires: 30 });
        set({ user: response.data });
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  logout: () => {
    Cookie.remove("user");
    set({ user: null });
  },
}));

export default useAuthStore;
