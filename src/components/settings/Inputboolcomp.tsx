// import { InputboolcompProps } from 'utility/typeDefinitions/componentPropTypes';
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
    setState({
      settingKey: name,
      settingValue: `${!value}`
    });
    setdataSaved({ ...dataSaved, [name]: false });
  };
  console.log('Bool check' + typeof value);
  return (
    <div className="flex flex-row text-light w-100  rounded-md p-3 my-2">
      <div className="content w-11/12  p-2 flex flex-col">
        <div className="title text-[1.5em] font-[700]">{title}</div>
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
        {dataSaved[name as keyof typeof dataSaved] ? (
          <button className="px-5 py-2 bg-lightGray rounded-lg" disabled>
            Save
          </button>
        ) : (
          <button className="px-5 py-2 bg-primary rounded-lg" onClick={handelSave}>
            Save
          </button>
        )}
      </div>
    </div>
  );
}
