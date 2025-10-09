// import reactLogo from './assets/react.svg'
import classNames from 'classnames';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import './styles/index.scss';
import { Chat } from 'widgets/Chat';

function App() {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <Chat className='chat' />
    </div>
  );
}

export default App;
