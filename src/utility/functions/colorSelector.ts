import { ChartArea } from 'chart.js';

import { statusSelector } from 'utility/constants/general';

import colors from 'utility/colors';

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
  if (value >= 90) return colors.success;
  else if (value >= 80) return colors.average;
  else return colors.error;
};

export const statusTypeColors = (status: string) => {
  switch (status) {
    case statusSelector.failed:
      return 'bg-failed';
    case statusSelector.delayed:
      return 'bg-delayed';
    case statusSelector.pending:
      return 'bg-purple';
    case statusSelector.success:
      return 'bg-success';
  }
};
