import React, {useMemo, useCallback, useState} from "react";

export default function Task6Main(){
    const [myCurrentState, setMyCurrentState] = useState(' ');

    const myCalculation = useMemo(() => {
        return myCurrentState + 'test'
    }, [myCurrentState])

    console.log('render Home', myCalculation);
    return(
        <>
            My component
        </>
    );
}