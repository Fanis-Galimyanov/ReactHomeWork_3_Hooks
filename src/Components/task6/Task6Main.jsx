import React, {useCallback, useState} from "react";
import MemoChild from "./MemoChild";
import OrdinaryChild from "./OrdinaryChild";

export default function Task6Main(){
    const [num, setNum] = useState(0);
    const [itemsMemo, setItemsMemo] = useState([]);
    const [itemsOrdinary, setItemsOrdinary] = useState([]);

    const addItemMemo = useCallback(() => {
        setItemsMemo([...itemsMemo, 'Элемент мемоизированного компонента']);
    }, [itemsMemo]);

    function addItemOrdinary() {
        setItemsOrdinary([...itemsOrdinary, 'Элемент обычный компонента']);
    }


    console.log('render Home');

    return (
        <>
            <p><button onClick={() => setNum(num + 1)}> Рендерим Home </button></p>
            <p>Клики: {num}</p>

            <MemoChild items={itemsMemo} addItem={addItemMemo}/>
            <OrdinaryChild items={itemsOrdinary} addItem={addItemOrdinary}/>
        </>
    );
}