import { useState } from 'react';
import Calculator from './components/Calculator';
import Themes from './components/Themes';
import './stylesheets/App.css';

function App() {
  const [theme, setTheme] = useState('highlight-azure');

  const onClickApplyTheme = (themeName) => {
    const newTheme = "highlight-".concat(themeName.toString().toLowerCase());
    setTheme(newTheme);
  }

  return (
    <>
      <Calculator theme={theme} />
      <Themes onClickApplyTheme={onClickApplyTheme} />
    </>
  );
}

export default App;