
import {createContext, useState} from 'react'
import Toolbar from './Toolbar';


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

export const ThemeContext = createContext(null);

let themColor,  setThemeColor;

export const changeTheme = function(){
    if(themColor === themes.light){
      setThemeColor(themes.dark);
      localStorage.setItem('themColor',JSON.stringify(themes.dark));
    }
    else{
      setThemeColor(themes.light);
      localStorage.setItem('themColor',JSON.stringify(themes.light));
    }
  }

export default function Task1Main(){

    [themColor, setThemeColor] = useState(JSON.parse(localStorage.getItem('themColor')));
  
  return (
    <ThemeContext.Provider value={themColor}>
      <Toolbar/>
    </ThemeContext.Provider>
  );
}