import {ChartArea} from 'chart.js'

export const createGradient= (
  ctx: CanvasRenderingContext2D,
  area: ChartArea,
  colors: {}[]
) => {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  colors.forEach(({ stop, color }: any) => gradient.addColorStop(stop, color));
  return gradient;
}