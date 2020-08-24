import React, { useState } from "react";

function Create(props) {
  const [item, setItem] = useState({
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setItem(prevItem => {
      return {
        ...prevItem,
        [name]: value
      };
    });
  }

  function submitItem(event) {
    props.onAdd(item);
    setItem({
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <textarea
          name="content"
          onChange={handleChange}
          value={item.content}
          placeholder="+ write here"
          rows="1"
        />
        <button onClick={submitItem}>Add</button>
      </form>
    </div>
  );
}

export default Create;
