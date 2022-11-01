import styled from 'styled-components';

const ToggleSwitchWrapper = styled.div<{
  activeColor?: string;
  inactiveColor?: string;
  disable?: boolean;
}>`
  .wrg-toggle {
    touch-action: pan-x;
    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #fafafa;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    scale: ${({ disable }) => (disable ? '.90' : '1')};
    opacity: ${({ disable }) => (disable ? '.5' : '1')};
  }

  .wrg-toggle-input {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .wrg-toggle-check,
  .wrg-toggle-uncheck {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    opacity: 0;
    transition: opacity 0.25s ease;
  }
  .wrg-toggle-check {
    left: 8px;
  }
  .wrg-toggle-uncheck {
    opacity: 1;
    right: 10px;
  }

  .wrg-toggle-check span {
    align-items: center;
    display: flex;
    height: 10px;
    font-size: 10px;
    justify-content: center;
    position: relative;
    width: 10px;
    left: 3px;
  }
  .wrg-toggle-uncheck span {
    align-items: center;
    display: flex;
    height: 10px;
    font-size: 10px;
    justify-content: center;
    position: relative;
    width: 10px;
    left: -3px;
  }

  .wrg-toggle-container {
    width: 55px;
    height: 25px;
    padding: 5px;
    border-radius: 30px;
    transition: all 0.2s ease;
  }

  .wrg-toggle-circle {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    top: 50%;
    left: 24%;
    transform: translate(-50%, -50%);
    width: 22px;
    height: 22px;
    border: 1px solid #4d4d4d;
    border-radius: 50%;
    background-color: #fafafa;
    box-sizing: border-box;
    transition: all 0.25s ease;
  }
  .wrg-toggle--checked .wrg-toggle-check {
    opacity: 1;
  }
  .wrg-toggle--checked .wrg-toggle-uncheck {
    opacity: 0;
  }
  .wrg-toggle--checked .wrg-toggle-container {
    background-color: ${({ activeColor }) => activeColor || '#4fb7dd'};
  }
  .wrg-toggle--uncheck .wrg-toggle-container {
    background-color: ${({ inactiveColor }) => inactiveColor || '#db2e26'};
  }
  .wrg-toggle--checked .wrg-toggle-circle {
    top: 50%;
    left: 76%;
    transform: translate(-50%, -50%);
  }
`;

export default ToggleSwitchWrapper;
