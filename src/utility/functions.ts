import { ChartArea } from 'chart.js';

export const createGradient = (
  ctx: CanvasRenderingContext2D,
  area: ChartArea,
  colors: { stop: number; color: string }[]
) => {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  colors.forEach((color) => gradient.addColorStop(color.stop, color.color));
  return gradient;
};

export const getColor = (value: number) => {
  if (value >= 0.9) return '#0DCE1C';
  else if (value >= 0.8) return '#D99A43';
  else return '#EF4E5C';
};

export const getMessage = (value: number) => {
  if (value >= 0.95) return 'Excellent';
  if (value >= 0.9) return 'Great';
  else if (value >= 0.8) return 'Decent';
  else return 'Poor';
};
