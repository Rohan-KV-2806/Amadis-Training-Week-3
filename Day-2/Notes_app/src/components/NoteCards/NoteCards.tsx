type Note = {
    Title: string;
    Contents: string;
};

type Props = {
    ViewNote: (Title: string) => void;
};

function NoteCards({ ViewNote }: Props) {

    const keys: string[] = Object.keys(localStorage);

    return (
        <>
            {keys.map((key: string) => {

                const data = localStorage.getItem(key);

                if (!data) return null;

                const note: Note = JSON.parse(data);

                return (
                    <div
                        key={key}
                        style={{
                            borderStyle: "solid",
                            padding: "16px",
                            margin: "8px 0",
                        }}
                    >
                        <h1>{note.Title}</h1>

                        <button onClick={() => ViewNote(note.Title)}>
                            View
                        </button>

                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                );
            })}
        </>
    );
}

export default NoteCards;