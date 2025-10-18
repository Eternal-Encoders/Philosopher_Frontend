// import reactLogo from './assets/react.svg'
import classNames from 'classnames';
import { Chat } from 'widgets/Chat';
import { NavigationBar } from 'widgets/NavigationBar';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import './styles/index.scss';

function App() {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <NavigationBar className='navigationBar' />
      <div className='container'>
        <Chat className='chat' />
      </div>
    </div>
  );
}

export default App;
