import React from 'react';
import './App.css';
//pages
import Home from './pages/Home'
//theming
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#60d9fb"
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Home />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
