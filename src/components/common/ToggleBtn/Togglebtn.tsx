import './Togglebtn.css';
import { toggletypeProps } from 'utility/typeDefinitions/componentPropTypes';

const Togglebtn = ({
  value,
  setState,
  dataSaved,
  on,
  off,
  name,
  setdataSaved
}: toggletypeProps) => {
  const triggerToggle = () => {
    setState({
      settingKey: name,
      settingValue: `${!value}`
    });
  };
  return (
    <div
      onClick={triggerToggle}
      className={`wrg-toggle ${value ? 'wrg-toggle--checked' : 'wrg-toggle--uncheck'} mt-2`}
    >
      <div className="wrg-toggle-container">
        <div className="wrg-toggle-check">
          <span>{on}</span>
        </div>
        <div className="wrg-toggle-uncheck">
          <span>{off}</span>
        </div>
      </div>
      <div className="wrg-toggle-circle"></div>
      <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
    </div>
  );
};

export default Togglebtn;
