import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@material-ui/icons/Clear";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((prevItem) => {
      return {
        ...prevItem,
        [name]: value
      };
    });
    setIsExpanded(true);
  }

  function submitNote(event) {
    props.onAdd(inputText);
    event.preventDefault();
    setInputText({ title: "", content: "" });
    setIsExpanded(false);
  }
  const [isExpanded, setIsExpanded] = useState(false);
  function expand() {
    setIsExpanded(true);
  }

  function noteClear() {
    setIsExpanded(false);
    setInputText({ title: "", content: "" });
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={inputText.title}
          />
        )}
        <div className="icon-wrap">
          {!isExpanded && <CreateIcon />}
          <textarea
            onClick={expand}
            onChange={handleChange}
            name="content"
            placeholder="Take a note..."
            rows={isExpanded ? "3" : "1"}
            value={inputText.content}
          />
        </div>
        <Zoom
          in={isExpanded}
          style={{ position: "absolute", right: "50px", bottom: "-20px" }}
        >
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
        <Zoom
          in={isExpanded}
          style={{ position: "absolute", right: "15px", bottom: "-20px" }}
        >
          <Fab onClick={noteClear}>
            <ClearIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
