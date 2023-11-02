import { loginUser, signupUser } from './api';

export const login = (formData) => async (dispatch) => {
  try {
    const user = await loginUser(formData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: user });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error });
    throw error;
  }
};

export const signup = (formData) => async (dispatch) => {
  try {
    const user = await signupUser(formData);
    dispatch({ type: 'SIGNUP_SUCCESS', payload: user });
  } catch (error) {
    dispatch({ type: 'SIGNUP_FAILURE', payload: error });
    throw error;
  }
};

  
  export const logout = () => {
    // Your logout action code here
    return { type: 'LOGOUT' };
  };
  