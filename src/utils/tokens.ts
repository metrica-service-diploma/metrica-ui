export const getTokenFromLocalStorage = () => ({
  accessToken: localStorage.getItem("accessToken"),
});

export const saveTokenInLocalStorage = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("accessToken");
};
