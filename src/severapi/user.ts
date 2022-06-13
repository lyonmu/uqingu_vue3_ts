// 获取数据的函数
import axios from "axios";
// 后端服务地址
const SERVER_URl = import.meta.env.VITE_SOME_SERVER_API;
export default {
  UserInfo: async () => {
    try {
      const result = await axios.get(SERVER_URl + "/content/users/profile", {
        headers: {
          "API-Authorization": "woainiMJG.0811",
        },
      });
      return result.data;
    } catch (error) {
      console.error(error);
    }
  },
};
