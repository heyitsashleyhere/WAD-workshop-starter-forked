import { useState } from "react";
import Input from "./Input.js";

const MiroItem = ({ type }) => {
  const [content, setContent] = useState("")

  const handleUpdate = () => {
    console.log('content :>> ', content);
  }

  return (
    <div className="miro-item-container">
      {/* Name */}
      <h3>{type}</h3>

      {/* Input */}
      <div id="miro-item-controls-container">
      <div id="miro-item-input-container">
        <Input 
            onChange={(value) => setContent(value) }
            label={"Content"}
            placeholder={"Type new input"}/>

          <button 
            className="button button-primary" 
            type="button" 
            onClick={handleUpdate}>
            Primary button
          </button>

      </div>

      </div>
      {/* Button */}
    </div>
  );
};

export default MiroItem;
