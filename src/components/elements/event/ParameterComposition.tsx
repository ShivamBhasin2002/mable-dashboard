import { useSelector } from 'redux/store';
import { dataEventLables } from 'utility/constants/general';

const ParameterComposition = () => {
  const data = useSelector((state) => state.dataPerEvent.dataContaindedPerEventDoughnutChart);
  return (
    <div className="flex flex-col flex-grow text-[14px] justify-center gap-2">
      {[
        { color: 'bg-darkBlue', name: dataEventLables.backend, value: data.backend },
        { color: 'bg-lightBlue', name: dataEventLables.frontend, value: data.frontend },
        { color: 'bg-light', name: dataEventLables.mableEngine, value: data.mableEngine },
        {
          border: 'border-light border-[2px]',
          name: dataEventLables.unavailable,
          value: data.unavailable
        }
      ].map((stats, i) => (
        <div
          className="flex flex-row gap-[10px] items-center"
          key={`statsOfDataContainedPerEvent${i}`}
        >
          <span className={`${stats.color} ${stats.border} w-[11px] h-[11px] rounded-full`} />
          <span className="text-primary text-sm">{stats.name}</span>
          <span className="text-light ml-auto">{stats.value}%</span>
        </div>
      ))}
    </div>
  );
};

export default ParameterComposition;
