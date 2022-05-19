import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "counter",
  state: () => ({
    title: "木青笔记",
  }),
  actions: {},
});
