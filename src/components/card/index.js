import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Card = ({ children, ...rest }) => {
  console.log(rest);
  return (
    <div class={`${style.card}`} {...rest}>
      {children}
    </div>
  );
};

export default Card;
