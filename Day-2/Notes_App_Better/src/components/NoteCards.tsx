import { Link } from "@tanstack/react-router";

type Note = {
    Title: string;
    Contents: string;
};

function NoteCards() {
    const keys = Object.keys(localStorage);

    if (keys.length === 0) {
        return <h1>No Notes Found</h1>;
    }

    return (
        <>
            {keys.map((key) => {
                const data = localStorage.getItem(key);

                if (!data) return null;

                const note: Note = JSON.parse(data);

                return (
                    <div
                        key={key}
                        style={{
                            border: "1px solid black",
                            padding: "10px",
                            margin: "10px",
                        }}
                    >
                        <h2>{note.Title}</h2>

                        <Link
                            to="/view/$Title"
                            params={{ Title: note.Title }}
                        >
                            <button>View</button>
                        </Link>

                        <button>Edit</button>

                        <button>Delete</button>
                    </div>
                );
            })}
        </>
    );
}

export default NoteCards;