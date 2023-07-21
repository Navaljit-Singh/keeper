import React , {useState}from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateForm from "./CreateForm";

function App() {
  const [count , setCount] = useState(0);
  function countIt(){
    setCount(count+1);
  }
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <Header />
      <CreateForm  onAdd={addNote} oncount = {countIt}/>
      <div className="clearfix">
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      </div>
      
      <Footer />
      
    </>
  );
}
export default App;
