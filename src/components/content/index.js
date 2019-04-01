import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Content = ({ children }) => (
  <span class={style.content}>
    {children}
  </span>
);

export default Content;
