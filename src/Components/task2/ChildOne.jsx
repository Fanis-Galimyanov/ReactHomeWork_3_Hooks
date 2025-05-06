export default function ChildOne({ items, addItem }){

    const result = items.map((item, index) => {
		return <p key={index}>{item}</p>;
	});

    console.log('ChildOne Rendered');

    return(
        <>
            <h1>ChildOne</h1>
            <h3>Our items</h3>
			{result}
			<button onClick={addItem}>add item</button>
        </>
    );
}