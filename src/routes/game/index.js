import { h, Component } from 'preact';
import style from './style';
import Card from './../../components/card';
import LongPress from './../../components/longpress';
import Content from './../../components/content';

function ProgressBar(props) {
  return <div class={`${style.progressBar} ${props.enable ? style.showProgress : ''}`} />;

}
let ROLES = ['VILLAGER', 'DOCTOR', 'MAFIA', 'DETECTIVE'];

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }
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

  getInitialGameState = () => ({
    VILLAGER: 4,
    DOCTOR: 1,
    MAFIA: 2,
    DETECTIVE: 2
  })

  getInitialConfigState = () => ({
    isTouched: false,
    selectedRole: undefined,
    showProgress: true
  })

  getInitialState = () => {
    return ({
      ...this.getInitialConfigState(),
      ...this.getInitialGameState()

    });
  }

  assignRole = () => {
    console.log("called")
    navigator.vibrate && navigator.vibrate(200);
    // Select a random role from List of roles;
    // If Count of That role > 0, assign the role to state
    // Decrement Count
    // If remaining count for that role is 0 remove role from ROLES ARRAY

    if (!ROLES.length) {
      alert("round over start over");
      return;
    }
    const randomIndex = Math.floor(Math.random() * ROLES.length);
    const selectedRole = ROLES[randomIndex];
    const currentRoleCount = this.state[selectedRole];
    const remainingRoleCount = currentRoleCount - 1;
    console.log(randomIndex, selectedRole, currentRoleCount, remainingRoleCount);
    if (currentRoleCount > 0) {
      this.setState({
        selectedRole,
        [selectedRole]: remainingRoleCount,
        showProgress: false
      }, this.startResetRountTimeout);

      if (remainingRoleCount === 0) {
        ROLES = [...ROLES.slice(0, randomIndex), ...ROLES.slice(randomIndex + 1)];
      }
    }
  }

  startResetRountTimeout = () => {
    setTimeout(() => {
      this.setState(this.getInitialConfigState());
    }, 2000)
  }

  // Note: `user` comes from the URL, courtesy of our router
  render() {
    const { isTouched, selectedRole, showProgress } = this.state;
    return (
      <div class={style.game}>
        <Card>
          hello
        </Card>

        <LongPress
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd} time={2000}
          onLongPress={this.assignRole}>
          <Card>
            <ProgressBar enable={isTouched} />
            <Content>{selectedRole || 'Long Press to get Your Role'}</Content>
          </Card>
        </LongPress>
      </div>
    );
  }
}
