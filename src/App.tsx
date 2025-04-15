import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';


function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput labelText='Task' id='input' type='text' placeholder='Digite seu foco' />
          </div>

          <div className='formRow'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className='formRow'>
            <Cycles />
            <p>000000</p>
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>
    </>
  )
}

export default App
