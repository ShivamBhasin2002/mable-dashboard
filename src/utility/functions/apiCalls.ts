import axios from 'axios';
import moment from 'moment';

const memoizedGetCall = () => {
  // eslint-disable-next-line
  const cache: { [key: string]: any } = {};
  return async (
    args: {
      params?: any; // eslint-disable-line
      token?: string;
      path: string;
    },
    memoize = false
  ) => {
    if (memoize && cache[JSON.stringify(args)]) {
      return cache[JSON.stringify(args)];
    } else {
      const { params, token, path } = args;
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
      cache[JSON.stringify(args)] = result;
      return result;
    }
  };
};

export const dashboardDataFetchCall = memoizedGetCall();
