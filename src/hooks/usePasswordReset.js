import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
axios.defaults.baseURL = 'https://smart-foxes-backend-watertracker.onrender.com/api';

export const usePasswordReset = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const resetPassword = async (email) => {
    if (!email) return;
    setLoading(true);
    try {
      const response = await axios.post('/users/passwordReset', email);
      Notify.success(response.data.message);
      return response.data;
    } catch (error) {
      setError('something wrong(');
    } finally {
      setLoading(false);
    }
  };
  return { loading, resetPassword, error };
};

export const usePasswordUpdate = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { userId, temporaryId } = useParams();
  const passwordUpdate = async (password) => {
    if (!password) return;
    setLoading(true);
    try {
      const response = await axios.patch(
        `/users/passwordUpdate/${userId}/${temporaryId}`,
        password
      );
      return response.data;
    } catch (error) {
      setError('something wrong(');
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, passwordUpdate };
};
