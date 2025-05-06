export default function OrdinaryChild({ items, addItem }){

    const result = items.map((item, index) => {
		return <p key={index}>{item}</p>;
	});

    console.log('OrdinaryChild is render');

    return(
  
        <div id="OrdinaryChild">
			<h3>OrdinaryChild</h3>
			{result}
			<button onClick={addItem}>Добавить элемент</button>
		</div>


    );
}