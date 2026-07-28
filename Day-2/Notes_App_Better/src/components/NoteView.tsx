type Props = {
    Title: string;
};

type Note = {
    Title: string;
    Contents: string;
};

function NoteView({ Title }: Props) {
    const data = localStorage.getItem(Title);

    if (!data) {
        return <h1>No Note Found</h1>;
    }

    const note: Note = JSON.parse(data);

    return (
        <div>
            <h1>{note.Title}</h1>

            <hr />

            <p>{note.Contents}</p>
        </div>
    );
}

export default NoteView;