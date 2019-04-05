import { h } from 'preact';
import style from './style';

const ButtonGroup = ({ children, buttonGroupStyle, ...rest }) => {
  return (
    <div class={`${style.buttonGroup} ${buttonGroupStyle || ''}`} {...rest}>
      {children}
    </div>
  );
};

export default ButtonGroup;
