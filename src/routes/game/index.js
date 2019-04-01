import { h, Component } from 'preact';
import style from './style';

export default class Game extends Component {
  state = {
    time: Date.now(),
    count: 10
  };


  // Note: `user` comes from the URL, courtesy of our router
  render() {
    return (
      <div>
        hello
      </div>
    );
  }
}
