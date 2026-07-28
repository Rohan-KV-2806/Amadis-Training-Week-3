import { useState } from "react";

function NoteForm() {
    const [Title, setTitle] = useState("");
    const [Contents, setContents] = useState("");
    function AddNote() {
        const note = {
            Title,
            Contents,
        };
        localStorage.setItem(Title, JSON.stringify(note));
        setTitle("");
        setContents("");
    }

    return (
        <>
            <label>Title</label>
            <input
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <label>Content</label>
            <textarea
                value={Contents}
                onChange={(e) => setContents(e.target.value)}
            />
            <br />
            <button onClick={AddNote}>Add Note</button>
        </>
    );
}

export default NoteForm;