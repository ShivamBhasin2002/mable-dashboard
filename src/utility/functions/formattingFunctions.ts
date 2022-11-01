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

export const snakeCaseToCategoryFormatter = (key: string) => {
  let category;
  for (let i = 0; i <= key.length; i += 1) {
    if (key[i] === '_') {
      category = key.slice(0, i);
      break;
    }
  }
  return category?.toLowerCase();
};

export const snakeCaseToKeyValueExtractor = (key: string) => {
  let extractedValueArray = [];
  extractedValueArray = []; // added this for solving error like "use const instead of let "
  let count = 0;
  let j = 0;
  for (let i = 0; i <= key.length; i += 1) {
    if (key[i] === '_' && count === 0) {
      extractedValueArray.push(key.slice(0, i));
      count += 1;
      j = i;
    } else if (key[i] === '_' && count === 1) {
      extractedValueArray.push(key.slice(j + 1, i));
      count += 1;
      j = i;
    } else if (i === key.length) {
      extractedValueArray.push(key.slice(j + 1, key.length));
    }
  }

  return extractedValueArray;
};

export const camelCaseToTitleCase = (str: string) =>
  str
    .split('')
    .map((e, index) => {
      if (index === 0) return e.toUpperCase();
      if (e.charCodeAt(0) < 91) return ` ${e.toUpperCase()}`;
      return e;
    })
    .join('');

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
