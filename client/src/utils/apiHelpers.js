import axios from "axios";

export const getUser = async () => {
  return await axios.get("/api/auth/getUser");
};
