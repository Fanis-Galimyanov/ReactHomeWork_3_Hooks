import {createContext, useState} from 'react'
import './App.css'
import Toolbar from './Components/Toolbar';

let themeColor, setThemeColor;

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const changeTheme = function(){
  if(themeColor === themes.light){
    setThemeColor(themes.dark);
    localStorage.setItem('themColor',JSON.stringify(themes.dark));
  }
  else{
    setThemeColor(themes.light);
    localStorage.setItem('themColor',JSON.stringify(themes.light));
  }
}

export const ThemeContext = createContext(null);

function App() {
  [themeColor, setThemeColor] = useState(JSON.parse(localStorage.getItem('themColor')));
  
  console.log(themeColor);

  return (
    <ThemeContext.Provider value={themeColor}>
      <Toolbar/>
    </ThemeContext.Provider>
  );
}

export default App
