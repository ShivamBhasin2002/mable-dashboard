import Togglebtn from '../common/ToggleBtn/Togglebtn';
export default function Inputboolcomp({
  title,
  description,
  setState,
  name,
  value,
  dataSaved,
  setdataSaved
}: any) {
  const handelSave = () => {
    console.log('starting');
    console.log(dataSaved.key);
    console.log(dataSaved.status);
    console.log('ending');
    setState({
      settingKey: name,
      settingValue: `${!value}`
    });
  };
  return (
    <div className="flex flex-row text-light w-100  rounded-md p-3 my-2">
      <div className="content w-11/12  p-2 flex flex-col">
        <div className="title text-[1.5em] font-[700]">{name.toUpperCase()}</div>
        <div className="description  text-lightGray ">{description}</div>
        <div className="radiobtn my-1">
          <Togglebtn
            setdataSaved={setdataSaved}
            dataSaved={dataSaved}
            value={value}
            name={name}
            on={'ON'}
            off={'OFF'}
            setState={setState}
          />
        </div>
      </div>
      <div className="savebtn w-1/12 p-2">
        {dataSaved.key === name && dataSaved.status !== 'success' ? (
          <button className="px-5 py-2 bg-primary rounded-lg" onClick={handelSave}>
            Save
          </button>
        ) : (
          <button className="px-5 py-2 bg-lightGray rounded-lg" disabled>
            Save
          </button>
        )}
      </div>
    </div>
  );
}
