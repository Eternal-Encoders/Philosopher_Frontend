// import reactLogo from './assets/react.svg'
import classNames from 'classnames';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import './styles/index.scss';

function App() {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <h1>
        Симулятор дилемм
      </h1>
    </div>
  );
}

export default App;
