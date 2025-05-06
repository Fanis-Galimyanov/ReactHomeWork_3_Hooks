import { memo } from 'react';

export default memo(function ChildTwo({hellofuncOrdinary, messageOrdinary}){
    console.log('ChildTwo Rendered');
    return(
        <>
             <button onClick={hellofuncOrdinary}>Обычная функция</button>
             <h1>{messageOrdinary}</h1> 
        </>
    );
})