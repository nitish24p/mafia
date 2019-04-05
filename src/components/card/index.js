import { h } from 'preact';
import style from './style';

const Card = ({ children, cardStyle, ...rest }) => {
  return (
    <div class={`${style.card} ${cardStyle || ''}`} {...rest}>
      {children}
    </div>
  );
};

export default Card;
