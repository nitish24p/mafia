import { h, Component } from 'preact';
import style from './style';
import IoAndroidAdd from 'preact-icons/io/android-add.js';
import IoAndroidRemove from 'preact-icons/io/android-remove.js';

class Counter extends Component {
  increment = () => {
    if (this.props.onChange && typeof this.props.onChange === 'function') {
      this.props.onChange(this.props.value, this.props.count + 1);
    }
  }
  decrement = () => {
    if (this.props.onChange && typeof this.props.onChange === 'function') {
      this.props.onChange(this.props.value, this.props.count - 1);
    }
  }
  render() {
    //const { count } = this.state;
    const { count } = this.props;
    return (
      <span class={style.wrapper}>
        <button disabled={count === 0} class={`${style.leftButton} ripple`} onClick={this.decrement}>
          <IoAndroidRemove class={style.icon} />
        </button>

        <span>{count}</span>
        <button class={style.rightButton} onClick={this.increment}>
          <IoAndroidAdd class={style.icon} />
        </button>

      </span>
    );
  }

}

export default Counter;