import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = React.useState(false);
  const [note, setNote] = React.useState({ title: "", content: "" });

  function handleChange(event) {
    // const name = event.target.name;
    // const value = event.target.value;

    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function addNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({ title: "", content: "" });
  }

  function expand() {
    setExpanded(true);
  }

  function btoNormal() {
    setExpanded(false);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          /* rows={isExpanded ? 3 : 1}*/
          onClick={expand}
          onDoubleClick={btoNormal}
        />

        {isExpanded ? <button onClick={addNote}>
          <AddIcon />
        </button> : null}

        {/* <Zoom in={isExpanded}>
          <Fab onClick={addNote}>
            <AddIcon />
          </Fab>
        </Zoom> */}
      </form>
    </div>
  );
}

export default CreateArea;
