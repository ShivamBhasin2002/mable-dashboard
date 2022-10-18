import { ToggletypeProps } from 'utility/typeDefinitions/componentPropTypes';
import ToggleBtn from './TogglebtnStyle';

const Togglebtn = ({ value, setState, name, activeColor, inactiveColor }: ToggletypeProps) => {
  const triggerToggle = () => {
    setState({
      settingKey: name,
      settingValue: `${!value}`
    });
  };
  return (
    <ToggleBtn activeColor={activeColor} inactiveColor={inactiveColor}>
      <div
        onClick={triggerToggle}
        className={`wrg-toggle ${value ? 'wrg-toggle--checked' : 'wrg-toggle--uncheck'} mt-2`}
      >
        <div className="wrg-toggle-container">
          <div className="wrg-toggle-check">
            <span>ON</span>
          </div>
          <div className="wrg-toggle-uncheck">
            <span>OFF</span>
          </div>
        </div>
        <div className="wrg-toggle-circle"></div>
        <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
      </div>
    </ToggleBtn>
  );
};

export default Togglebtn;
