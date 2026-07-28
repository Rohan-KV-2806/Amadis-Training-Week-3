import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

type Note = {
    Title: string;
    Contents: string;
};

function NoteForm() {
    const [Title, setTitle] = useState("");
    const [Contents, setContents] = useState("");

    const navigate = useNavigate();

    function AddNote() {
        const note: Note = {
            Title,
            Contents,
        };

        localStorage.setItem(Title, JSON.stringify(note));

        setTitle("");
        setContents("");

        navigate({
            to: "/",
        });
    }

    return (
        <div>
            <label htmlFor="title">Title</label>
            <br />

            <input
                id="title"
                type="text"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <br />
            <br />

            <label htmlFor="content">Content</label>
            <br />

            <textarea
                id="content"
                value={Contents}
                onChange={(e) => setContents(e.target.value)}
            />

            <br />
            <br />

            <button onClick={AddNote}>
                Add Note
            </button>
        </div>
    );
}

export default NoteForm;