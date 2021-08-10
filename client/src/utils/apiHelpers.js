import axios from "axios";

// gets current user from api
export const getUser = async () => {
  return await axios.get("/api/auth/getUser");
};
