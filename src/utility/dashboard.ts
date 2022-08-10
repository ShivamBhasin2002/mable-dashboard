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

// const dataQuality = () => {};

// const pageSpeed = () => {};

// const events = () => {};

// const dataContainedPerEvent = () => {};

// const warningCenter = () => {};

// const funnelAnalysis = () => {};

// const eventsPerDay = () => {};
