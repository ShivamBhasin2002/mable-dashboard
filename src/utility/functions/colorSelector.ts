import { ChartArea } from 'chart.js';

import { statusSelector } from 'utility/constants/enums';

import colors from 'utility/colors';

export const createGradient = (
  ctx: CanvasRenderingContext2D,
  area: ChartArea,
  gradientColors: { stop: number; color: string }[]
) => {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  gradientColors.forEach((color) => gradient.addColorStop(color.stop, color.color));
  return gradient;
};

export const getColor = (value: number) => {
  if (value >= 90) return colors.success;
  if (value >= 80) return colors.average;
  return colors.error;
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
    default:
      return '';
  }
};
