import React/*,  { useRef } */ from 'react';
import Editable from './Editable';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Item(props) {

//  const inputRef = useRef();

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleModification(e) {
    props.onModification(props.id, e.target.value);
  }

  return (
    <div className="item">
      <Editable
        text={props.content}
        placeholder="..."
        type="input"
      >
        <input
//        ref={inputRef}
          type="text"
          name="item"
          placeholder="..."
          value={props.content}
          onChange={handleModification}
        />
      </Editable>
      <button onClick={handleClick}>
        <DeleteForeverIcon />
      </button>
    </div>
  )

}

export default Item;