import actionTypes from "./actionTypes";

export const loading = (flag) => {
  return {
    type: actionTypes.LOADING,
    flag,
  };
};

export const popup = (flag) => ({
  type: actionTypes.POPUP,
  flag,
});

export const login = (flag) => ({
  type: actionTypes.LOGIN,
  flag,
});
