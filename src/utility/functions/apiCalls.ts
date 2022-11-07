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
    if (memoize && cache[JSON.stringify(args)]) return cache[JSON.stringify(args)];
    const { params, token, path } = args;
    const result = await axios.get(`${process.env.NEXT_PUBLIC_MA_URL}${path}`, {
      headers: { Authorization: `Token ${token}` },
      params,
      paramsSerializer: (paramsPassed) =>
        Object.keys(paramsPassed)
          .map((param) => {
            switch (param) {
              case 'start_date':
              case 'end_date':
                return `${param}=${moment(paramsPassed[param]).format('YYYY-MM-DD')}`;
              default:
                return `${param}=${paramsPassed[param]}`;
            }
          })
          .join('&')
    });
    cache[JSON.stringify(args)] = result;
    return result;
  };
};

export const dashboardDataFetchCall = memoizedGetCall();
