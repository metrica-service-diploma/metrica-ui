export const getTokenFromLocalStorage = () => ({
  accessToken: localStorage.getItem("accessToken"),
  // refreshToken: localStorage.getItem("refreshToken"),
  // expiresIn: localStorage.getItem("expiresIn")
  //   ? parseInt(localStorage.getItem("expiresIn") as string)
  //   : null,
});

export const saveTokenInLocalStorage = ({
  accessToken,
  // refreshToken,
  // expiresIn,
}: {
  accessToken: string;
  // refreshToken: string;
  // expiresIn: number;
}) => {
  localStorage.setItem("accessToken", accessToken);
  // localStorage.setItem("refreshToken", refreshToken);
  // localStorage.setItem("expiresIn", expiresIn.toString());
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("accessToken");
  // localStorage.removeItem("refreshToken");
  // localStorage.removeItem("expiresIn");
};
