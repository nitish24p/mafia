import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const FixedButton = ({ children, onClick }) => (
  <button class={style.fixedbutton} onClick={onClick}>
    {children}
  </button>
);

export default FixedButton;
