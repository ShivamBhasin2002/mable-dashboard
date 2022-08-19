import { useSelector } from 'redux/store';

const ParameterComposition = () => {
  const data = useSelector((state) => state.dashboard.dataContaindedPerEventDoughnutChart);
  return (
    <div className="flex flex-col flex-grow text-[14px] justify-center gap-2">
      {[
        { color: 'bg-darkBlue', name: 'Backend', value: data.backend },
        { color: 'bg-lightBlue', name: 'Frontend', value: data.frontend },
        { color: 'bg-light', name: 'Mable Engine', value: data.mableEngine },
        { border: 'border-light border-[2px]', name: 'Unavailable', value: data.unavailable }
      ].map((stats, i) => (
        <div
          className="flex flex-row gap-[10px] items-center"
          key={`statsOfDataContainedPerEvent${i}`}
        >
          <span className={`${stats.color} ${stats.border} w-[11px] h-[11px] rounded-full`} />
          <span className="text-primary text-sm">{stats.name}</span>
          <span className="text-light ml-auto font-bold">{stats.value}%</span>
        </div>
      ))}
    </div>
  );
};

export default ParameterComposition;
