import { useContext, useEffect  } from "react";
import { ThemeContext } from "./Task1Main";

export default function ThemedButton(){
    const themProvider = useContext(ThemeContext);
    useEffect(() => {
            document.body.style.backgroundColor = themProvider.collorThem.background;
            document.getElementById('knopochka').style.backgroundColor = themProvider.collorThem.background;
            document.getElementById('knopochka').style.color = themProvider.collorThem.foreground;
        }, [themProvider.collorThem]);
    return(
        <button id ="knopochka" onClick={themProvider.changeColor}>
            <h1>Поменять цвет фона</h1>
        </button>

    );
}5