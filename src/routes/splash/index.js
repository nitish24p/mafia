import { h, Component } from 'preact';
import style from './style';
import { route } from 'preact-router';
import FixedButton from './../../components/fixedbutton';
console.log(FixedButton);
class Splash extends Component {
  navigateTo = (path) => {
    route(path);
  }

  onStartClick = () => {
    this.navigateTo('/home');
  }

  onLearnClick = () => {
    window.location.href = 'https://en.wikipedia.org/wiki/Mafia_(party_game)'
  }
  render() {
    return (
      <div class={style.splash}>
        <div class={style.outerWrapper}>
          <img class={style.image} src="/assets/splash.png" />

          <div class={style.btnGrp}>
            <FixedButton onClick={this.onStartClick} buttonStyle={style.primBtn}>START</FixedButton>
            <FixedButton onClick={this.onLearnClick} secondary buttonStyle={style.secBtn}> LEARN TO PLAY</FixedButton>
          </div>
        </div>


      </div>
    )
  }
}

export default Splash;