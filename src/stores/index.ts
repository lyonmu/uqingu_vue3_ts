import { defineStore } from "pinia";
import { User } from "../severapi";
import { userinfo } from "./type";
import test from '/public/test.md?import&raw'

export const useStore = defineStore({
  id: "counter",
  state: () => ({
    title: "木青笔记",
    userInfo: {} as userinfo,
    aboutMe: "",
  }),
  actions: {
    getUserInfo() {
      User.UserInfo().then((response) => {
        this.userInfo = response.data;
      });
    },
    getAboutMe() {
      this.aboutMe = test;
    },
  },
});
