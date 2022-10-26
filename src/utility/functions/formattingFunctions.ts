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

export const snakeCaseToCategoryFormatter = (key: string) => {
  let category;
  for (let i = 0; i <= key.length; i++) {
    if (key[i] === '_') {
      category = key.slice(0, i);
      break;
    }
  }
  return category?.toLowerCase();
};

export const snakeCaseToKeyValueExtractor = (key: string) => {
  let extractedValueArray = [];
  extractedValueArray = []; //added this for solving error like "use const instead of let "
  let count = 0;
  let j = 0;
  for (let i = 0; i <= key.length; i++) {
    if (key[i] === '_' && count === 0) {
      extractedValueArray.push(key.slice(0, i));
      count++;
      j = i;
    } else if (key[i] === '_' && count === 1) {
      extractedValueArray.push(key.slice(j + 1, i));
      count++;
      j = i;
    } else if (i == key.length) {
      extractedValueArray.push(key.slice(j + 1, key.length));
    }
  }

  return extractedValueArray;
};

export const camelCaseToTitleCase = (str: string) => {
  return str
    .split('')
    .map((e, index) => {
      if (index === 0) return e.toUpperCase();
      else if (e.charCodeAt(0) < 91) return ' ' + e.toUpperCase();
      else return e;
    })
    .join('');
};

export const dateTimeReducer = (numInMs: string | number) => {
  numInMs = typeof numInMs === 'string' ? parseInt(numInMs) : numInMs;
  if (numInMs > 12960000) return { value: Math.floor(numInMs / 12960000), unit: 'days' };
  if (numInMs > 216000) return { value: Math.floor(numInMs / 216000), unit: 'hrs' };
  if (numInMs > 3600) return { value: Math.floor(numInMs / 3600), unit: 'min' };
  if (numInMs > 60) return { value: Math.floor(numInMs / 60), unit: 's' };
  if (numInMs >= 0) return { value: numInMs, unit: 'ms' };
  return { value: 0, unit: 'ms' };
};
