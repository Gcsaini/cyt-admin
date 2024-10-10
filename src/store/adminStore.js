import { create } from "zustand";
import { fetchById } from "../helpers/actions";
import { getUserUrl } from "../helpers/url";

const useUserStore = create((set) => ({
  userInfo: {
    name: "",
    designation: "",
    profile: "",
    email: "",
  },

  setUserInfo: (data) =>
    set((state) => ({ userInfo: { ...state.userInfo, ...data } })),
  setInfo: (key, value) =>
    set((state) => ({
      userInfo: { ...state.userInfo, [key]: value },
    })),
  fetchUserInfo: async () => {
    try {
      const response = await fetchById(getUserUrl);
      if (response.status) {
        set((state) => ({ userInfo: { ...state.userInfo, ...response.data } }));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));

useUserStore.subscribe((state) => {
  // console.log("state", state.times);
});

export default useUserStore;
