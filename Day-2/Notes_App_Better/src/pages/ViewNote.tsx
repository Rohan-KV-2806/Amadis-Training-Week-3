import NavBar from "../components/NavBar";
import NoteView from "../components/NoteView";

type Props = {
    Title: string;
};

function ViewNote({ Title }: Props) {
    return (
        <>
            <NavBar />
            <NoteView Title={Title} />
        </>
    );
}

export default ViewNote;