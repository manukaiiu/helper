import React, { useState } from 'react';
import Item from './Item';
import Create from './Create';

function App() {

  const [items, setItems] = useState([]);

  function addItem(newItem) {
    setItems(prevItems => {
      return [...prevItems, newItem];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((singleItem, index) => {
        return index !== id;
      }
      );
    });
  }

  function changeItem(id, content) {
    setItems(prevItems => {
      var helperArray = [...prevItems];
      helperArray[id].content = content;
      return helperArray;
    });
  }

  return (
    <div>
      <Create onAdd={addItem} />
      {items.map((singleItem, index) => {
        return (
          <Item
            key={index}
            id={index}
            content={singleItem.content}
            onDelete={deleteItem}
            onModification={changeItem}
          />
        );
      })}
    </div>
  );
}

export default App;
