import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Card = ({ children }) => (
  <div class={style.card}>
    {children}
  </div>
);

export default Card;
