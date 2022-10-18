export const titleCaseToSnakeCaseFormatter = (event: string) => {
  return event
    .split('')
    .map((e) => (e === ' ' ? '_' : e.toLowerCase()))
    .join('');
};

export const numberReducer = (num: string | number) => {
  num = typeof num === 'string' ? parseInt(num) : num;
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });
  return formatter.format(num);
};

export const dateTimeReducer = (numInMs: string | number) => {
  numInMs = typeof numInMs === 'string' ? parseInt(numInMs) : numInMs;
  if (numInMs > 12960000) return { value: Math.floor(numInMs / 12960000), unit: 'days' };
  if (numInMs > 216000) return { value: Math.floor(numInMs / 216000), unit: 'hrs' };
  if (numInMs > 3600) return { value: Math.floor(numInMs / 3600), unit: 'min' };
  if (numInMs > 60) return { value: Math.floor(numInMs / 60), unit: 's' };
  return { value: numInMs, unit: 'ms' };
};
