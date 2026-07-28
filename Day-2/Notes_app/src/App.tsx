import NavBar from "./components/NavBar/NavBar";
import NoteCards from "./components/NoteCards/NoteCards";
import NoteForm from "./components/NoteForm/NoteForm";
import NoteView from "./components/NoteView/NoteView";

function App(){
  return(
    <div>
      <NavBar />
      <NoteForm />
      <NoteCards />
      <NoteView />
    </div>
  )
}

export default App;