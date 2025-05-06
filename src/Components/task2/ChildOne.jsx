import { memo } from 'react';

export default memo(function ChildOne({ hellofuncMemo, messageMemo }){


    console.log('ChildOne Rendered');

    return(
        <>
            <button onClick={hellofuncMemo}>useCallback</button>
            <h1>{messageMemo}</h1> 
        </>
    );
})