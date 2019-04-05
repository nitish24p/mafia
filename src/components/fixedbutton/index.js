import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const FixedButton = ({ children, disabled, secondary, onClick }) => (
  <button disabled={disabled}
    class={`${style.fixedbutton} ${secondary ? style.secondary : ''}`} onClick={onClick}>
    {children}
  </button>
);

export default FixedButton;
