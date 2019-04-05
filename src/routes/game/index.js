import { h, Component } from 'preact';
import { route } from 'preact-router';
import style from './style';
import Card from './../../components/card';
import LongPress from './../../components/longpress';
import Content from './../../components/content';
import FixedButton from './../../components/fixedbutton';
import ButtonGroup from './../../components/buttongroup';
import IoAndroidArrowBack from 'preact-icons/io/android-arrow-back.js';
import Header from './../../components/header';

function ProgressBar(props) {
  return <div class={`${style.progressBar} ${props.enable ? style.showProgress : ''}`} />;

}

export default class Game extends Component {
  ROLES = ['VILLAGER', 'DOCTOR', 'MAFIA', 'DETECTIVE']
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    if (window && !window.localStorage.getItem('settings')) {
      this.navigateTo('/');
    }
  }

  recreateRolesArray = () => {
    this.ROLES = ['VILLAGER', 'DOCTOR', 'MAFIA', 'DETECTIVE']
  }

  navigateTo = (path) => {
    route(path);
  };

  onTouchStart = (e) => {
    this.setState({
      isTouched: true
    });
  }

  onTouchEnd = (e) => {
    this.setState({
      isTouched: false
    });
  }

  onTouchMove = (e) => {
    this.setState({
      isTouched: false
    });
  }

  getInitialGameState = () => {
    const serialisedState = localStorage.getItem('settings');
    return JSON.parse(serialisedState);

  }

  getInitialConfigState = () => ({
    isTouched: false,
    selectedRole: undefined,
    showProgress: true,
    isAssigned: false,
    isRoundOver: false
  })

  getInitialState = () => {
    return ({
      ...this.getInitialConfigState(),
      ...this.getInitialGameState()

    });
  }

  assignRole = () => {
    if (selectedRole) {
      return;
    }
    navigator.vibrate && navigator.vibrate(200);
    // Select a random role from List of roles;
    // If Count of That role > 0, assign the role to state
    // Decrement Count
    // If remaining count for that role is 0 remove role from ROLES ARRAY

    if (!this.ROLES.length) {
      alert("round over start over");
      return;
    }
    const randomIndex = Math.floor(Math.random() * this.ROLES.length);
    const selectedRole = this.ROLES[randomIndex];
    const currentRoleCount = this.state[selectedRole];
    const remainingRoleCount = currentRoleCount - 1;

    if (currentRoleCount > 0) {
      this.setState({
        selectedRole,
        [selectedRole]: remainingRoleCount,
        showProgress: false
      }, this.startResetRountTimeout);

      if (remainingRoleCount === 0) {
        this.ROLES = [...this.ROLES.slice(0, randomIndex), ...this.ROLES.slice(randomIndex + 1)];
      }

      if (!this.ROLES.length) {
        // round over
        this.setState({
          isRoundOver: true
        });
      }
    }
  }

  startResetRountTimeout = () => {
    setTimeout(() => {
      this.setState({

        isAssigned: true
      });
    });
  }

  restartRound = () => {
    this.setState(this.getInitialConfigState());
  }

  resetGame = () => {
    this.recreateRolesArray();
    this.setState(this.getInitialState());
  }

  goBack = () => {
    this.navigateTo('/home');
  }

  getTotalCount = () => {
    const totalCount = this.state.MAFIA + this.state.DOCTOR + this.state.VILLAGER + this.state.DETECTIVE;
    return totalCount;
  }

  // Note: `user` comes from the URL, courtesy of our router
  render() {
    const { isTouched, selectedRole, showProgress, isRoundOver } = this.state;
    const totalRolesLeft = this.getTotalCount();
    return (
      <div>
        <Header />
        <div class={style.game}>
          <IoAndroidArrowBack class={style.backicon} onClick={this.goBack} />
          <Card>
            <div class={style.cardGroup}>
              <Content>Roles left to assign</Content>
              <Content>{totalRolesLeft}</Content>
            </div>
          </Card>

          <div class={style.cardContainer}>
            <span class={style.cardLabel}>{!selectedRole ? 'Long Press to get your role' : ''}</span>
            <LongPress
              onTouchStart={this.onTouchStart}
              onTouchMove={this.onTouchMove}
              onTouchEnd={this.onTouchEnd} time={1000}
              onLongPress={this.assignRole}>
              <Card cardStyle={style.revealCard}>
                {showProgress && <ProgressBar enable={isTouched} />}
                <Content>{selectedRole || ''}</Content>
              </Card>
            </LongPress>

          </div>

          <ButtonGroup>

            <FixedButton secondary onClick={this.resetGame}>RESET</FixedButton>
            <FixedButton onClick={this.restartRound}
              disabled={showProgress || isRoundOver}>{isRoundOver ? 'START PLAYING' : 'NEXT PERSON'}</FixedButton>
          </ButtonGroup>
        </div>
      </div>

    );
  }
}
