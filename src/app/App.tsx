// import reactLogo from './assets/react.svg'
import classNames from 'classnames';
import { NavigationBar } from 'widgets/NavigationBar';
import AppRouter from './providers/RouterProvider/ui/AppRouter';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import './styles/index.scss';

function App() {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <NavigationBar className='navigationBar' />
      <div className='container'>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
