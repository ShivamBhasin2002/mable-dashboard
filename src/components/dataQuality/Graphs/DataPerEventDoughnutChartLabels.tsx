import { useSelector } from 'redux/store';
import { dataEventLabels } from 'utility/constants/enums';

const DataPerEventDoughnutChartLabels = () => {
  const data = useSelector((state) => state.dataPerEvent.dataContainedPerEventDoughnutChart);
  return (
    <div className="flex flex-col flex-grow text-[.875rem] justify-center gap-2">
      {[
        { color: 'bg-darkBlue', name: dataEventLabels.backend, value: data.backend },
        { color: 'bg-lightBlue', name: dataEventLabels.frontend, value: data.frontend },
        { color: 'bg-light', name: dataEventLabels.mableEngine, value: data.mableEngine },
        {
          border: 'border-light border-[.125rem]',
          name: dataEventLabels.unavailable,
          value: data.unavailable
        }
      ].map((stats, i) => (
        <div
          className="flex flex-row gap-[.625rem] items-center"
          key={`statsOfDataContainedPerEvent${i}`}
        >
          <span className={`${stats.color} ${stats.border} w-[.6875rem] h-[.6875rem] rounded-full`} />
          <span className="text-primary text-sm">{stats.name}</span>
          <span className="text-light ml-auto">{stats.value}%</span>
        </div>
      ))}
    </div>
  );
};

export default DataPerEventDoughnutChartLabels;
