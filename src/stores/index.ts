import { defineStore } from "pinia";
import { User } from "../severapi";
import { userinfo } from "./type";

export const useStore = defineStore({
  id: "counter",
  state: () => ({
    title: "木青笔记",
    userInfo: {} as userinfo,
  }),
  actions: {
    getUserInfo() {
      User.UserInfo().then((response) => {
        this.userInfo = response.data;
      });
    },
  },
});
