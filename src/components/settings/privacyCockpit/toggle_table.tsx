import { useState } from 'react';
import ToggleBtn from 'components/common/ToggleBtn/Togglebtn';
function toggle_table() {
  const [UpdateValue, setUpdateValue] = useState({
    settingKey: '',
    settingValue: ''
  });

  return (
    <div className="flex flex-col">
      <div className="header">
        <p className="text-primary opacity-70">Personal data </p>
      </div>
      <div className="dataTable flex text-light grid grid-cols-12 gap-0">
        <div className="keyValue col-span-3 my-auto">Email</div>
        <div className="toggle1   col-span-3 m-auto">
          <ToggleBtn value={true} setState={setUpdateValue} />
        </div>
        <div className="toggle2  col-span-3 m-auto">
          <ToggleBtn value={false} setState={setUpdateValue} />
        </div>
        <div className="toggle3  col-span-3 m-auto">
          <ToggleBtn value={false} setState={setUpdateValue} />
        </div>
        <div className="keyValue col-span-3 my-auto">Vorname</div>
        <div className="toggle1   col-span-3 m-auto">
          <ToggleBtn value={false} setState={setUpdateValue} />
        </div>
        <div className="toggle2  col-span-3 m-auto">
          <ToggleBtn value={true} setState={setUpdateValue} />
        </div>
        <div className="toggle3  col-span-3 m-auto">
          <ToggleBtn value={false} setState={setUpdateValue} />
        </div>
        <div className="keyValue col-span-3 my-auto">Nachname</div>
        <div className="toggle1   col-span-3 m-auto">
          <ToggleBtn value={false} setState={setUpdateValue} />
        </div>
        <div className="toggle2  col-span-3 m-auto">
          <ToggleBtn value={false} setState={setUpdateValue} />
        </div>
        <div className="toggle3  col-span-3 m-auto">
          <ToggleBtn value={false} setState={setUpdateValue} />
        </div>
      </div>
    </div>
  );
}

export default toggle_table;
