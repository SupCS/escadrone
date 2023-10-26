import CryptoJS from "crypto-js";

export const hashPassword = (password) => {
  return CryptoJS.SHA256(password).toString();
};

export const loginUser = async (username, password) => {
  const hashedPassword = hashPassword(password);

  const response = await fetch("http://127.0.0.1:8000/api/user-check/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: hashedPassword,
    }),
  });

  const data = await response.json();
  return data.message;
};