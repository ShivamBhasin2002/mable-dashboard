export const titleCaseToSnakeCaseFormatter = (event: string) => {
  return event
    .split('')
    .map((e) => (e === ' ' ? '_' : e.toLowerCase()))
    .join('');
};

export const numberFormatter = (num: string | number) => {
  num = typeof num === 'string' ? parseInt(num) : num;
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });
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
