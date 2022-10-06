import axios from 'axios';
import moment from 'moment';

export const makeGetRequest = async ({
  params,
  token,
  path
}: {
  // eslint-disable-next-line
  params?: any;
  token?: string;
  path: string;
}) => {
  const result = await axios.get(`${process.env.REACT_APP_MA_URL}${path}`, {
    headers: { Authorization: `Token ${token}` },
    params,
    paramsSerializer: (params) => {
      return Object.keys(params)
        .map((param) => {
          switch (param) {
            case 'start_date':
            case 'end_date':
              return `${param}=${moment(params[param]).format('YYYY-MM-DD')}`;
            default:
              return `${param}=${params[param]}`;
          }
        })
        .join('&');
    }
  });
  return result;
};
