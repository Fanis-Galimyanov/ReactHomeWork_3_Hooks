import { useContext } from "react";
import { changeTheme, ThemeContext } from "../App";

export default function ThemedButton(){
    const theme = useContext(ThemeContext);
    return(
        <button onClick={changeTheme} style={{background: theme.background, color: theme.foreground}}>
            <h1>Азат крутой! мальчик!!!!!!</h1>
        </button>

    );
}