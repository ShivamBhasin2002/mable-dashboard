export const titleCaseToSnakeCaseFormatter = (event: string) =>
  event
    .split('')
    .map((e) => (e === ' ' ? '_' : e.toLowerCase()))
    .join('');

export const numberReducer = (num: string | number, settings?: Record<string, unknown>) => {
  const parsedNum = typeof num === 'string' ? parseInt(num, 10) : num;
  const formatter = Intl.NumberFormat('en', { notation: 'compact', ...settings });
  return formatter.format(parsedNum);
};

export const dateTimeReducer = (numInSeconds: string | number) => {
  let output = { value: 0, unit: 'ms' };
  const parsedNumInSeconds =
    typeof numInSeconds === 'string' ? parseInt(numInSeconds, 10) : numInSeconds;
  if (parsedNumInSeconds > 86400)
    output = { value: Math.round((parsedNumInSeconds / 86400) * 100) / 100, unit: 'days' };
  else if (parsedNumInSeconds > 3600)
    output = { value: Math.round((parsedNumInSeconds / 3600) * 100) / 100, unit: 'hrs' };
  else if (parsedNumInSeconds > 200)
    output = { value: Math.round((parsedNumInSeconds / 60) * 100) / 100, unit: 'min' };
  else if (parsedNumInSeconds) output = { value: parsedNumInSeconds, unit: 's' };
  return output;
};
