import axios from 'axios';

export const getSettings = async (userToken?: string, apiUrl?: string) => {
  const { data } = await axios.get(`${process.env.REACT_APP_BFF_URL}/${apiUrl}`, {
    headers: { Authorization: `${userToken}` }
  });
  if (data) {
    return data;
  }
  return null;
};

export const postSettings = async (
  userToken?: string,
  apiUrl?: string,
  body?: {
    settingKey?: string;
    settingValue?: string;
  }[]
) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BFF_URL}/${apiUrl}`,
    {
      settings: body
    },
    {
      headers: { Authorization: `${userToken}` }
    }
  );
  if (data) {
    return data;
  }
  return null;
};
