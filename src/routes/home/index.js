import { h, Component } from 'preact';
import style from './style';
import { route } from 'preact-router';
import Card from './../../components/card';
import Counter from './../../components/counter';

import Content from './../../components/content';
import FixedButton from './../../components/fixedbutton';
import ButtonGroup from './../../components/buttongroup';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialCounterState();
  }

  getInitialCounterState = () => ({
    VILLAGER: 0,
    DOCTOR: 0,
    MAFIA: 0,
    DETECTIVE: 0
  })
  navigateTo = (path) => {
    route(path);
  };
  getTotalCount = () => {
    const totalCount = Object.keys(this.state)
      .reduce((accum, curr) => {
        return accum + this.state[curr];
      }, 0);

    return totalCount;
  }

  onChangeCounter = (label, value) => {
    this.setState({
      [label]: value
    });
  }

  onStartClick = () => {
    const {
      VILLAGER,
      DOCTOR,
      MAFIA,
      DETECTIVE
    } = this.state;
    if (!VILLAGER || !DOCTOR || !MAFIA || !DETECTIVE) {
      alert('Select atleast one of each type');
      return;
    }
    localStorage.setItem('settings', JSON.stringify(this.state));
    this.navigateTo('/game');
  }

  resetCounters = () => {
    this.setState(this.getInitialCounterState());
  }

  render() {
    const {
      VILLAGER,
      DOCTOR,
      MAFIA,
      DETECTIVE
    } = this.state;

    const totalCount = this.getTotalCount();
    return (
      <div class={style.home}>
        <Card>
          <div class={style.cardGroup}>
            <Content>
              Villagers
            </Content>
            <Counter onChange={this.onChangeCounter} count={VILLAGER} value={'VILLAGER'} />
          </div>
        </Card>

        <Card>
          <div class={style.cardGroup}>
            <Content>
              Mafia
            </Content>
            <Counter onChange={this.onChangeCounter} count={MAFIA} value={'MAFIA'} />
          </div>
        </Card>

        <Card>
          <div class={style.cardGroup}>
            <Content>
              Doctor
            </Content>
            <Counter onChange={this.onChangeCounter} count={DOCTOR} value={'DOCTOR'} />
          </div>
        </Card>

        <Card>
          <div class={style.cardGroup}>
            <Content>
              Detective
            </Content>
            <Counter onChange={this.onChangeCounter} count={DETECTIVE} value={'DETECTIVE'} />
          </div>
        </Card>
        <ButtonGroup>

          <FixedButton onClick={this.resetCounters} secondary>RESET</FixedButton>
          <FixedButton onClick={this.onStartClick} disabled={!totalCount}>START</FixedButton>
        </ButtonGroup>


      </div>
    );
  }
}

export default Home;
