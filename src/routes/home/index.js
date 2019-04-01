import { h } from 'preact';
import style from './style';
import Card from './../../components/card';
import Counter from './../../components/counter';
import Content from './../../components/content';
import FixedButton from './../../components/fixedbutton';

const Home = () => (
  <div class={style.home}>
    <Card>
      <div class={style.cardGroup}>
        <Content>
          Total People
        </Content>
        <Counter />
      </div>
    </Card>

    <Card>
      <div class={style.cardGroup}>
        <Content>
          Villagers
        </Content>
        <Counter />
      </div>
    </Card>

    <Card>
      <div class={style.cardGroup}>
        <Content>
          Mafia
        </Content>
        <Counter />
      </div>
    </Card>

    <Card>
      <div class={style.cardGroup}>
        <Content>
          Doctor
        </Content>
        <Counter />
      </div>
    </Card>

    <Card>
      <div class={style.cardGroup}>
        <Content>
          Detective
        </Content>
        <Counter />
      </div>
    </Card>
    <FixedButton>Start</FixedButton>

  </div>
);

export default Home;
