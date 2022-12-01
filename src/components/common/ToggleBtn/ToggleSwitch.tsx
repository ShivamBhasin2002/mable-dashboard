import { toggletypeProps } from 'utility/typeDefinitions/componentPropTypes';
import ToggleSwitchWraper from './ToggleSwitchStyle';

const ToggleSwitch = ({
  value,
  setState,
  name,
  activeColor,
  inactiveColor,
  disable
}: toggletypeProps) => {
  const triggerToggle = () => {
    setState({
      settingKey: name,
      settingValue: `${!value}`
    });
  };
  return (
    <ToggleSwitchWraper activeColor={activeColor} inactiveColor={inactiveColor} disable={disable}>
      <div
        onClick={() => !disable && triggerToggle()}
        className={`wrg-toggle ${
          value ? 'wrg-toggle--checked' : 'wrg-toggle--uncheck'
        } mt-2 hd:scale-[1.1]`}
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
    </ToggleSwitchWraper>
  );
};

export default ToggleSwitch;
