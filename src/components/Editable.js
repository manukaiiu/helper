import React, { useState/* , useEffect */ } from "react";

function Editable(props){

  const [isEditing, setEditing] = useState(false);

  // useEffect(() => {
  //   if (props.ref && props.ref.current && isEditing === true) {
  //     props.ref.current.focus();
  //   }
  // }, [isEditing, props.ref]);

  const handleKeyDown = (event, type) => {
  };

  return (
    <div {...props}>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={e => handleKeyDown(e, props.type)}
        >
          {props.children}
        </div>
      ) : (
        <div
          onClick={() => setEditing(true)}
        >
          <span>
            {props.text || props.placeholder || "Editable content"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Editable;