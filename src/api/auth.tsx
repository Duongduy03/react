import instance from "./instance";

const getsUser = async () => {
  const res = await instance.get(`/users`);
  return res;
};

const getUserById = async (id: string) => {
  const res = await instance.get(`/users/${id}`);
  return res;
};

const login = async (user: any) => {
  const res = await instance.post(`/signin`, user);
  return res;
};
const registerUser = async (user: any) => {
  const res = await instance.post(`/signup`, user);
  return res;
};
const updateUser = async (user: any) => {
  const res = await instance.patch(`/users/${user._id}`, user);
  return res;
};
const removeUser = async (id: string) => {
  const res = await instance.delete(`/users/${id}`);
  return res;
};
const forgotPassword = async (email: any) => {
  const res = await instance.post(`/forgot-password`, email);
  return res;
};
const resetPassword = async (user: any) => {
  const res = await instance.post(`/reset-password`, user);
  return res;
};
export {
  getsUser,
  getUserById,
  updateUser,
  removeUser,
  login,
  resetPassword,
  forgotPassword,
  registerUser,
};
