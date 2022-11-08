import axios from 'axios';

export const getSettings = async (userToken?: string | undefined | null, apiUrl?: string) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BFF_URL}/${apiUrl}`, {
    headers: { Authorization: `${userToken}` }
  });
  if (data) {
    return data;
  }
  return null;
};

export const postSettings = async (
  userToken?: string | undefined | null,
  apiUrl?: string,
  body?: object
) => {
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BFF_URL}/${apiUrl}`, body, {
    headers: { Authorization: `${userToken}` }
  });
  if (data) {
    return data;
  }
  return null;
};
