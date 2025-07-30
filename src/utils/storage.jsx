// src/utils/storage.js
export const getUsers = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};

export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user")) || null;
  } catch {
    return null;
  }
};

export const setCurrentUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};

export const getProjects = () => {
  return JSON.parse(localStorage.getItem("projects")) || [];
};

export const saveProjects = (projects) => {
  localStorage.setItem("projects", JSON.stringify(projects));
};
