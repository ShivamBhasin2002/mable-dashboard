import {
  BubbleDataPoint,
  Chart,
  ChartTypeRegistry,
  ScatterDataPoint,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { useSelector } from "@redux/store";

import colors from "@utility/colors";
import { dataEventLabels } from "@utility/constants/enums";

const DataPerEventDoughnutChart = () => {
  const data = useSelector(
    (state) => state.dataPerEvent.dataContainedPerEventDoughnutChart
  );
  const doughnutData = {
    labels: Object.values(dataEventLabels),
    datasets: [
      {
        data: [
          data.backend,
          0.5,
          data.frontend,
          0.5,
          data.mableEngine,
          data.unavailable,
        ],
        backgroundColor: [
          colors.darkBlue,
          colors.transparent,
          colors.lightBlue,
          colors.transparent,
          colors.light,
          colors.transparent,
        ],
        borderColor: [
          colors.transparent,
          colors.transparent,
          colors.transparent,
          colors.transparent,
          colors.transparent,
          colors.light,
        ],
        datalabels: {
          display: false,
        },
      },
    ],
  };
  const doughnutOptions = {
    elements: {
      arc: {
        borderWidth: 1,
        borderColor: "white",
      },
    },
    cutout: 60,
    rotation: 86 * Math.PI,
    circumference: 57 * Math.PI,
  };
  const doughnutPlugins = [
    {
      id: "doughnut",
      beforeDraw(
        chart: Chart<
          keyof ChartTypeRegistry,
          (number | ScatterDataPoint | BubbleDataPoint)[],
          unknown
        >
      ) {
        const { width } = chart;
        const { height } = chart;
        const { ctx } = chart;
        ctx.restore();
        ctx.font = "25px sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillStyle = colors.light;
        const text = `${data.backend + data.frontend + data.mableEngine}%`;
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2 + 15;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];
  return (
    <Doughnut
      id="doughnut"
      width={160}
      data={doughnutData}
      plugins={doughnutPlugins}
      options={doughnutOptions}
    />
  );
};

export default DataPerEventDoughnutChart;
