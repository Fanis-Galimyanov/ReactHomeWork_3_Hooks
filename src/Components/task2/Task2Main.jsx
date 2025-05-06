import React, { useState, useCallback } from "react";

import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

export default function Task2Main() {

  const [num, setNum] = useState(0);
  const [items, setItems] = useState([]);

  function addItem() {
    setItems([...items, 'new item']);
  }

  console.log('Home Rendered');
	
	return <div>
		<button onClick={() => setNum(num + 1)}>click</button>
		<p>clicks: {num}</p>

    <ChildOne items={items} addItem={addItem} />
    <ChildTwo />
	</div>;
}