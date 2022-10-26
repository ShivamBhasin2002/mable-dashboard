export const titleCaseToSnakeCaseFormatter = (event: string) => {
  return event
    .split('')
    .map((e) => (e === ' ' ? '_' : e.toLowerCase()))
    .join('');
};

export const numberReducer = (num: string | number, settings?: Record<string, unknown>) => {
  num = typeof num === 'string' ? parseInt(num) : num;
  const formatter = Intl.NumberFormat('en', { notation: 'compact', ...settings });
  return formatter.format(num);
};

export const dateTimeReducer = (numInS: string | number) => {
  let output = { value: 0, unit: 'ms' };
  numInS = typeof numInS === 'string' ? parseInt(numInS) : numInS;
  if (numInS > 86400) output = { value: Math.round((numInS / 86400) * 100) / 100, unit: 'days' };
  else if (numInS > 3600) output = { value: Math.round((numInS / 3600) * 100) / 100, unit: 'hrs' };
  else if (numInS > 200) output = { value: Math.round((numInS / 60) * 100) / 100, unit: 'min' };
  else if (numInS) output = { value: numInS, unit: 's' };
  return output;
};
