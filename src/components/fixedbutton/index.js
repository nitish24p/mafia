import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const FixedButton = ({ children, disabled, secondary, onClick, buttonStyle }) => (
  <button disabled={disabled}
    class={`${style.fixedbutton} ${secondary ? style.secondary : ''} ${buttonStyle ? buttonStyle : ''}`}
    onClick={onClick}>
    {children}
  </button>
);

export default FixedButton;
