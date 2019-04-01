import { h, Component } from 'preact';
import style from './style';
import IoAndroidAdd from 'preact-icons/io/android-add.js';
import IoAndroidRemove from 'preact-icons/io/android-remove.js';

console.log(style);
class Counter extends Component {
  state = {
    count: 0
  }
  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  decrement = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  }
  render() {
    const { count } = this.state;
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