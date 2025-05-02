import { useContext, useEffect  } from "react";
import { changeTheme, ThemeContext } from "./Task1Main";

export default function ThemedButton(){
    const themes = useContext(ThemeContext);
    useEffect(() => {
            document.body.style.backgroundColor = themes.background;
            document.getElementById('knopochka').style.backgroundColor = themes.background;
            document.getElementById('knopochka').style.color = themes.foreground;
        }, [themes]);
    return(
        <button id ="knopochka" onClick={changeTheme}>
            <h1>Поменять цвет фона</h1>
        </button>

    );
}5