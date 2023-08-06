export const login = (user: any) => {
  return {
    type: "LOGIN",
    payload:user
  };
};
export const register = (user: any) => {
  return {
    type: "REGISTER",
    payload:user
  };
};
