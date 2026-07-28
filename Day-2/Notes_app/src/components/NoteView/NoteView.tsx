type Props = {
    Title: string;
};

function NoteView({Title}: Props){
    const data = localStorage.getItem(Title);
    if (!data) {
        return <h1>No Note Found</h1>;
    }

    const note = JSON.parse(data) as {
        Title: string;
        Contents: string;
    };

    return ( 
        <div style={{ borderStyle: 'solid', padding: '16px', margin: '8px 0' }}>
            <h1>{note.Title}</h1>
            <h2>{note.Contents}</h2>
        </div>
    );
}

export default NoteView;



