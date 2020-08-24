import React from 'react';

function Item(props) {

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="item">
      <p>{props.content}</p>
      <button onClick={handleClick}>delete</button>
    </div>
  )

}

export default Item;