import { memo } from 'react';

export default memo(function MemoChild({ items, addItem }){

    const result = items.map((item, index) => {
		return <p key={index}>{item}</p>;
	});

    console.log('MemoChild is render');

    return(
        <div id="MemoChild">
			<h3>MemoChild</h3>
			{result}
			<button onClick={addItem}>Добавить элемент</button>
		</div>
    );
})