import axios from 'axios';

export const getEvents = async (userToken?: string, apiUrl?: string, params?: object) => {
  const config = {
    headers: { Authorization: `${userToken}` },
    params
  };
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_MA_URL}/${apiUrl}`, config);
  if (data) {
    return data;
  }
  return null;
};
