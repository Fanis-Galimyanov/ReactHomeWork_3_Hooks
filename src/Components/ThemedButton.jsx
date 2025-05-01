import { useContext, useEffect  } from "react";
import { changeTheme, ThemeContext } from "../App";

export default function ThemedButton(){
    const theme = useContext(ThemeContext);
    useEffect(() => {
            document.body.style.backgroundColor = theme.background;
            document.getElementById('knopochka').style.backgroundColor = theme.background;
            document.getElementById('knopochka').style.color = theme.foreground;
        }, [theme]);
    return(
        <button id ="knopochka" onClick={changeTheme}>
            <h1>Поменять цвет фона</h1>
        </button>

    );
}